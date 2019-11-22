import React, { Component } from "react";
import PropTypes from "prop-types";

class Comment extends Component {
  state = {
    comment: []
  };

  handleChange = event => {
    console.log(event.target.value);

    this.setState({
      comment: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log("submitting", this.state.comment);
    this.props.addComment(this.state.comment);
    this.setState({ comment: [] });
  };

  render() {
    return (
      <div className="comment">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Comment: </label>
          <input
            type="text"
            onChange={this.handleChange.bind(this)}
            value={this.state.comment}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

Comment.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default Comment;
