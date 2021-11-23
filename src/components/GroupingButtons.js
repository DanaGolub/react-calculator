import { useState } from "react";

import Button from "./Button";
import { calculatorButtons } from "../globals/calculator-button-data";


function GroupingButtons({}) {

    const [numbersPressed, setNumbersPressed] = useState();

    function capturingButtonValue(value) {
        //var keyValuePressed = value
        console.log(value)
        setNumbersPressed(value)
        //console.log(value)

    }

    return (
        <div className="buttonsArrangement">
            {calculatorButtons.map((eachButton, i) =>
                <Button key={i} value={eachButton.value} type={eachButton.type} text={eachButton.text} className={eachButton.className} 
                text={eachButton.text} capturingButtonValue={capturingButtonValue}></Button>)}
        </div>
    );
}

GroupingButtons.defaultProps = {
    title: ''
}

export default GroupingButtons;
