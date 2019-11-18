import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        <span>{this.props.releaseDate}</span>
        <img src={this.props.imageUrl} alt={this.props.imageAlt} />
      </header>
    );
  }
}
