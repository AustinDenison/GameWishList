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
    axios.put(`/api/games/${game.note}`, input).then(res => {
      this.setState({
        note: res.data
      });
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
        <p>Note:{this.note}</p>
        <button onClick={() => this.props.addTo(this.props.game)}>
          Add to Wish List
        </button>
        <form onSubmit={() => this.handleSubmit(this.input, this.props.game)}>
          <input
            onChange={e => this.handleChange2(e.target.value)}
            placeholder="Add a note..."
          />
        </form>
      </div>
    );
  }
}

export default Cards;
