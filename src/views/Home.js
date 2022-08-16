import React from 'react';
import rickHome from "../img/rm-home.png";

function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <div>
                    <img width={300} height={300} src={rickHome} alt="CryptoMate"/>
                </div>
                <div>BIENVENIDO</div>
                <div>Aplicacion REST para afianzar conceptos sobre react</div>
                <div><u>Se aplico:</u> </div>
                <div>
                    <ul>
                        <li>Components,Events,Hooks,State managment,Context API.</li>
                        <li>Redux,Redux-saga,react-redux,react-router-dom</li>
                        <li>Sass,Bootstrap</li>
                    </ul>
                </div>
                <div><u>REPOSITORY</u>:<a className="text-decoration-none" href="https://gitlab.com/Carnabanegro" target="_blank" rel="noopener noreferrer"> Carnabanegro GitHub</a></div>
            </div>
        </div>
    );
}

export default Home;