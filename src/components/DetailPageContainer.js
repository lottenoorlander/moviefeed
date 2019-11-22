import React, { Component } from "react";
import DetailPage from "./DetailPage";

class DetailPageContainer extends Component {
  state = {
    movie: null
  };

  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    fetch(
      `http://www.omdbapi.com/?apikey=1a5bf8e0&i=${encodeURIComponent(
        movieId
      )}&plot=full`
    )
      .then(res => res.json())
      .then(movie => this.updateMovie(movie))
      .catch(console.error);
  }

  updateMovie(movie) {
    this.setState({ movie: movie });
    console.log(this.state.movie);
  }

  render() {
    return (
      <div>
        {!this.state.movie && "Loading..."}
        {this.state.movie && (
          <DetailPage
            Title={this.state.movie.Title}
            Poster={this.state.movie.Poster}
            Genre={this.state.movie.Genre}
            Plot={this.state.movie.Plot}
            Rating={this.state.movie.imdbRating}
            Realesed={this.state.movie.Realeased}
            Actors={this.state.movie.Actors}
            Director={this.state.movie.Director}
            Country={this.state.movie.Country}
            Language={this.state.movie.Language}
          />
        )}
      </div>
    );
  }
}

export default DetailPageContainer;
