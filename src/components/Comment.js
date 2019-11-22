import React, { Component } from "react";
import PropTypes from "prop-types";

class Comment extends Component {
  state = {
    comment: ""
  };

  handleSubmit(event) {
    event.preventDefault();
    this.props.addComment(this.state.comment);
    // console.log(`Submitting form... ${this.state.comment}`);
  }

  handleChange = event => {
    // console.log(`handleChange ${this.state.comment}`);

    this.setState({
      [event.target.comment]: event.target.value
    });
  };

  render() {
    return (
      <div className="comment">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Comment:
            <input
              type="text"
              comment="comment"
              onChange={this.handleChange.bind(this)}
              value={this.state.comment}
            />
          </label>
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
