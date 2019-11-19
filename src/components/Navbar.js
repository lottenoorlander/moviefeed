import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href={this.props.href}> </a>
          </li>
        </ul>
      </nav>
    );
  }
}
