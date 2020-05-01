import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Welcome.css";

const Welcome = () => {
    return (
        <div className="contenedor">
            <h2 className="titulo" data-testid="label">Welcome to VIADE</h2>
            <p data-testid="introduction"> Viade is a decentralized routes management system based on the solid specifications.
            </p>
            <p data-testid="list">Here's the list of things you can do with VIADE:</p>
            <ul>
                <li>
                    <span className="opcion" data-testid="add">Add route </span>: you can upload a route and it will be saved in your SOLID pod
                </li>
                <li>
                    <span className="opcion" data-testid="load">My route </span>: you can choose one route and show it in the map
                </li>
                <li>
                    <span className="opcion" data-testid="create">Create route </span>: your can create your own route and save it
                </li>
                <li>
                    <span className="opcion" data-testid="share">Share routes </span>: you can share your routes with your friends
                </li>
                <li>
                    <span className="opcion" data-testid="profile">Profile </span>: your personal data
                </li>
                <li>
                    <span className="opcion" data-testid="friends">Friends </span>: your friends management
                </li>
                <li>
                    <span className="opcion" data-testid="friendsRoutes">Friend's routes </span>: you can see routes that have been shared to you
                </li>
                <li>
                    <span className="opcion" data-testid="notifications">Notifications </span>: you can see notifications related to your profile
                </li>
            </ul>

            <p data-testid="message">Enjoy our app ! :)</p>
            <p className="alert">Be careful! Make sure the app has control permissions on your solid profile</p>
        </div >
    );
};

export default Welcome;