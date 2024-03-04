import React, { useEffect } from "react";

function PdfViewer(props) {
  useEffect(() => {
    const handleBeforeUnload = () => {};

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  console.log(props.url);
  return (
    <iframe
      className="my-3 mx-3"
      title="PDF Viewer"
      src={props.url}
      frameBorder={0}
      width="65%"
      height="700px"
    ></iframe>
  );
}

export default PdfViewer;
