import { useState } from "react";

import Button from "./Button";
import { calculatorButtons } from "../globals/calculator-button-data";


function GroupingButtons({capturingButtonValue}) {


    return (
        <div className="buttonsArrangement">
            {calculatorButtons.map((eachButton, i) =>
                <Button key={i} index={i} value={eachButton.value} type={eachButton.type} text={eachButton.text} className={eachButton.className} 
                text={eachButton.text} capturingButtonValue={capturingButtonValue}></Button>)}
        </div>
    );
}

GroupingButtons.defaultProps = {
    title: ''
}

export default GroupingButtons;
