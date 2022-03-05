import React from "react";
import "../components/css/nav.css";

function TopBar(props) {
  return (
    <>
      <div className="fc fc-center nav-pad top-bar">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/4/42/GLA_University_logo.png"
          width="80px"
        />
      </div>
      <div className="hr"></div>
    </>
  );
}

export default TopBar;
