import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <img src={this.props.imageUrl} alt={this.props.alt} />
        <span>{this.props.releaseDate}</span>
      </div>
    );
  }
}

export default Card;
