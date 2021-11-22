import { useState } from "react";
import Display from "./Display";
import GroupingButtons from "./GroupingButtons";

function App() {

  return (
    <div className="wrapper">
      <h1>React Calculator</h1>
      <Display></Display>
      <GroupingButtons/>
    </div>
  );
  
}

export default App;
