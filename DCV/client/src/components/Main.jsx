import React from "react";
import Navbar from "./Navbar";
import { useCookies } from "react-cookie";
import Card from "./Card";
import UploadButton from "./UploadButton";
import RenderPDF from "./RenderPDF";

function Main() {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const email = cookies.Email;
  return (
    <>
      <Navbar />
      <div className="background-radial-gradient full-height">
        <div style={{ display: "flex" }}>
          <RenderPDF style={{ flex: 1 }} />
          <div className="mt-5" style={{ flex: 1 }}>
            <Card />
            <UploadButton />
          </div>
        </div>
      </div>
    </>
  );
}
export default Main;
