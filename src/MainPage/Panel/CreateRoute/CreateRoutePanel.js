import React from "react";
import CreateRoute from "./CreateRoute";
import "./CreateRoute.css";


const CreateRoutePanel = () => {
    return (
        <div className="panel" data-testid="createRoutePart">
            <CreateRoute />
        </div>
    );
};

export default CreateRoutePanel;