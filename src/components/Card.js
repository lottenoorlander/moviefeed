import React, { Component } from "react";
import Likes from "./Likes";
import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div className="movieCard">
        <img
          className="moviePoster"
          src={this.props.imageUrl}
          alt={this.props.alt}
        />
        <div className="titleDate">
          <h2>{this.props.title}</h2>
          <span>{this.props.releaseDate}</span>
        </div>
        <div className="like">
          <Likes />
        </div>
      </div>
    );
  }
}

export default Card;
