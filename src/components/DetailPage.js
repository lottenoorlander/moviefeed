import React, { Component } from "react";
import { Link } from "react-router-dom";

function DetailPage(props) {
  return (
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
    </div>
  );
}

export default DetailPage;
