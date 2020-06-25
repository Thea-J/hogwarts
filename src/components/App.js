import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import AllHogs from "./AllHogs";

class App extends Component {
  //We can define code here
  render() {
    return (
      <div className="App">
        <Nav />
        <HelloWorld />
        <AllHogs />
      </div>
    );
  }
}

export default App;
