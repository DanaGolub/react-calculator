function Display({ valuesEntered }) {
    return (
        <header>
            <h1>{valuesEntered}</h1>
        </header>
    );
}

Display.defaultProps = {
    title: 'Calculator'
}

export default Display;
