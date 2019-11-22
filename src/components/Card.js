import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="movieCard">
        <img
          className="moviePoster"
          src={this.props.imageUrl}
          alt={this.props.alt}
        />
        <div className="titleDate">
          <h2>
            <Link className="link" to={`detailpage/${this.props.movieId}`}>
              {this.props.title}
            </Link>
          </h2>

          <span>{this.props.releaseDate}</span>
        </div>
        <div className="like">
          <Likes />
        </div>
=======
      <div>
        <h2>{this.props.title}</h2>
        <img src={this.props.imageUrl} alt={this.props.alt} />
        <span>{this.props.releaseDate}</span>
>>>>>>> 3b8e1f565d1265584dfe661af9993e3e8e3e4c85
      </div>
    );
  }
}

export default Card;
