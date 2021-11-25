import { useState } from "react";
import Display from "./Display";
import GroupingButtons from "./GroupingButtons";
import { calculatorButtons } from "../globals/calculator-button-data";

function App() {

  const [currentIndexOfCalcKey, setcurrentIndexOfCalcKey] = useState();
  //const [arrayOfNumbers, setArrayOfNumbers] = useState([]);
  const [currentNumber, setCurrentNumber] = useState("");

  var arrayOfNums = []
  var arrayOfOperators = []
  //var currentNumber = ""
  var currentOperator = ""
//value will be passed into the Display component, all math operation in a line
  var displayString = ""


  //capturing the index in the array of Calculator Key-Objects:
  function capturingButtonValue(indexInArrOfButtns) {
      console.log(indexInArrOfButtns)
      // console.log(currentNumber + "current number now")

      setcurrentIndexOfCalcKey(indexInArrOfButtns)
      basicLogic(indexInArrOfButtns)
  }

  //categorizing types of buttons pressed
  function basicLogic(indexPressed) {
    if (calculatorButtons[indexPressed].type === 'number' || calculatorButtons[indexPressed].type === 'decimal')
    {
      console.log(calculatorButtons[indexPressed].value + "value of number pressed")
      //setArrayOfNumbers(...arrayOfNumbers, calculatorButtons[indexPressed].value)
      //currentNumber = currentNumber + calculatorButtons[indexPressed].value
      setCurrentNumber(currentNumber + calculatorButtons[indexPressed].value)
      console.log(currentNumber)
    } 
    else if (calculatorButtons[indexPressed].type === 'operator')
    {
      currentOperator = currentOperator + calculatorButtons[indexPressed].value
    }
    //after categorizing and sorting into strings-categories, pushing the values into separate arrays
    arrayOfNums.push(currentNumber)
    arrayOfOperators.push(currentOperator)
  }



  // function performingOperationForNum(){
  //   if (calculatorButtons[indexPressed].type === 'operator'){
  // }


  return (
    <div className="wrapper">
      <h1>React Calculator</h1>
      {/* <Display valuesEntered={calculatorButtons[currentIndexOfCalcKey].value}/> */}
      <GroupingButtons capturingButtonValue={capturingButtonValue}/>
    </div>
  );
  

}

export default App;

// arrayOfNums.push(calculatorButtons[indexPressed].value)

// const [currentNumber, setCurrentNumber] = useState("");
// const [currentOperator, setCurrentOperator] = useState("");