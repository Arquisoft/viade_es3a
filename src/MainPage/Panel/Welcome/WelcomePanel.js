import React from "react";
import ShowMap from "../Map/Map";
import Welcome from "./Welcome";
import "./Welcome.css";

const LeftPanel = () => {
    return (
        <nav className="leftPanel_leftPart" data-testid="welcomePart">
            <Welcome/>
        </nav>
         );
    };

const RightPanel = () => {
    return (
        <div className="rightPanel_mapa" id="jeje" data-testid="mapPart">
                    <ShowMap></ShowMap>
        </div>
    );
};

const WelcomePanel = () => {
    return (
        <div className="leftPanel_leftPart">     
            <div className="leftPanel">
                <LeftPanel />
                <RightPanel/>
            </div>
        </div>
    );
};

export default WelcomePanel;