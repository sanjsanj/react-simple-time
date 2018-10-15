import React, { Component } from "react";
import "./App.css";

class App extends Component {
  componentWillMount() {
    this.timer();
  }

  timer() {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();

    this.setState({
      hours,
      minutes,
      seconds
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.hours}:{this.state.minutes}:{this.state.seconds}
      </div>
    );
  }
}

export default App;
