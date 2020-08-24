import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  //   static contextType = LanguageContext;
  renderSubmit = (value) => {
    return value === "english" ? "Submit" : "प्रस्तुत";
  };
  render() {
    // const btnText = this.context === "english" ? "Submit" : "प्रस्तुत";

    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;
