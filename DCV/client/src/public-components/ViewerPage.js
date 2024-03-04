import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import MainPublic from "./MainPublic";
import UserNotFound from "./UserNotFound";

function ViewerPage() {
  const { userid } = useParams();
  console.log(userid);
  const [userPresent, setUserPresent] = useState(true);
  function HandleSetUserPresent(val) {
    setUserPresent(val);
  }
  async function CheckUserPresent() {
    try {
      const response = await fetch(`http://localhost:5000/user/${userid}`);
      if (response.status == 404) {
        setUserPresent(false);
      } else {
        setUserPresent(true);
      }
    } catch (err) {
      console.error(err.message);
    }
  }
  useEffect(() => {
    CheckUserPresent();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="background-radial-gradient  full-height">
        {userPresent && <MainPublic userid={userid} setUser={setUserPresent} />}
        {!userPresent && <UserNotFound />}
      </div>
    </div>
  );
}

export default ViewerPage;
