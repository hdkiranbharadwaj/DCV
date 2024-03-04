import React from "react";
import { useState, useEffect } from "react";

function DownloadButton(props) {
  const userid = props.userid;
  const [copied, setCopied] = useState(false);
  function HandleSetCopied() {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  }
  const [filename, setPdf] = useState(null);
  async function getPdf() {
    try {
      const response = await fetch(
        `http://localhost:5000/get-resume/${userid}`
      );
      const jsonData = await response.json();

      console.log(jsonData[0].filename);
      setPdf(jsonData[0].filename);
    } catch (err) {
      console.error(err.message);
    }
  }
  useEffect(() => {
    getPdf();
  }, []);

  const handleDownload = async () => {
    try {
      console.log(`http://localhost:5000/files/${filename}`);
      const response = await fetch(`http://localhost:5000/files/${filename}`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  return (
    <div>
      <center>
        <button
          className="btn btn-outline-success btn-lg mt-4"
          onClick={() => {
            handleDownload();
            HandleSetCopied();
          }}
        >
          {!copied && "Download Résumé"}
          {copied && "Downloading..."}
        </button>
      </center>
    </div>
  );
}

export default DownloadButton;
