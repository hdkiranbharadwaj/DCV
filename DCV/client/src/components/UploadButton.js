import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

function UploadButton() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const email = cookies.Email;
  async function getData() {
    try {
      const response = await fetch(`http://localhost:5000/details/${email}`);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  async function submitFile(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userid", data.userid);
    formData.append("title", "resume");
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5000/upload-files", {
        method: "POST",
        body: formData,
      });

      console.log("File uploaded successfully");
    } catch (error) {
      console.error("Error uploading file:", error.message);
    }
  }
  const [copied, setCopied] = useState(false);
  function HandleSetCopied() {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }
  return (
    <div>
      <center>
        <br></br>
        <form
          onSubmit={(e) => {
            file && submitFile(e);
            window.location.reload();
            HandleSetCopied();
          }}
        >
          <input
            type="file"
            className="form-control mt-3"
            style={{ width: "23rem" }}
            accept="application/pdf"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          <button type="submit" class="btn btn-outline-danger btn-lg mt-4 ">
            {!copied && "Upload"}
            {copied && "Uploaded!!"}
          </button>
        </form>
      </center>
    </div>
  );
}
export default UploadButton;
