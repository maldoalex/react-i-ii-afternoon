import React, { Component } from "react";

class Cards extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <h2 class="number">
          {this.props.id}/{this.props.cardsLength}
        </h2>
        <h2 class="name">{this.props.firstName + " " + this.props.lastName}</h2>
        <h4 class="home">
          From: {this.props.city + ", " + this.props.country}
        </h4>
        <h4 class="job">Job Title: {this.props.title} </h4>
        <h4 class="employer">Employer: {this.props.employer}</h4>
        <h4 class="movies">Favorite Movies:</h4>
        <ol class="list">
          <li class="listNum">{this.props.movies[0]}</li>
          <li class="listNum">{this.props.movies[1]}</li>
          <li class="listNum">{this.props.movies[2]}</li>
        </ol>
      </div>
    );
  }
}

export default Cards;

//function
