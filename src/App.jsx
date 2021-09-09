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
        <input
          type="text"
          placeholder="Type a name"
          onChange={(event) => {
            this.setState({ planet: event.target.value });
          }}
        />
      </div>
    );
  }
}

export default App;
