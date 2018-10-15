import React, { Component } from "react";
import "./App.css";

class App extends Component {
  componentWillMount() {
    this.setTime();
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setTime();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  setTime() {
    const hours   = this.setTwoDigits(new Date().getHours());
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
      <div className="st__container">
        <h1 className="st__time">
          {this.state.hours}:{this.state.minutes}:{this.state.seconds}
        </h1>
      </div>
    );
  }
}

export default App;
