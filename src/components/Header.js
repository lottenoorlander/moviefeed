import React, { Component } from "react";
import Likes from "./Likes";

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        <span>{this.props.releaseDate}</span>
        <img src={this.props.imageUrl} alt={this.props.imageAlt} />
        <Likes imageUrl="placeholdergit" />
      </header>
    );
  }
}
