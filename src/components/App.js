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
  //const [operatorPressed, setOperatorPressed] = useState(false);
  //const [enterPressed, setEnterPressed] = useState(false);

  var indexPassed = -1
  var newArrayOfNumbers = []
  var newArrayOfOperators = []
  //var currentNumber = ""
  //var currentOperator = ""
  //var arrayOfNums = []
  //var arrayOfOperators = []
  //var displayString = ""
  let operatorPressedReg = false
  let enterPressedReg = false
  let newNumber = ''
  let newOperator = ''
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
    //////solution ---> while loop while operator or enter not pressed??? then can accumulate values within here>> ???
    if (calculatorButtons[indexPressed].type === 'number' || calculatorButtons[indexPressed].type === 'decimal') {

      newNumber =  String(newNumber + String(calculatorButtons[indexPressed].value))
      //console.log(currentNumber + "  from the start, currentNumber")
      console.log("checking the operatorPressedBool " + operatorPressedReg)

      console.log(newNumber + " newNumber when introduced        ----------")

      //=============================================================it reads newNum ====================================================================================

      displayOutput ? setDisplayOutput(displayOutput + newNumber) : setDisplayOutput(newNumber);
      // displayOutput ? setDisplayOutput(displayOutput + newNumber) : setDisplayOutput(newNumber);
      //console.log(displayOutput + "this is the displayed output so far")
      setCurrentNumber(newNumber);
      console.log(currentNumber + "  from the start, currentNumber")
      
      setArrayOfNumbers([...arrayOfNumbers, currentNumber]);
      console.log(currentNumber + "this is the currentNumber so far -----------------")
      console.log(newNumber + "this is the newNumber so far with reg var")
      // 
    }
    else if (calculatorButtons[indexPressed].type === 'operator') {
      //console.log(calculatorButtons[indexPressed].text)
      newOperator = calculatorButtons[indexPressed].text
      console.log(newOperator + " this is the newOperator reg var")

      console.log(operatorPressedReg + " oprator should be false ->")
      operatorPressedReg = true
      //setOperatorPressed(true)
      console.log(operatorPressedReg + " oprator should be true ---------------------------- ->")

      displayOutput ? setDisplayOutput(displayOutput + newOperator) : setDisplayOutput(newOperator)
      setCurrentOperator(newOperator)
      console.log(currentOperator + " this is the currentOperator state var")

      setArrayOfOperators([...arrayOfOperators, currentOperator])
      console.log(currentOperator)

      setCurrentNumber('')
      setCurrentOperator('')
    }

    else if (calculatorButtons[indexPressed].type === 'enter') {

      //setEnterPressed(true)
      enterPressedReg = true
      console.log(enterPressedReg + " enter pressed here, should be true")
    }
    console.log(operatorPressedReg + " should be true ------->>>>>>>>>>>>>>>")
    //after categorizing and sorting into strings-categories, pushing the values into separate arrays before operator is pressed
    if (operatorPressedReg) {

      setArrayOfNumbers([...arrayOfNumbers, currentNumber]);
      console.log("number: "+currentNumber)
      console.log("Array0 " + arrayOfNumbers[0])
      //setArrayOfOperators([...arrayOfOperators, currentOperator])
      setDisplayOutput('')
      console.log(currentNumber + " current number from ifOperatorPressed, state var")
      setCurrentNumber('')
      setCurrentOperator('')
      newArrayOfNumbers = [...arrayOfNumbers, newNumber];
      newArrayOfOperators = [...arrayOfOperators, newOperator]
    }

    if (enterPressedReg) {
      setArrayOfNumbers([...arrayOfNumbers, currentNumber]);
      console.log(currentNumber + "  ------- here printing the currentNumber state var after pressing equal")
      console.log(newNumber + "  ------- here printing the newNumber state var after pressing equal")
      console.log(arrayOfNumbers[0] + "  ------- here printing first index in arrayOfNumbers")
      console.log(arrayOfNumbers[1] + "  ------- here printing second index in arrayOfNumbers")
      console.log(arrayOfNumbers[2] + "  ------- here printing third index in arrayOfNumbers")

      setArrayOfOperators([...arrayOfOperators, currentOperator])
      
      newArrayOfNumbers = [...arrayOfNumbers, currentNumber];
      newArrayOfOperators = [...arrayOfOperators, currentNumber]
      console.log(newArrayOfNumbers[0] + "  ------- here printing first index in newArrayOfNumbers")
      console.log(newArrayOfNumbers[1] + "  ------- here printing second index in newArrayOfNumbers")

      setCurrentNumber('')
      setCurrentOperator('')
      //setEnterPressed(false)
      enterPressedReg = false

      let displayAccum = ''
      console.log("we are here")
      console.log(newArrayOfNumbers[0])
      console.log(newArrayOfNumbers[1])
      console.log(newArrayOfNumbers[2])

      console.log("and then we are here")
      for (let i = 0; i < newArrayOfOperators.length; i++) 
      {
        console.log("we are here")
        console.log(newArrayOfNumbers[0])
        console.log(newArrayOfNumbers[1])

        console.log("and then we are here")
        console.log("==== index::")
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
    