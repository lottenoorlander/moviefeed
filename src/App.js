import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Likes from "./components/Likes";

function App() {
  return (
    <div className="container">
      <Navbar href="wwww.imdb.com/" />
      <header className="App-header">
        <Likes />
      </header>
    </div>
  );
}

export default App;
