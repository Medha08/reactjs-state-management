import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  //   static contextType = LanguageContext;
  renderSubmit = (value) => {
    return value === "english" ? "Submit" : "प्रस्तुत";
  };
  renderButton = (color) => {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  };
  render() {
    // const btnText = this.context === "english" ? "Submit" : "प्रस्तुत";
    // Concumer Component used where there are multiple context objects or multiple pipes
    //function is the only child passed to Consumer component
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
