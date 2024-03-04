// Import Libraries
import express from "express";
import cors from "cors";
import pg from "pg";
import bodyParser from "body-parser";
import db_ from "./db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const saltRounds = 10;
import { diskStorage } from "multer";
import multer from "multer";
import env from "dotenv";
import fs from "fs";

// Constants
const port = 5000;
const app = express();
env.config();
const db = db_;

// Middleware
env.config();
app.use(cors());
app.use(express.static("public"));
app.use("/files", express.static("files"));
app.use(express.json());
db.connect();

// Routes

// Get Files
app.get("/get-file/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const response = await db.query(
      "SELECT filename FROM files WHERE userid = (SELECT userid FROM users WHERE email =$1);",
      [email]
    );
    if (response.rowCount === 0) {
      const defaultFile = [{ filename: "dcv-template.pdf" }];
      res.json(defaultFile);
    } else {
      res.json(response.rows);
    }
  } catch (err) {
    console.error(err);
  }
});

// Upload Files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, file.fieldname + "-" + uniqueSuffix + "resume.pdf");
  },
});
const upload = multer({ storage: storage });
app.post("/upload-files", upload.single("file"), async (req, res) => {
  const userid = req.body.userid;
  const deleteResult = await db.query("SELECT * FROM files WHERE userid=$1", [
    userid,
  ]);
  if (deleteResult.rowCount > 0) {
    await db.query("DELETE FROM files WHERE userid=$1", [userid]);
    const deletedFileName = deleteResult.rows[0].filename;
    try {
      const filePath = `./files/${deletedFileName}`;
      fs.unlinkSync(filePath);
    } catch (err) {
      console.error(err);
    }
  }
  const result = await db.query(
    "INSERT INTO files (userid, filename) VALUES ($1, $2)",
    [userid, req.file.filename]
  );
  res.status(200).send("Done");
});

// Signup
app.post("/signup", async (req, res) => {
  const email = req.body.email;
  const fname = req.body.fname;
  const lname = req.body.lname;
  const phno = req.body.phno;
  const password = req.body.password;
  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (checkResult.rows.length > 0) {
      res.status(400).send("Email already exists. Try logging in.");
    } else {
      // Hashing
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.log(err);
          res.status(500).send("Error hashing password");
        } else {
          const result = await db.query(
            "INSERT INTO users (fname,lname,phno,email,hash) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [fname, lname, phno, email, hash]
          );
          const token = jwt.sign({ email }, "secret", { expiresIn: "1hr" });
          res.status(200).json({ email, token });
        }
      });
    }
  } catch (err) {
    console.error(err);
  }
});

// Login
app.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const storedPassword = user.hash;
      bcrypt.compare(password, storedPassword, (err, result) => {
        if (err) {
          console.error(err);
        }
        if (result) {
          const token = jwt.sign({ email }, "secret", { expiresIn: "1hr" });

          res.status(200).json({ email, token });
        } else {
          res.status(400).send("Incorrect Password");
        }
      });
    } else {
      res.status(500).send("User not found");
    }
  } catch (err) {
    console.error(err);
  }
});

//Get details of the user
app.get("/details/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const response = await db.query(
      "SELECT fname,lname,phno,email,userid FROM users WHERE email=$1 ",
      [email]
    );
    res.json(response.rows[0]);
  } catch (err) {
    console.error(err);
  }
});

//Get the details using userid
app.get("/user/:userid", async (req, res) => {
  try {
    const { userid } = req.params;
    const response = await db.query(
      "SELECT fname,lname,phno,email,userid FROM users WHERE userid=$1 ",
      [userid]
    );
    if (response.rowCount == 0) {
      res.status(404).json("UserNotPresent");
    } else {
      res.status(200).json(response.rows[0]);
    }
  } catch (err) {
    console.error(err);
  }
});

// Get Files using userid
app.get("/get-resume/:userid", async (req, res) => {
  try {
    const { userid } = req.params;
    const response = await db.query(
      "SELECT filename FROM files WHERE userid = $1",
      [userid]
    );
    res.json(response.rows);
  } catch (err) {
    console.error(err);
  }
});

app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});
