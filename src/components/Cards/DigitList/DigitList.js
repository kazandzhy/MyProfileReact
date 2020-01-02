import React, { Component } from "react";
import "./DigitList.css";

import VerseContent from "../VerseContent/VerseContent";

export default class DigitList extends Component {
  state = {
    move: ""
  };

  runText = () => {
    this.setState({
      move: "Move"
    });

    setTimeout(() => {
      this.setState({
        move: ""
      });
    }, 50000);
  };

  stopText = () => {
    this.setState({
      move: ""
    });
  };

  render() {
    return (
      <div className="DigitList">
        <h3 className="Verse">
          <VerseContent
            spanClass={this.state.move}
            click={this.runText}
            doubleClick={this.stopText}
          ></VerseContent>
        </h3>
        <p>Helaman 5:12 (click the banner to read)</p>
      </div>
    );
  }
}
