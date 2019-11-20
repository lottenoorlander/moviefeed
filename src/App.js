import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MovieFeed from "./components/MovieFeed";
import Likes from "./components/Likes";
import AddMovie from "./components/AddMovie";

function App() {
  return (
    <div className="container">
      <Navbar href="wwww.imdb.com/" />
      <header className="App-header"></header>
      <MovieFeed />
      <Likes />
      <AddMovie />
    </div>
  );
}

export default App;
