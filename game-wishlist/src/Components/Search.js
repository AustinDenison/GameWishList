import React, { Component } from "react";

function Search(props){
    return (
      <div>
        <input
          onChange={e => props.handleChange(e)}
          className="search-input"
          placeholder="Search..."
        />
      </div>
    );
}

export default Search;
