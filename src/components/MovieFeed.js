import React, { Component } from "react";

export default class MovieFeed extends Component {
  state = {
    posts: null
  };

  componentDidMount() {
    // (1) fetch some data (hopefully, something resembling a list of articles)
    fetch("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10")
      .then(res => res.json())
      .then(data => {
        // (2) put it in component local state (as per the shape discussed above)
        this.setState({ articles: data, loading: false });
      })
      .catch(error => this.setState({ error: true, loading: false }));

    // (3) ...and if the loading fails, set an error state like discussed above
  }

  render() {
    return <div>{/* card component */}</div>;
  }
}
