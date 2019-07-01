import React from "react";
import './Search.css'

function Search(props){
    return (
      <div>
        <input
          onChange={e => props.handleChange(e)}
          className="search-input"
          placeholder="Search..."
          value={props.value}
        />
      </div>
    );
}

export default Search;
