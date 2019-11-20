import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
<<<<<<< HEAD
import MovieFeed from "./components/MovieFeed";
=======
import Likes from "./components/Likes";
import AddMovie from "./components/AddMovie";
>>>>>>> develop

function App() {
  return (
    <div className="container">
      <Navbar href="wwww.imdb.com/" />
<<<<<<< HEAD
      <header className="App-header"></header>
      <MovieFeed />
=======
      <Likes />
      <AddMovie />
>>>>>>> develop
    </div>
  );
}

export default App;
