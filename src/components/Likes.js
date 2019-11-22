import React, { Component } from "react";
import HeartFilled from "../images/heart-filled.svg";
import HeartOutline from "../images/heart-outline.svg";
import Comment from "./Comment";
import "../Comment.css";

export default class Likes extends Component {
  state = {
    numLikes: 0,
    liked: false,
    comments: []
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

  addComment = comment => {
    console.log("Hi from scoreboard again, player:", comment);
    const newComment = comment;
    this.setState({ comments: this.state.comments.concat(newComment) });
  };

  render() {
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
        <div className="wrapper-for-comments">
          <ul>
            {" "}
            <li>{this.state.comments}</li>{" "}
          </ul>

          <Comment addComment={this.addComment} />
        </div>
      </div>
    );
  }
}
