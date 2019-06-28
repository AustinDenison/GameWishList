import React, { Component } from "react";

class WishList extends Component {
  render() {
    const { title, logo, info, note } = this.props.game;
    return (
      <div className="cards">
        {title}
        <img src={logo} alt="logo" />
        {info}
        {note}
        <button onClick={() => this.props.delete(this.props.game)}>
          Remove from Wish List
        </button>
      </div>
    );
  }
}

export default WishList;
