import React from "react";

const GreetingOutput = (props) => {
  return (
    <div>
      <h1 id="greeting">Hello {props.planet.name} from a functional component</h1>
    </div>
  );
};

export default GreetingOutput;
