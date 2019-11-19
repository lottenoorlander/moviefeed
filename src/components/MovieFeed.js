import React, { Component } from "react";
import Spinner from "";
import Crying from "";
import Card from "./Card";

class MovieFeed extends Component {
  state = {
    loading: true,
    error: null
  };

  componentDidMount() {
    fetch(
      "http://www.omdbapi.com/?apikey=1a5bf8e0&s=christmas&y=2019&type=movie&page=1"
    )
      .then(response => response.json())
      .then(json => this.setState({ loading: false, movies: json }))
      .catch(this.setState({ loading: false, error: true }));
  }

  render() {
    if (this.state.loading) {
      return <div>{<img src={Spinner} alt="spinner" />}</div>;
    } else if (this.state.error) {
      return <div>{<img src={Crying} alt="error message" />}</div>;
    } else {
      return (
        <div>
          {this.state.movies.map(movie => (
            <Card />
          ))}
        </div>
      );
    }
  }
}

export default MovieFeed;
