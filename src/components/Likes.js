import React, { Component } from "react";

export default class Likes extends Component {
  render() {
    return (
      <div className="wrapper-for-icons">
        <img src={this.props.imageUrl} alt={this.props.imageAlt} />
        <span>{this.props.counter}</span>
      </div>
    );
  }
}
