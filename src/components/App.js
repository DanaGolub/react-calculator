import { useState } from "react";
import Display from "./Display";
import GroupingButtons from "./GroupingButtons";
import { calculatorButtons } from "../globals/calculator-button-data";
import '../styles/index.css'


function App() {

  // const [currentIndexOfCalcKey, setcurrentIndexOfCalcKey] = useState(-1);
   const [displayOutput, setDisplayOutput] = useState();
  // const [currentOperator, setCurrentOperator] = useState("");
  //const [currentNumber, setCurrentNumber] = useState("");
  //const [currentNumber, setCurrentNumber] = useState("");

  // MW code...
  const [currentNumber, setCurrentNumber] = useState('');
  const [currentOperator, setCurrentOperator] = useState('');
  const [arrayOfNumbers, setArrayOfNumbers] = useState([]);
  const [arrayOfOperators, setArrayOfOperators] = useState([]);
  const [display, setDisplay] = useState('')
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
  //var operatorPressed = false
  //var enterPressed = false
  //capturing the index in the array of Calculator Key-Objects:


  function capturingButtonValue(indexInArrOfButtns) {
    //console.log(indexInArrOfButtns + " it does print")
    indexPassed = indexInArrOfButtns
    basicLogic(indexInArrOfButtns)
  }

  function UpdateValues() {
    var dummycvar = 10

  }



  function basicLogic(indexPressed) {
    if (calculatorButtons[indexPressed].type === 'number' || calculatorButtons[indexPressed].type === 'decimal') {
      const newNumber = currentNumber + String(calculatorButtons[indexPressed].value)
      displayOutput ? setDisplayOutput(displayOutput + newNumber) : setDisplayOutput(newNumber);
      setCurrentNumber(newNumber);
      // 

    }
    else if (calculatorButtons[indexPressed].type === 'operator') {
      //console.log(calculatorButtons[indexPressed].text)
      const newOperator = calculatorButtons[indexPressed].text
      setOperatorPressed(true)
      //operatorPressed = true
      displayOutput ? setDisplayOutput(displayOutput + newOperator) : setDisplayOutput(newOperator)
      setCurrentOperator(newOperator);
    }
    else if (calculatorButtons[indexPressed].type === 'enter') {
      //var enterPressed = true
      setEnterPressed(true)
    }

    //after categorizing and sorting into strings-categories, pushing the values into separate arrays before operator is pressed
    if (operatorPressed) {
      //currentOperator = String(currentOperator)
      //console.log(currentOperator)
      //arrayOfNums.push(currentNumber)
     // arrayOfOperators.push(currentOperator)

      setArrayOfNumbers([...arrayOfNumbers, currentNumber]);
      setArrayOfOperators([...arrayOfOperators, currentOperator])
      
      setCurrentNumber('')
      setCurrentOperator('')
      setOperatorPressed(false)
      //currentNumber = ""
      // currentOperator = ""
      //operatorPressed = false
    }

    if (enterPressed) 

      newArrayOfNumbers = [...arrayOfNumbers, currentNumber];
      newArrayOfOperators = [...arrayOfOperators, currentOperator]

      //arrayOfNums.push(currentNumber)
      //arrayOfOperators.push(currentOperator)
      setCurrentNumber('')
      setCurrentOperator('')
      setEnterPressed(false)
      //currentOperator = ""
      //enterPressed = false

      let displayAccum = ''
      // displayString = displayString + String(arrayOfNums[i]) + String(arrayOfOperators[i])

      for (let i = 0; i < newArrayOfOperators.length; i++) 
      {
        console.log(newArrayOfNumbers[i])
        displayAccum = displayAccum + String(newArrayOfNumbers[i]) + String(newArrayOfOperators[i])
        console.log(displayAccum)

      }
      
      setDisplay(displayAccum + " " + eval(displayAccum))

      //(setDisplayOutput(displayString + eval(displayString)))

    //   let newArr = arrayOfNums.map(function(text,index){
    //     return setDisplayOutput( text + ' ' + arrayOfOperators[index])
    //  })

     

      // arrayOfOperators.map((oper, i) => setDisplayOutput (oper + oper))
     // console.log(displayOutput)

      //setDisplayOutput(displayString)
      //console.log(displayString + "final output string")
      //console.log(eval(displayString) + "final output val")
    }
    console.log("============================")
  

  return (
    <div className="wrapper">
      <h1>React Calculator</h1>
      <Display valuesEntered={display}/>
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
    