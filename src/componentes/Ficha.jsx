import React from "react";
import "../stylesheets/Ficha.css";

function Ficha(props) {

	return (
		<div className={`ficha ${props.ficha ? `id${props.id}` : "desactivada"}`} onClick={props.clickHandler}>
		</div>
	);
}

export default Ficha;