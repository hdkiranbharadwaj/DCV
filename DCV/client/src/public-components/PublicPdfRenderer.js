import PdfViewer from "../components/PdfViewer";
import React, { useEffect, useState } from "react";
function PublicPdfRenderer(props) {
  const userid = props.userid;
  const [pdf, setPdf] = useState(null);

  async function getPdf() {
    try {
      const response = await fetch(
        `http://localhost:5000/get-resume/${userid}`
      );
      const jsonData = await response.json();
      console.log("This");
      console.log(jsonData.length == 0);
      if (jsonData.length == 0) {
        props.setUser(false);
      }
      setPdf(jsonData[0].filename);
    } catch (err) {
      console.error(err.message);
    }
  }
  useEffect(() => {
    getPdf();
  }, []);
  return <PdfViewer url={`http://localhost:5000/files/${pdf}`} />;
}
export default PublicPdfRenderer;
