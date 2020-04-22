import React from "react";
import ShowMap from "../Map/Map";
import SharedRoutes from "./SharedRoutes";
import "../LoadRoute/LoadRoute.css";

const LeftPanel = () => {
    return (
        <nav className="leftPanel_leftPart">
            <SharedRoutes/>
        </nav>
         );
    };

const RightPanel = () => {
    return (
        <div className="rightPanel_mapa" id="jeje">
                    <ShowMap></ShowMap>
        </div>
    );
};

const SharedRoutesPanel = () => {
    return (
        <div className="leftPanel_leftPart">     
            <div className="leftPanel">
                <LeftPanel />
                <RightPanel/>
            </div>
        </div>
    );
};

export default SharedRoutesPanel;