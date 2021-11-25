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

    //console.log("1")

    //setcurrentIndexOfCalcKey(indexInArrOfButtns)
    indexPassed = indexInArrOfButtns
    //console.log("but this doesn't .. " + currentIndexOfCalcKey)
    //console.log("2 " + indexPassed)
    //console.log(currentIndexOfCalcKey + " current index is this: ")
    basicLogic(indexInArrOfButtns)
  }
  function UpdateValues() {
    var dummycvar = 10
    //setcurrentIndexOfCalcKey(4)
    //console.log("update called!!!!!!!!!!" + currentIndexOfCalcKey)
  }

  //categorizing types of buttons pressed
  function basicLogic(indexPressed) {
    if (calculatorButtons[indexPressed].type === 'number' || calculatorButtons[indexPressed].type === 'decimal') {
      //setCurrentNumber(currentNumber + calculatorButtons[indexPressed].value)
      currentNumber = currentNumber + String(calculatorButtons[indexPressed].value)

      //console.log(currentNumber + "value of number pressed")
      // console.log(currentNumber + "current number from if statement")
    }
    else if (calculatorButtons[indexPressed].type === 'operator') {
      console.log(calculatorButtons[indexPressed].text)
      //console.log(currentOperator + " is the current operator from else if st")
      //setCurrentOperator(currentOperator + calculatorButtons[indexPressed].text)
      //console.log(currentOperator + " current operator from if 2")
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
      arrayOfNums.push(currentNumber)
      arrayOfOperators.push(currentOperator)
      //displayString = displayString + String(currentNumber) + currentOperator
      //console.log(displayString)
      currentNumber = ""
      currentOperator = ""
      
      operatorPressed = false
    } 
    if (enterPressed) {
      arrayOfNums.push(currentNumber)
      arrayOfOperators.push(currentOperator)
      //displayString = displayString + String(currentNumber)
      //console.log(displayString)
      currentNumber = ""
      currentOperator = ""
      enterPressed = false

      //console.log(eval(displayString))
      
      for (let i=0; i< arrayOfOperators.length; i++) {
        //console.log(arrayOfNums.length)
        //console.log(arrayOfOperators.length  + "   operators length")
        console.log(arrayOfNums[i] + "   num!!!!!!!!!!!")
        //console.log(arrayOfOperators[i]  + "   oper!!!!!!!!!!!!!!!")
        //console.log(displayString)
        displayString = displayString + String(arrayOfNums[i]) + String(arrayOfOperators[i])
        
      }
      console.log(displayString   + "final output")
    }



    //console.log(currentNumber)
    //console.log(currentOperator)
    console.log("============================")
  }



  // function performingOperationForNum(){
  //   if (calculatorButtons[indexPressed].type === 'operator'){
  // }


  return (
    <div className="wrapper">
      <h1>React Calculator</h1>
      {/* <Display valuesEntered={calculatorButtons[currentIndexOfCalcKey].value}/> */}
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