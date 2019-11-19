import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          {/* <li>
            <a href={this.props.href}></a>
          </li> */}
          <li>
            <a id="Register" href="wwww.imdb.com/">
              Register
            </a>
          </li>
          <li>
            <a id="SignUp" href="wwww.imdb.com/">
              Sign Up
            </a>
          </li>
          <li>
            <a id="Profile" href="wwww.imdb.com/">
              Profile
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
