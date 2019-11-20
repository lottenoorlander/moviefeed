import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Likes from "./components/Likes";
import AddMovie from "./components/AddMovie";

function App() {
  return (
    <div className="container">
      <Navbar href="wwww.imdb.com/" />
      <Likes />
      <AddMovie />
    </div>
  );
}

export default App;
