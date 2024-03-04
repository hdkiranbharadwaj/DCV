import { Fragment, useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";

function Auth(params) {
  const [userPresent, setUserPresent] = useState(false);
  const [signupData, setSignUpData] = useState();
  const [atHome, setAtHome] = useState(true);
  function HandleSetSignUpData(val) {
    setSignUpData(val);
  }
  function HandleSetUserPresent(val) {
    setUserPresent(val);
  }
  function HandleSetAtHome(val) {
    setAtHome(val);
  }

  if (atHome) {
    return (
      <Home PAtHome={HandleSetAtHome} PUserPresent={HandleSetUserPresent} />
    );
  } else if (!atHome && !userPresent) {
    return (
      <Fragment>
        <Signup
          PUserPresent={HandleSetUserPresent}
          PHSignUpData={HandleSetSignUpData}
        />
      </Fragment>
    );
  } else if (!atHome && userPresent) {
    return (
      <Fragment>
        <Login PUserPresent={HandleSetUserPresent} />
      </Fragment>
    );
  }
}

export default Auth;
