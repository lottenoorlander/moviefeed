import React, { Component } from "react";
import HeartFilled from "../images/heart-filled.svg";
import HeartOutline from "../images/heart-outline.svg";

export default class Likes extends Component {
  state = {
    numLikes: 0,
    liked: false
  };

  toggleHeart = () => {
    if (this.state.liked === false) {
      this.setState({
        numLikes: this.state.numLikes + 1,
        liked: true
      });
    } else if (this.state.liked === true) {
      this.setState({
        numLikes: this.state.numLikes - 1,
        liked: false
      });
    }
  };

  // increment = () => {
  //   this.setState({
  //     numLikes: this.state.numLikes + 1,
  //     liked: true
  //   });
  // };

  // decrement = () => {
  //   this.setState({
  //     numLikes: this.state.numLikes - 1,
  //     liked: false
  //   });
  // };

  render() {
    console.log(this.state);
    return (
      <div className="wrapper-for-icons">
        <img src={this.props.imageUrl} alt={this.props.imageAlt} />

        <img className="likeButton" onclick={this.toggleHeart} alt="heart" />

        {this.state.liked ? (
          <img
            className="likeButton"
            onClick={this.increment}
            src={HeartFilled}
            alt="unliked"
          />
        ) : (
          <img
            className="likeButton"
            onClick={this.decrement}
            src={HeartOutline}
            alt="liked"
          />
        )}
        <span>{this.state.numLikes}</span>
      </div>
    );
  }
}
