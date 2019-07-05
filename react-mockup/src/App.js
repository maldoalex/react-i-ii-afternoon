import React, { Component } from "react";
import "./App.css";
import Cards from "./components/Cards";
import PrevButton from "./components/PrevButton";
import NextBtn from "./components/NextBtn";
import data from "./components/data";
import Delete from "./components/Delete";

class App extends Component {
  //holds and updates state
  constructor() {
    super();
    this.state = {
      cards: data,
      id: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.delete = this.delete.bind(this);
  }

  //methods
  increment() {
    console.log(this.state);
    if (this.state.id < this.state.cards.length - 1) {
      this.setState({ id: this.state.id + 1 });
    }
  }

  decrement() {
    if (this.state.id > 0) {
      this.setState({ id: this.state.id - 1 });
    }
  }

  delete() {
    if (this.state.cards < 1) {
    }
    let newCards = [...this.state.cards];
    let index = this.state.id;
    if (index !== -1) {
      newCards.splice(index, 1);
      this.setState({
        cards: newCards,
        id: this.state.id > 0 ? this.state.id - 1 : this.state.id
      });
    }
  }

  //communication with components using props
  render() {
    const { cards, id } = this.state;

    return (
      <div className="App">
        <div className="ButtonContainer">
          <nav className="NavBar">Home</nav>
          <div className="CardContainer">
            <Cards
              id={cards[id].id}
              firstName={cards[id].name.first}
              lastName={cards[id].name.last}
              city={cards[id].city}
              country={cards[id].country}
              jobTitle={cards[id].employer}
              employer={cards[id].title}
              movies={cards[id].favoriteMovies}
              cardsLength={cards.length}
            />
          </div>
          <div className="buttons">
            <PrevButton previous={this.decrement} />
            <Delete delete={this.delete} />
            <NextBtn next={this.increment} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
