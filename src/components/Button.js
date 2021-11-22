import calculatorButtons from '../globals/calculator-button-data.js'



function Button({ className, value, onClick, type, text }) {

    function captureKeyValue(e){
        onClick(e.target.value)
        console.log(e.target.value)
    }

    return (
        <button className={className} value={value} onClick={captureKeyValue} type={type}>
            <h1>{text}</h1>
        </button>
    );
}

 Button.defaultProps = {
    title: 'React App'
}

export default Button;
