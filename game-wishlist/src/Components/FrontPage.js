import React, { Component } from "react";
import axios from "axios";
import Cards from "./Cards";
import WishList from "./WishList";
import "./FrontPage.css";
import "./WishList.css";
import Header from "./Header";
import Search from "./Search";

class FrontPage extends Component {
  constructor() {
    super();
    this.state = {
      games: [],
      wishlist: [],
      view: "Cards",
      searched: ""
    };
    this.handleView = this.handleView.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get("/api/games").then(res => {
      this.setState({ games: res.data });
    });
  }

  handleChange(e) {
    this.setState({
      searched: e.target.value
    });
  }

  addTo = newGame => {
    let doesExist = this.state.wishlist.findIndex(
      game => game.id === newGame.id
    );
    if (doesExist !== -1) {
      alert("This game is already in your wishlist!");
    } else {
      axios.post("/api/games", newGame).then(res => {
        this.setState({
          wishlist: res.data
        });
      });
    }
  };

  delete = game => {
    axios.delete(`/api/games/${game.id}`).then(res => {
      this.setState({
        wishlist: res.data
      });
    });
  };

  updateGames = games => {
    this.setState({
      games
    });
  };

  handleView(view) {
    this.setState({
      view: view
    });
  }

  render() {
    let filtered = [];
    if (this.state.searched !== "") {
      filtered = this.state.games.filter(game => {
        return game.title.startsWith(this.state.searched);
      });
    } else {
      filtered = this.state.games;
    }
    return (
      <div className="frontpage-container">
        <Header handleView={this.handleView} />
        {this.state.view === "Cards" ? (
          <div className="frontpage-cards-container">
            <h1 className="game-gallery">Game Gallery</h1>
            <Search
              handleChange={this.handleChange}
              value={this.state.searched}
            />
            <div className="games-container">
              {filtered.map(game => {
                return (
                  <Cards
                    key={game.id}
                    game={game}
                    addTo={this.addTo}
                    handleSubmit={this.handleSubmit}
                    handleChange2={this.handleChange2}
                    updateGames={this.updateGames}
                  />
                );
              })}
            </div>
          </div>
        ) : (
          <div className="wishlist-container">
            <h2 className="wishlist">Wish List</h2>
            <div className="cards-container">
              {this.state.wishlist.map(game => {
                return (
                  <WishList
                    key={`${game.id} ${game.name}`}
                    game={game}
                    delete={this.delete}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default FrontPage;
