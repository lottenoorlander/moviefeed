import React, { Component } from "react";
import HeartFilled from "../images/heart-filled.svg";
import HeartOutline from "../images/heart-outline.svg";
import Comment from "./Comment";

export default class Likes extends Component {
  state = {
    numLikes: 0,
    liked: false
  };

  increment = () => {
    this.setState({
      numLikes: this.state.numLikes + 1,
      liked: true
    });
  };

  decrement = () => {
    this.setState({
      numLikes: this.state.numLikes - 1,
      liked: false
    });
  };

  render() {
    // console.log(this.state);
    return (
      <div className="wrapper-for-icons">
        {this.state.liked ? (
          <img
            className="likeButton"
            onClick={this.decrement}
            src={HeartFilled}
            alt="liked"
          />
        ) : (
          <img
            className="likeButton"
            onClick={this.increment}
            src={HeartOutline}
            alt="unliked"
          />
        )}
        <span>{this.state.numLikes}</span>
        <Comment addComment={this.addComment} />
      </div>
    );
  }
}
