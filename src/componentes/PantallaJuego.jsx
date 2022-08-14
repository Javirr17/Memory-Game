import React from "react";
import "../stylesheets/PantallaJuego.css";
import Ficha from "./Ficha";
import {useState} from "react";
import useSound from "use-sound";
import flippingSoundURL from "../sounds/Card-flip-sound-effect.mp3";
import winSoundURL from "../sounds/win-sound.mp3"

function PantallaJuego({IDarray}) {

    const [ficha1, setFicha1] = useState(false);
    const [ficha2, setFicha2] = useState(false);
    const [ficha3, setFicha3] = useState(false);
    const [ficha4, setFicha4] = useState(false);
    const [ficha5, setFicha5] = useState(false);
    const [ficha6, setFicha6] = useState(false);
    const [ficha7, setFicha7] = useState(false);
    const [ficha8, setFicha8] = useState(false);
    const [ficha9, setFicha9] = useState(false);
    const [ficha10, setFicha10] = useState(false);

    const [counter, setCounter] = useState(0);

    const [win, setWin] = useState(false);

    const fichas = [ficha1, ficha2, ficha3, ficha4, ficha5, ficha6, ficha7, ficha8, ficha9, ficha10];
    const setFichas = [setFicha1, setFicha2, setFicha3, setFicha4, setFicha5, setFicha6, setFicha7, setFicha8, setFicha9, setFicha10];

    const [playFlippingSound] = useSound(flippingSoundURL, { volume : 0.6 });
    const [playWinSound] = useSound(winSoundURL, { volume : 0.6 });

    const buscarParejaFicha = numFicha => {
        const id = IDarray[numFicha];
        const pos = IDarray.findIndex((item, index) => {
            return (item === id && index !== numFicha)
        });
        return fichas[pos];
    }

    const voltearUltimaFicha = () => {
        for (let i = 0; i < IDarray.length; i++){
            const ficha = fichas[i];
            const setFicha = setFichas[i];
            const otraFicha = buscarParejaFicha(i);
            if(ficha === true && otraFicha === false)
                setFicha(false);
        }
    };

    const checkWin = () => {
        let counter = 0;
        for(const ficha of fichas){
            if(ficha) counter++;
        }
        if(counter === 9)
            setTimeout(() => {
                setWin(true);
                playWinSound();
            }, 1000);
    };

    const clickHandler = (ficha, setFicha, otraFicha) => {

			if(ficha === false && counter === 0){

				setFicha(true);
				setCounter(counter + 1);
                playFlippingSound();

			}else if(ficha === false && counter === 1){

				if(otraFicha === true){

					setFicha(true);
					setCounter(counter - 1);
                    checkWin();

				}else{
					setFicha(true);
					setCounter(counter - 1);
					
					setTimeout(() => {
                        setFicha(false);
                        voltearUltimaFicha();
					}, 1000);
					
				}
                playFlippingSound();
			}
		} 

	return (
		<div className="contenedor-principal">
            <div className={win ? "pantalla-victoria" : "pantalla-juego"}>YOU WIN</div>
            <Ficha id={IDarray[0]} ficha={fichas[0]} clickHandler={() => clickHandler(ficha1, setFicha1, buscarParejaFicha(0))}/>
            <Ficha id={IDarray[1]} ficha={fichas[1]} clickHandler={() => clickHandler(ficha2, setFicha2, buscarParejaFicha(1))}/>
            <Ficha id={IDarray[2]} ficha={fichas[2]} clickHandler={() => clickHandler(ficha3, setFicha3, buscarParejaFicha(2))}/>
            <Ficha id={IDarray[3]} ficha={fichas[3]} clickHandler={() => clickHandler(ficha4, setFicha4, buscarParejaFicha(3))}/>
            <Ficha id={IDarray[4]} ficha={fichas[4]} clickHandler={() => clickHandler(ficha5, setFicha5, buscarParejaFicha(4))}/>
            <Ficha id={IDarray[5]} ficha={fichas[5]} clickHandler={() => clickHandler(ficha6, setFicha6, buscarParejaFicha(5))}/>
            <Ficha id={IDarray[6]} ficha={fichas[6]} clickHandler={() => clickHandler(ficha7, setFicha7, buscarParejaFicha(6))}/>
            <Ficha id={IDarray[7]} ficha={fichas[7]} clickHandler={() => clickHandler(ficha8, setFicha8, buscarParejaFicha(7))}/>
            <Ficha id={IDarray[8]} ficha={fichas[8]} clickHandler={() => clickHandler(ficha9, setFicha9, buscarParejaFicha(8))}/>
            <Ficha id={IDarray[9]} ficha={fichas[9]} clickHandler={() => clickHandler(ficha10, setFicha10, buscarParejaFicha(9))}/>
        </div>
	);
}

export default PantallaJuego;