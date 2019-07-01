import React, { Component } from "react";

class WishList extends Component {
  render() {
    const { title, logo, info, note } = this.props.game;
    return (
      <div className="cards">
        <h2>{title}</h2>
        <img className='img' src={logo} alt="logo" />
        <p>{info}</p>
        <p>Note:{note}</p>
        <button className='btn' onClick={() => this.props.delete(this.props.game)}>
          Remove from Wish List
        </button>
      </div>
    );
  }
}

export default WishList;
