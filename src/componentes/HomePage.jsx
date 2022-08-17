import React from "react";
import "../stylesheets/HomePage.css";

function HomePage() {
    return(
        <>
            <div className="foto-perfil"></div>
            <div className="texto-foto">User</div>
            <a href="./game"><div className="play button">Play</div></a>
            <div className="ranking button">Ranking</div>
        </>
    );
}

export default HomePage;