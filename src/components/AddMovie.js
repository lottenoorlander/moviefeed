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
      [event.target.movie]: event.target.value
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
              name="name"
              onChange={this.handleChange}
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
