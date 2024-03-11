import React, { Component } from 'react';
import Untitled from "./SCSS/Untitled.jpg";
import Untitled1 from "./SCSS/Untitled1.jpg";
import Untitled2 from "./SCSS/Untitled2.jpg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={Untitled} alt="Untitled"></img>
        <img src={Untitled1} alt="Untitled1"></img>
        <img src={Untitled2} alt="Untitled2"></img>
      </div>
    );
  }
}

export default App;
