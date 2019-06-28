import React, { Component } from "react";
import "./Header.css";

function Header(props){
    return (
      <div className="header">
        <h1>Logo</h1>
        <div className="btn-container">
          <button
            className="home-btn"
            onClick={() => props.handleView("Cards")}
          >
            Home
          </button>
          <button
            className="wishlist-btn"
            onClick={() => props.handleView("")}
          >
            Wish List
          </button>
        </div>
      </div>
    ); 
}

export default Header;
