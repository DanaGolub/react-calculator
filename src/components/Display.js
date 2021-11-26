function Display({ valuesEntered }) {
    return (
        <div className="display-box">
            <h1>{valuesEntered}</h1>
        </div>
    );
}

Display.defaultProps = {
    title: 'Calculator'
}

export default Display;
