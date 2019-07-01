import React from "react";
import "./Header.css";
import Logo from "./GWL.png";

function Header(props) {
  return (
    <div className="header">
      <img alt="gwl-logo" src={Logo} className="logo" />
      <div className="btn-container">
        <button className="home-btn" onClick={() => props.handleView("Cards")}>
          Home
        </button>
        <button className="wishlist-btn" onClick={() => props.handleView("")}>
          Wish List
        </button>
      </div>
    </div>
  );
}

export default Header;
