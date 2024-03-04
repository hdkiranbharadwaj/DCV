import React from "react";
import PublicPdfRenderer from "./PublicPdfRenderer";
import PublicCard from "./PublicCard";
import DownloadButton from "./DownloadButton";
function MainPublic(props) {
  return (
    <div style={{ display: "flex" }}>
      <PublicPdfRenderer
        style={{ flex: 1 }}
        userid={props.userid}
        setUser={props.setUser}
      />
      <div className="mt-5" style={{ flex: 1 }}>
        <PublicCard userid={props.userid} />
        <DownloadButton userid={props.userid} />
      </div>
    </div>
  );
}
export default MainPublic;
