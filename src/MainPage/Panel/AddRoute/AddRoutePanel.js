import React from "react";
import ShowMap from "../Map/Map";
import "./AddRoute.css";
import AddRoute from "./AddRoute";

const LeftPanel = () => {
    return (
        <nav className="leftPanel_leftPart" data-testid="addRoutePart">
            <AddRoute />
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

const AddRoutePanel = () => {
    return (
        <div className="leftPanel_leftPart">
            <div className="leftPanel">
                <LeftPanel />
                <RightPanel />
            </div>
        </div>
    );
};

export default AddRoutePanel;