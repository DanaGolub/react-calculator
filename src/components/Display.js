function Display({ button }) {
    return (
        <header>
            <h1>{button}</h1>
        </header>
    );
}

Display.defaultProps = {
    title: 'Calculator'
}

export default Display;
