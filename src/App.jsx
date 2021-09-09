import { getByPlaceholderText } from "@testing-library/react";
import React, { Component } from "react";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     planet: "pluto",
  //   };
  // }

  state = {
    planet: "saturnus",
  };

  render() {
    const { planet } = this.state;

    return (
      <div>
        <h1>Hello planet {planet} from a class component</h1>
      </div>
    );
  }
}

export default App;
