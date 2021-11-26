import calculatorButtons from '../globals/calculator-button-data.js'
import '../styles/index.css'



function Button({ className, value, capturingButtonValue, type, text, index, UpdateValues }) {

    // function captureKeyValue(e){
    //     //var valueOfKey = this.value
    //     capturingButtonValue(e.target.value)
    //     console.log(e.target.value + "from Button Component")
    // }

    return (
        <button className={`${className}${type}btn`} value={value} onClick={() => {capturingButtonValue(index); UpdateValues()}} type={type}>
            <h1>{text}</h1>
        </button>
    );
}

 Button.defaultProps = {
    title: 'React App'
}

export default Button;
