import React, { Component } from "react";
import "./App.css";

class App extends Component {
  componentWillMount() {
    this.setTime();
  }

  componentDidMount() {
    setInterval(() => {
      this.setTime();
    }, 1000);
  }

  setTime() {
    const hours = this.setTwoDigits(new Date().getHours());
    const minutes = this.setTwoDigits(new Date().getMinutes());
    const seconds = this.setTwoDigits(new Date().getSeconds());

    this.setState({
      hours,
      minutes,
      seconds
    });
  }

  setTwoDigits(number) {
    return ("0" + number).slice(-2);
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
