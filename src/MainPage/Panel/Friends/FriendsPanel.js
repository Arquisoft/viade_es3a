import React from "react";
import ShowMap from "../Map/Map";
import Friends from "./Friends";
import "./Friends.css";

const LeftPanel = () => {
    return (
        <nav className="leftPanel_leftPart" data-testid="friendsPart">
            <Friends/>
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

const FriendsPanel = () => {
    return (
        <div className="leftPanel_leftPart">     
            <div className="leftPanel">
                <LeftPanel />
                <RightPanel/>
            </div>
        </div>
    );
};

export default FriendsPanel;