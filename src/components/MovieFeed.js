import React, { Component } from "react";
import Spinner from "../spinner.gif";
import Crying from "../Crying.gif";
import Card from "./Card";
import "./MovieFeed.css";
import FeaturedMovie from "./FeaturedMovie";
import AddMovie from "./AddMovie";

class MovieFeed extends Component {
  state = {
    loading: true,
    error: null,
    movies: null,
    search: null
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

  addMovie = movie => {
    this.setState({ ...this.state, search: movie });
    if (this.state.search) {
      fetch(
        `http://www.omdbapi.com/?apikey=1a5bf8e0&s=${encodeURIComponent(
          this.state.search
        )}&type=movie&page=1`
      )
        .then(res => res.json())
        .then(json => {
          this.setState({
            movies: this.state.movies.concat(json.Search)
          });
        })
        .catch(console.error);
    }
    // this.setState({ ...this.state, search: null });
  };

  render() {
    if (this.state.loading) {
      return <div>{<img src={Spinner} alt="spinner" />}</div>;
    } else if (this.state.error) {
      return <div>{<img src={Crying} alt="error message" />}</div>;
    } else {
      return (
        <div>
          <FeaturedMovie />
          <div className="moviefeed">
            {this.state.movies.map(movie => (
              <Card
                key={movie.imdbID}
                title={movie.Title}
                imageUrl={movie.Poster}
                alt={movie.Title}
                releaseDate={movie.Year}
                movieId={movie.imdbID}
              />
            ))}
            <AddMovie addMovie={this.addMovie} />
          </div>
        </div>
      );
    }
  }
}

export default MovieFeed;
