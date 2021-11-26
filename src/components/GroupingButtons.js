import { useState } from "react";
import '../styles/index.css'
import Button from "./Button";
import Display from "./Display";
import { calculatorButtons } from "../globals/calculator-button-data";

function GroupingButtons({capturingButtonValue, UpdateValues, valuesEntered}) {
    return (
        <div className="buttonsArrangement">
            {calculatorButtons.map((eachButton, i) =>
                <Button key={i} index={i} value={eachButton.value} type={eachButton.type} text={eachButton.text} className={eachButton.className} 
                text={eachButton.text} capturingButtonValue={capturingButtonValue} UpdateValues={UpdateValues}></Button>)}
        </div>
    );
}

GroupingButtons.defaultProps = {
    title: ''
}

export default GroupingButtons;
