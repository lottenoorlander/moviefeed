import React, { Component } from "react";
import Likes from "./Likes";
import "./Card.css";
import { Link } from "react-router-dom";

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
          <h2>
            <Link to={`detailpage/${this.props.movieId}`}>
              {this.props.title}
            </Link>
          </h2>

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
