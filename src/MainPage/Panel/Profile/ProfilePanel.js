import React from "react";
import ShowMap from "../Map/Map";
import Profile from "./Profile";
import "./Profile.css";

const LeftPanel = () => {
    return (
        <nav className="leftPanel_leftPart" data-testid="profilePart">
            <Profile/>
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

const ProfilePanel = () => {
    return (
        <div className="leftPanel_leftPart">     
            <div className="leftPanel">
                <LeftPanel />
                <RightPanel/>
            </div>
        </div>
    );
};

export default ProfilePanel;