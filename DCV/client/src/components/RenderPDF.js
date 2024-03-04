import PdfViewer from "./PdfViewer";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
function RenderPDF() {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const email = cookies.Email;
  const [pdf, setPdf] = useState(null);

  async function getPdf() {
    try {
      const response = await fetch(`http://localhost:5000/get-file/${email}`);
      const jsonData = await response.json();
      console.log(jsonData);
      setPdf(jsonData[0].filename);
    } catch (err) {
      console.error(err.message);
    }
  }
  useEffect(() => {
    getPdf();
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  function handleBeforeUnload() {
    getPdf();
  }
  return <PdfViewer url={`http://localhost:5000/files/${pdf}`} />;
}
export default RenderPDF;
