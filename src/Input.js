import React, { Component } from "react";
import "./App.css";

class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <label>
          <h2>{this.props.title}</h2>
          <input
            type="text"
            value={this.props.value}
            onChange={e => this.props.onChange(e)}
          />
        </label>
      </form>
    );
  }
}

export default Input;
