import React from "react";
import Circle from "./Circle";

function CircleApp() {
  return (
    <div>
      <Circle borderColor="black" bgColor="teal"/>
      <Circle testText="i'm not default" bgColor="tomato"/>
    </div>
  );
}

export default CircleApp;
