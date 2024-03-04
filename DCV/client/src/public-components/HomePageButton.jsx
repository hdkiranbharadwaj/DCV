import React from "react";
function HomePageButton() {
  return (
    <button
      type="button"
      class="btn btn-outline-info "
      onClick={() => {
        window.open("http://localhost:3000", "_blank");
      }}
    >
      Explore DCV
    </button>
  );
}
export default HomePageButton;
