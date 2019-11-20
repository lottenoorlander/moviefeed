import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import FeaturedMovie from "./components/FeaturedMovie";
import MovieFeed from "./components/MovieFeed";
import Likes from "./components/Likes";
import AddMovie from "./components/AddMovie";

function App() {
  return (
    <div className="container">
      <Navbar />
      <header className="App-header">
        <FeaturedMovie />
      </header>
      <Navbar href="wwww.imdb.com/" />
      <header className="App-header"></header>
      <MovieFeed />
      <Likes />
      <AddMovie />
    </div>
  );
}

export default App;
