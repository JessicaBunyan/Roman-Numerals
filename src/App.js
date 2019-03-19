import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { convertToArabicNum, convertToRoman } from "./Utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      romanText: "",
      numberText: "",
      romanTextConverted: "",
      numberTextConverted: ""
    };

    this.handleRomanChange = this.handleRomanChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
  }

  handleRomanChange(event) {
    this.setState({
      romanText: event.target.value,
      numberTextConverted: convertToArabicNum(event.target.value)
    });
  }
  handleNumberChange(event) {
    this.setState({
      numberText: event.target.value,
      romanTextConverted: convertToRoman(event.target.value)
    });
  }

  render() {
    return (
      <div className="app">
        <div className="box">
          <form>
            <label>
              <h2>Roman Numeral:</h2>
              <input
                type="text"
                value={this.state.romanText}
                onChange={this.handleRomanChange}
              />
            </label>
          </form>
          <h2>The roman numeral is: {this.state.numberTextConverted}</h2>
        </div>
        <div className="box">
          <form>
            <label>
              <h2>Number:</h2>
              <input
                type="text"
                value={this.state.numberText}
                onChange={this.handleNumberChange}
              />
            </label>
          </form>
          <h2>The Arabic number is: {this.state.romanTextConverted}</h2>
        </div>
      </div>
    );
  }
}

export default App;
