import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  static contextType = LanguageContext;
  render() {
    const btnText = this.context === "english" ? "Submit" : "प्रस्तुत";
    return <button className="ui button primary">{btnText}</button>;
  }
}

export default Button;
