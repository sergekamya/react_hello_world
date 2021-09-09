import React from "react";

const GreetingInput = (props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Write planet here"
        onChange={(event) => {
          props.renderGreeting(event);
        }}
      ></input>
    </div>
  );
};

export default GreetingInput;
