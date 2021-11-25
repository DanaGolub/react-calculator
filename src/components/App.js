import { useState } from "react";
import Display from "./Display";
import GroupingButtons from "./GroupingButtons";
import { calculatorButtons } from "../globals/calculator-button-data";

function App() {

  const [currentIndexOfCalcKey, setcurrentIndexOfCalcKey] = useState(-1);
  const [currentNumber, setCurrentNumber] = useState("");
  const [currentOperator, setCurrentOperator] = useState("");
  //const [currentNumber, setCurrentNumber] = useState("");
  var arrayOfNums = []
  var arrayOfOperators = []
  //var currentOperator = ""

//value will be passed into the Display component, all math operation in a line
  var displayString = ""

  //capturing the index in the array of Calculator Key-Objects:
  function capturingButtonValue(indexInArrOfButtns) {
      console.log(indexInArrOfButtns)
      console.log("1")
      console.log(currentIndexOfCalcKey + " current index is this: ")

      setcurrentIndexOfCalcKey(indexInArrOfButtns)
      console.log("2")
      console.log(currentIndexOfCalcKey + " current index is this: ")
      basicLogic(indexInArrOfButtns)
  }

  //categorizing types of buttons pressed
  function basicLogic(indexPressed) {
    if (calculatorButtons[indexPressed].type === 'number' || calculatorButtons[indexPressed].type === 'decimal')
    {
      setCurrentNumber(currentNumber + calculatorButtons[indexPressed].value)
      console.log(calculatorButtons[indexPressed].value + "value of number pressed")
      console.log(currentNumber + "current number from if statement")
    } 
    else if (calculatorButtons[indexPressed].type === 'operator')
    {
      console.log(calculatorButtons[indexPressed].text)
      console.log(currentOperator + " is the current operator from else if st")
      setCurrentOperator(currentOperator + calculatorButtons[indexPressed].text)
      console.log(currentOperator + " current operator from if 2")
    }
    else if (calculatorButtons[indexPressed].type === 'enter')
    {
      
    }
    else if (calculatorButtons[indexPressed].type === 'sign')
    {

    }
    else if (calculatorButtons[indexPressed].type === 'clear')
    {

    }
    else if (calculatorButtons[indexPressed].type === 'memory')
    {

    }
    //after categorizing and sorting into strings-categories, pushing the values into separate arrays
    arrayOfNums.push(currentNumber)
    arrayOfOperators.push(currentOperator)
    console.log(currentNumber)
    console.log(currentOperator)
    console.log("============================")
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

      //setArrayOfNumbers(...arrayOfNumbers, calculatorButtons[indexPressed].value)
      //currentNumber = currentNumber + calculatorButtons[indexPressed].value

      // eval()