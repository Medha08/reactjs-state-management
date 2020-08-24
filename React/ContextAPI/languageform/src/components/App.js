import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class App extends React.Component {
  state = { language: "english" };
  onLanguageChange = (language) => {
    this.setState({ language });
  };
  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          ></i>
          <i
            className="flag in"
            onClick={() => this.onLanguageChange("hindi")}
          ></i>
        </div>
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
        {/* sep pipe with data as hindi */}
        {/* <LanguageContext.Provider value="hindi"> */}
        {/* <UserCreate /> */}
        {/* </LanguageContext.Provider> */}
        {/* takes data from default context */}
        {/* <UserCreate /> */}
      </div>
    );
  }
}
export default App;
