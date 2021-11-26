import { useState } from "react";
import Display from "./Display";
import GroupingButtons from "./GroupingButtons";
import { calculatorButtons } from "../globals/calculator-button-data";
import '../styles/index.css'


function App() {

   const [currentIndexOfCalcKey, setcurrentIndexOfCalcKey] = useState(-1);
   const [displayOutput, setDisplayOutput] = useState("");

  const [currentNumber, setCurrentNumber] = useState('');
  const [currentOperator, setCurrentOperator] = useState('');
  const [arrayOfNumbers, setArrayOfNumbers] = useState([]);
  const [arrayOfOperators, setArrayOfOperators] = useState([]);
  //const [display, setDisplay] = useState('')
  const [operatorPressed, setOperatorPressed] = useState(false);
  const [enterPressed, setEnterPressed] = useState(false);

  var indexPassed = -1
  var newArrayOfNumbers = []
  var newArrayOfOperators = []
  //var currentNumber = ""
  //var currentOperator = ""
  //var arrayOfNums = []
  //var arrayOfOperators = []
  //var displayString = ""
  var operatorPressedReg = false
  var enterPressedReg = false
  //capturing the index in the array of Calculator Key-Objects:


  function capturingButtonValue(indexInArrOfButtns) {
    indexPassed = indexInArrOfButtns
    setcurrentIndexOfCalcKey(indexInArrOfButtns)
    basicLogic(indexInArrOfButtns)
  }

  function UpdateValues() {
    var dummycvar = 10

  }



  function basicLogic(indexPressed) {
    if (calculatorButtons[indexPressed].type === 'number' || calculatorButtons[indexPressed].type === 'decimal') {
      let newNumber = String(currentNumber + String(calculatorButtons[indexPressed].value))

      console.log(newNumber)
      //=============================================================it reads newNum ====================================================================================

      displayOutput ? setDisplayOutput(displayOutput + newNumber) : setDisplayOutput(newNumber);
      //console.log(displayOutput + "this is the displayed output so far")
      setCurrentNumber(newNumber);
      console.log(currentNumber + "this is the displayed output so far")
      console.log(newNumber + "this is the displayed output so far with reg var")
      // 

    }

    else if (calculatorButtons[indexPressed].type === 'operator') {
      //console.log(calculatorButtons[indexPressed].text)
      let newOperator = calculatorButtons[indexPressed].text
      console.log(newOperator + "this is the newOperator reg var")

      console.log(operatorPressed + "oprator should be false ->")
      operatorPressedReg = true
      //setOperatorPressed(true)
      console.log(operatorPressedReg + "oprator should be true ->")
      displayOutput ? setDisplayOutput(displayOutput + newOperator) : setDisplayOutput(newOperator)
      setCurrentOperator(newOperator);
      console.log(currentOperator + "this is the currentOperator state var")
    }

    else if (calculatorButtons[indexPressed].type === 'enter') {

      //setEnterPressed(true)
      enterPressedReg = true
      console.log(enterPressedReg + "enter pressed here, should be true")
    }

    //after categorizing and sorting into strings-categories, pushing the values into separate arrays before operator is pressed
    if (operatorPressedReg) {
      setArrayOfNumbers([...arrayOfNumbers, currentNumber]);
      setArrayOfOperators([...arrayOfOperators, currentOperator])
      console.log(currentNumber + "current number from ifOperatorPressed")
      
      setCurrentNumber('')
      setCurrentOperator('')
      operatorPressedReg = false
      //setOperatorPressed(false)

    }

    if (enterPressedReg) {


      setArrayOfNumbers([...arrayOfNumbers, currentNumber]);
      setArrayOfOperators([...arrayOfOperators, currentOperator])

      newArrayOfNumbers = [...arrayOfNumbers, currentNumber];
      newArrayOfOperators = [...arrayOfOperators, currentOperator]


      setCurrentNumber('')
      setCurrentOperator('')
      //setEnterPressed(false)
      enterPressedReg = false

      let displayAccum = ''
      console.log("we are here")
      console.log(newArrayOfNumbers[0])
      console.log(newArrayOfNumbers[1])
      console.log(newArrayOfNumbers[2])
      console.log(newArrayOfNumbers[3])
      console.log(newArrayOfNumbers[4])
      console.log("and then we are here")
      for (let i = 0; i < newArrayOfOperators.length; i++) 
      {
        console.log(i)
        console.log(newArrayOfNumbers[i])
        displayAccum = displayAccum + String(newArrayOfNumbers[i]) + String(newArrayOfOperators[i])
        console.log(displayAccum)
      }
      
      // setDisplay(displayAccum + " " + eval(displayAccum))
      setDisplayOutput(displayAccum)
      console.log(displayAccum)

      //setDisplayOutput(displayString)

    
    console.log("============================")
    }
  }

  return (
    <div className="wrapper">
      <h1>React Calculator</h1>
      <Display valuesEntered={displayOutput}/>
      {/* <Display valuesEntered={displayString}/> */}
      <GroupingButtons capturingButtonValue={capturingButtonValue} UpdateValues={UpdateValues} />
    </div>
  );

  
}


export default App;


    // else if (calculatorButtons[indexPressed].type === 'sign') {

    // }
    // else if (calculatorButtons[indexPressed].type === 'clear') {

    // }
    // else if (calculatorButtons[indexPressed].type === 'memory') {

    // }
    