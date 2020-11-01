import React, { Component } from "react";
import { Link } from "react-router-dom";

class Chips extends Component {
  render() {
    return (
      <div className="Chips">
        <h1>Yeaaahhh! Chiiips!!!</h1>
        <Link to="/">Go back</Link>
      </div>
    );
  }
}

export default Chips;
