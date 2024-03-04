import React from "react";
import LogOutButton from "./LogOutButton";
import SearchBar from "./SearchBar";
function Navbar() {
  return (
    <nav class="navbar bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" style={{ color: "White" }}>
          Dynamic CV
        </a>
        <div class="d-flex">
          <SearchBar />
          <div className="mx-2">
            <LogOutButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
