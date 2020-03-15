import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Welcome.css'

const Welcome = () => {
    return (
        <div className="contenedor">
            <h2 className="titulo">Welcome to VIADE</h2>
            <p> Viade is a decentralized routes management system based on the solid specifications.
            </p>
            <p>Here's the list of things you can do with VIADE:</p>
            <ul>
                <li>
                    <span className="opcion">Add route </span>: you can upload a route and it will be saved in your SOLID pod
                </li>
                <li>
                    <span className="opcion">Load route </span>: you can choose one route and show it in the map
                </li>
                <li>
                    <span className="opcion">Profile </span>: your personal data
                </li>
                <li>
                    <span className="opcion"> Friends </span>: your friends
                </li>
            </ul>

            <p>Enjoy our app ! :)</p>
        </div >
    )
}

export default Welcome;