import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MovieFeed from "./components/MovieFeed";

function App() {
  return (
    <div className="container">
      <Navbar href="wwww.imdb.com/" />
      <header className="App-header"></header>
      <MovieFeed />
    </div>
  );
}

export default App;
