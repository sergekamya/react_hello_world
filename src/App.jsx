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