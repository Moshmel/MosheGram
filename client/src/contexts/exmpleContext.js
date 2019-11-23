import React, { createContext, Component } from "react";

export const ExampleContext = createContext();

class ExampleContextProvider extends Component {
  state = {
    user: { name: "david", age: 18 },
    isLoggedOn: false
  };
  render() {
    return (
      <ExampleContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ExampleContext.Provider>
    );
  }
}
export default ExampleContextProvider;