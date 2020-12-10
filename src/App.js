import React from "react";
import Header from "./Header";
import MemeGenerator from "./MemeGenerator";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Header />
        <MemeGenerator />
      </div>
    );
  }
}

export default App;
