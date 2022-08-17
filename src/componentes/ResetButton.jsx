import React from "react";
import "../stylesheets/Boton.css"

function Boton(props) {
    return (
        <div className="boton" onClick={props.buttonHandler}>
            Reset
        </div>
    );
}

export default Boton;