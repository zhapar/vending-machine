import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sardines extends Component {
  render() {
    return (
      <div className="Sardines">
        <h1>This is Sardines</h1>
        <Link to="/">Go back</Link>
      </div>
    );
  }
}

export default Sardines;
