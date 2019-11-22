import React, { Component } from "react";
import PropTypes from "prop-types";
// import csss file

class AddMovie extends Component {
  state = { movie: "" };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addMovie(this.state.movie);
  };

  handleChange = event => {
    this.setState({
      movie: event.target.value
    });
  };

  render() {
    return (
      <div className="add-movie">
        <form onSubmit={this.handleSubmit}>
          <label>
            Movie
            <input
              type="text"
<<<<<<< HEAD
              name="movie"
              onChange={this.handleChange.bind(this)}
=======
              name="name"
              onChange={this.handleChange}
>>>>>>> 3b8e1f565d1265584dfe661af9993e3e8e3e4c85
              value={this.state.movie}
            />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  addMovie: PropTypes.func.isRequired
};

export default AddMovie;
