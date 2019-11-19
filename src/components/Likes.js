import React, { Component } from "react";
import HeartFilled from "../images/heart-filled.svg";
import HeartOutline from "../images/heart-outline.svg";

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

  render() {
    return (
      <div className="wrapper-for-icons">
        <img src={this.props.imageUrl} alt={this.props.imageAlt} />
        <span>{this.props.counter}</span>
        <button onClick={this.increment}>Like</button>
        {this.state.liked ? (
          <img src={HeartFilled} alt="unliked" />
        ) : (
          <img src={HeartOutline} alt="liked" />
        )}
        <strong>{this.state.numLikes}</strong>
      </div>
    );
  }
}
