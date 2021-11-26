import { useState } from "react";
import Display from "./Display";
import GroupingButtons from "./GroupingButtons";
import { calculatorButtons } from "../globals/calculator-button-data";

function App() {

  // const [currentIndexOfCalcKey, setcurrentIndexOfCalcKey] = useState(-1);
  // const [currentNumber, setCurrentNumber] = useState("");
  // const [currentOperator, setCurrentOperator] = useState("");
  //const [currentNumber, setCurrentNumber] = useState("");

  var indexPassed = -1
  var currentNumber = ""
  var currentOperator = ""
  var arrayOfNums = []
  var arrayOfOperators = []
  var displayString = ""
  var operatorPressed = false
  var enterPressed = false
  //capturing the index in the array of Calculator Key-Objects:
  function capturingButtonValue(indexInArrOfButtns) {
    console.log(indexInArrOfButtns + " it does print")

    indexPassed = indexInArrOfButtns

    basicLogic(indexInArrOfButtns)
  }
  function UpdateValues() {
    var dummycvar = 10

  }

  function basicLogic(indexPressed) {
    if (calculatorButtons[indexPressed].type === 'number' || calculatorButtons[indexPressed].type === 'decimal') {
      currentNumber = currentNumber + String(calculatorButtons[indexPressed].value)
    }
    else if (calculatorButtons[indexPressed].type === 'operator') {
      console.log(calculatorButtons[indexPressed].text)
      currentOperator = calculatorButtons[indexPressed].text
      operatorPressed = true
    }
    else if (calculatorButtons[indexPressed].type === 'enter') {
      var enterPressed = true
    }
    else if (calculatorButtons[indexPressed].type === 'sign') {

    }
    else if (calculatorButtons[indexPressed].type === 'clear') {

    }
    else if (calculatorButtons[indexPressed].type === 'memory') {

    }
    //after categorizing and sorting into strings-categories, pushing the values into separate arrays before operator is pressed
    if (operatorPressed) {
      currentOperator = String(currentOperator)
      arrayOfNums.push(currentNumber)
      arrayOfOperators.push(currentOperator)

      currentNumber = ""
      currentOperator = ""
      operatorPressed = false
    }
    if (enterPressed) {
      arrayOfNums.push(currentNumber)
      arrayOfOperators.push(currentOperator)
      currentNumber = ""
      currentOperator = ""
      enterPressed = false

      for (let i = 0; i < arrayOfOperators.length; i++) {
        displayString = displayString + String(arrayOfNums[i]) + String(arrayOfOperators[i])
      }
      console.log(displayString + "final output string")
      console.log(eval(displayString) + "final output val")
    }
    console.log("============================")
  }

  return (
    <div className="wrapper">
      <h1>React Calculator</h1>
      <Display valuesEntered={displayString}/>
      <GroupingButtons capturingButtonValue={capturingButtonValue} UpdateValues={UpdateValues} />
    </div>
  );


}

export default App;

// arrayOfNums.push(calculatorButtons[indexPressed].value)

// const [currentNumber, setCurrentNumber] = useState("");
// const [currentOperator, setCurrentOperator] = useState("");

      //setArrayOfNumbers(...arrayOfNumbers, calculatorButtons[indexPressed].value)
      //currentNumber = currentNumber + calculatorButtons[indexPressed].value

      // eval()