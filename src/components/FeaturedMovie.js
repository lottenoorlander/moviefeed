import React, { Component } from "react";
import Header from "./Header";

class FeaturedMovie extends Component {
  state = {
    movie: null
  };

  componentDidMount() {
    fetch(
      "http://www.omdbapi.com/?apikey=1a5bf8e0&s=christmas&y=2019&type=movie&page=1"
    )
      .then(response => response.json())
      .then(json => {
        // console.log(json);
        this.setState({ movie: json });
      });
  }

  render() {
    if (this.state.movie === null) {
      return (
        <img
          src="https://media.giphy.com/media/VxbP9tLeKzazm/giphy.gif"
          alt={"movie gif"}
        />
      );
    }

    // console.log(this.state.movie.Search[0].Poster);
    return (
      <Header
        imageUrl={this.state.movie.Search[0].Poster}
        title="This Christmas..."
      />
    );
  }
}

export default FeaturedMovie;
