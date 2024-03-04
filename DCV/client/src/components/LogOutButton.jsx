import React from "react";
import { useCookies } from "react-cookie";
function LogOutButton() {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  return (
    <button
      type="button"
      class="btn btn-outline-danger "
      onClick={() => {
        removeCookie("Email");
        removeCookie("AuthToken");
        window.location.reload();
      }}
    >
      Logout
    </button>
  );
}
export default LogOutButton;
