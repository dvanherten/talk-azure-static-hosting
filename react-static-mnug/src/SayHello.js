import React, { Component } from "react";

class SayHello extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", result: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    fetch("/api/SayHello?name=" + this.state.value)
      .then(res => res.text())
      .then(body => this.setState({ result: body }));
    event.preventDefault();
  }

  render() {
    if (this.state.result) return <h3>{this.state.result}</h3>;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SayHello;
