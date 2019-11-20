import React, { Component } from "react";
import Spinner from "../spinner.gif";
import Crying from "../Crying.gif";
import Card from "./Card";
import "./MovieFeed.css";

class MovieFeed extends Component {
  state = {
    loading: true,
    error: null,
    movies: null
  };

  componentDidMount() {
    fetch(
      "http://www.omdbapi.com/?apikey=1a5bf8e0&s=christmas&y=2018&type=movie&page=1"
    )
      .then(response => {
        return response.json();
      })
      .then(json => {
        return this.setState({ loading: false, movies: json.Search });
      })
      .catch(error => {
        return this.setState({ loading: false, error: true });
      });
  }

  render() {
    if (this.state.loading) {
      return <div>{<img src={Spinner} alt="spinner" />}</div>;
    } else if (this.state.error) {
      return <div>{<img src={Crying} alt="error message" />}</div>;
    } else {
      return (
        <div className="moviefeed">
          {this.state.movies.map(movie => (
            <Card
              key={movie.Title}
              title={movie.Title}
              imageUrl={movie.Poster}
              alt={movie.Title}
              releaseDate={movie.Year}
            />
          ))}
        </div>
      );
    }
  }
}

export default MovieFeed;
