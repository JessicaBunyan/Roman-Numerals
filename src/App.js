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

    /*this.handleSubmitToRoman = this.handleSubmitToRoman.bind(this);
      this.handleSubmitToArabic = this.handleSubmitToArabic.bind(this);
      */
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
  /*
    handleSubmitToRoman(event) {
      alert('The roman numeral is: ' + this.convertToRoman(this.state.numberText));
      event.preventDefault();
    }

    handleSubmitToArabic(event) {
        alert('The Arabic number is: ' + this.convertToArabicNum(this.state.romanText));
        event.preventDefault();
      }
  */

  render() {
    return (
      <div>
        <form>
          <label>
            Roman Numeral:
            <input
              type="text"
              value={this.state.romanText}
              onChange={this.handleRomanChange}
            />
          </label>
        </form>

        <form>
          <label>
            Number:
            <input
              type="text"
              value={this.state.numberText}
              onChange={this.handleNumberChange}
            />
          </label>
        </form>
        <h1>The Arabic number is: {this.state.romanTextConverted}</h1>
        <h2>The roman numeral is: {this.state.numberTextConverted}</h2>
      </div>
    );
  }
}

export default App;
