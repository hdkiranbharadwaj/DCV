import React, { useState } from "react";
function SearchBar() {
  const [userid, setuserid] = useState(null);
  return (
    <form
      class="d-flex"
      role="search"
      onSubmit={() => {
        window.open(`http://localhost:3000/${userid}`, "_blank");
      }}
    >
      <input
        class="form-control me-2"
        type="search"
        placeholder="User ID"
        aria-label="Search"
        value={userid}
        onChange={(e) => {
          setuserid(e.target.value);
          console.log(userid);
        }}
      />
      <button class="btn btn-outline-success" type="submit">
        Find
      </button>
    </form>
  );
}
export default SearchBar;
