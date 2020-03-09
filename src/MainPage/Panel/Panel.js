import React from 'react';
import './Panel.css';



const Panel = () => {
    return (
        <div className="panelCompleto">
            {/* Panel izquierdo */}
            <section className="leftPanel">
                <nav className="leftPanel_leftPart">
                    <ul>
                    <li>File:</li>
                    <li>Name:</li>
                    <li>Details:</li>
                    
                    </ul>
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