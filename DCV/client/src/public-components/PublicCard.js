import React, { useEffect, useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
function Card(props) {
  const [data, setData] = useState(null);
  const userid = props.userid;
  const [copied, setCopied] = useState(false);
  function HandleSetCopied() {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }
  async function getData() {
    try {
      const response = await fetch(`http://localhost:5000/user/${userid}`);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    data && (
      <center>
        <div class="card border-dark mb-3 background-gradient-card">
          <div class="card-header">
            <h2 class="card-title uppercase-text ">
              {data.fname} {data.lname}
            </h2>
          </div>
          <div class="card-body text-dark">
            <h5 class="card-title">Quick Contact :</h5>
            <br />
            <div>
              <PhoneIcon fontSize="small" />
              &emsp;{data.phno}
            </div>
            <br />
            <div>
              <EmailIcon fontSize="small" />
              &emsp;{data.email}
            </div>
            <br />
            <div>
              <PermIdentityIcon fontSize="small" />
              &emsp;{data.userid}
            </div>
            <div className="mt-5">
              <center>
                <button
                  type="button"
                  class="btn btn-outline-warning"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `http://localhost:3000/${data.userid}`
                    );
                    HandleSetCopied();
                  }}
                >
                  {!copied && "Copy User Link"}
                  {copied && "Copied to Clipboard!!"}
                </button>
              </center>
            </div>

            <p class="card-text">
              The above information is entered by user and may or may not
              resemble with the details in the resume. Please verify with
              resume, for any clarifications. Data in the resume is the latest
              and superseeds any other information.
            </p>
          </div>
        </div>
      </center>
    )
  );
}
export default Card;
