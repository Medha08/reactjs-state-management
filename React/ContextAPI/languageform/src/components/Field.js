import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  static contextType = LanguageContext;
  render() {
    //this.context used when we just need single context object
    const nameText = this.context === "english" ? "Name" : "नाम";
    return (
      <div className="ui field">
        <label>{nameText}</label>
        <input></input>
      </div>
    );
  }
}

export default Field;
