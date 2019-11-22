import React, { Component } from "react";
import { Link } from "react-router-dom";
import Likes from "./Likes";
import "./Card.css";

function DetailPage(props) {
  return (
    <div className="wrapper">
      <div>
        <h1>{props.Title}</h1>
        <img src={props.Poster} />
        <p>The Story: {props.Plot}</p>
        <p>Genre: {props.Genre}</p>
        <p>Rating: {props.Rating}</p>
        <p>Realesed:{props.Release}</p>
        <p>Actors:{props.Actors}</p>
        <p>Director:{props.Director}</p>
        <p>Country:{props.Country}</p>
        <p>Language:{props.Language}</p>

        <Link to="/">Back to feed</Link>
        <div className="like and comments">
          <Likes />
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
