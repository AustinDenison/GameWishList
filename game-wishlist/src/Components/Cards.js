import React, { Component } from "react";
import "./Cards.css";
import axios from "axios";

class Cards extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      note: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }

  handleSubmit(input, game) {
    axios.put(`/api/games/${game.id}`, { input }).then(res => {
      this.props.updateGames(res.data);
    });
  }

  handleChange2(e) {
    this.setState({
      input: e
    });
  }

  render() {
    return (
      <div className="cards">
        <h2>{this.props.game.title}</h2>
        <img className="img" src={this.props.game.logo} alt="logo" />
        <p>{this.props.game.info}</p>
        <p>Note: {this.props.game.note}</p>
        <button
          className="btn"
          onClick={() => this.props.addTo(this.props.game)}
        >
          Add to Wish List
        </button>
        <input
          className="input"
          onChange={e => this.handleChange2(e.target.value)}
          placeholder="Write a note..."
        />
        <button
          className="btn"
          onClick={e => {
            this.handleSubmit(this.state.input, this.props.game);
          }}
        >
          Add note
        </button>
      </div>
    );
  }
}

export default Cards;
