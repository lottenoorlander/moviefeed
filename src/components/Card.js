// src/components/ArticleCard.js
import React from "react";

export default class Card extends React.Component {
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
