import React from 'react';
import './Panel.css';
import AddRoute from "./AddRoute/AddRoute.js";
import LoadRoute from './LoadRoute/LoadRoute';

const Panel = () => {
    return (
        <div className="panelCompleto">
            {/* Panel izquierdo */}
            <section className="leftPanel">
                <nav className="leftPanel_leftPart">
                    {/* Estatico */}
                    {/* <ul>
                    <li>File:</li>
                    <li>Name:</li>
                    <li>Details:</li>
                    
                    </ul> */}

                    {/* Componente añadir ruta */}
                    <AddRoute/>

                    {/* Componente cargar ruta */}
                    {/* <LoadRoute/> */}
                </nav>
            {/* Panel derecho */}
                <article className="rightPanel_mapa">
                    <h1>*Insert route to show map*</h1>
                </article>
            </section>
        </div>
       
    );
};

export default Panel;