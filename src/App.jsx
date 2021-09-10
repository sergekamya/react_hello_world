import React, { useState } from "react";
import GreetingInput from "./GreetingInput";
import GreetingOutput from "./GreetingOutput";

const App = () => {
  const [planet, setPlanet] = useState("venus");

  return (
    <div>
      <GreetingOutput planet={planet} />
      <GreetingInput textInput={setPlanet} />
    </div>
  );
};

export default App;

// import React, { Component } from "react";
// import GreetingInput from './GreetingInput'
// import GreetingOutput from './GreetingOutput'

// export class App extends Component {
//   state = {
//     planet: "",
//   };

//   textInput(event) {
//     this.setState({ planet: event.target.value });
//   }

//   render() {
//     //const { planet } = this.state;

//     return (
//       <>
//         <GreetingOutput planet= {this.state.planet}/>
//         <GreetingInput textInput={this.textInput.bind(this)} />

//       </>
//     );
//   }
// }

// export default App;
