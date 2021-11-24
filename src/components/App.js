import { useState } from "react";
import Display from "./Display";
import GroupingButtons from "./GroupingButtons";
import { calculatorButtons } from "../globals/calculator-button-data";

function App() {

  const [numbersPressed, setNumbersPressed] = useState();
  //const [arrayOfNumbers, setArrayOfNumbers] = useState([]);
  var arrayOfNums = []


  function capturingButtonValue(indexInArrOfButtns) {
      //var keyValuePressed = value
      console.log(indexInArrOfButtns)
      setNumbersPressed(indexInArrOfButtns)
      //console.log(value)
      basicLogic(indexInArrOfButtns)
  }

  function basicLogic(indexPressed) {
    if (calculatorButtons[indexPressed].type === 'number'){
      console.log(calculatorButtons[indexPressed].value + "value of number pressed")
      //setArrayOfNumbers(...arrayOfNumbers, calculatorButtons[indexPressed].value)
      arrayOfNums.push(calculatorButtons[indexPressed].value)
      console.log("pushed into array of nums")
      
    }
  }


  return (
    <div className="wrapper">
      <h1>React Calculator</h1>
      <Display valuesEntered={numbersPressed}/>
      <GroupingButtons capturingButtonValue={capturingButtonValue}/>
    </div>
  );
  
}

export default App;
