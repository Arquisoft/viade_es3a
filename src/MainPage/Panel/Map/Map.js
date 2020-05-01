import React from "react";
import { TileLayer, Map, GeoJSON, Marker, Polyline } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import ReactDOM from "react-dom";

import createRoute from "../CreateRoute/CreateRoute";

const geojsonMarkerOptions = {
    radius: 4,
    fillColor: "#EE4266",
    color: "#000",
    weight: 0,
    opacity: 1,
    fillOpacity: 0.4
};

function pointToLayer(feature, latlng) {
    return L.circleMarker(latlng, geojsonMarkerOptions);
}

const styles = {
    wrapper: {
        width: "70vw",
        height: "100vh",
        className: "rightPanel_mapa",
        display: "flex"
    },
    map: {
        flex: 1
    }
};

const ShowMap = (props) => {

    return (
        <div style={styles.wrapper} id="thisMap" >
            <Map style={styles.map} center={props.center} zoom={props.zoom}  >   
                <TileLayer url={props.url} />
            </Map>
        </div>
    );
};

export function updateMap (route,name) {
    let center = [43.38, -5.80];
    let aa = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    let com = <div style={styles.wrapper} id={name}>
        <Map style={styles.map} center={center} zoom="8">
            <TileLayer url={aa} />
            
        </Map>
    </div>;
    ReactDOM.render(com,document.getElementById("jeje"));


    let parseR = JSON.parse(route);

    let firstPoint1;
    let zoomUp;
    //1era opcion
    if(parseR.geometry !== undefined){
        firstPoint1 = parseR.geometry.coordinates[0];
        //Darle la vuelta
        center = [
            firstPoint1[1],
            firstPoint1[0]
        ];
        zoomUp = 14;
    }
    //2a opcion
    else if(parseR.features[0] !== undefined && parseR.features[0].geometry.type !== "Point"){
        firstPoint1 = parseR.features[0].geometry.coordinates[0];
        //Darle la vuelta
        center = [
            firstPoint1[1],
            firstPoint1[0]
        ];
        zoomUp = 14;
    }else{
        center = [43.5878945, -5.80789456];
        zoomUp = 11;
    }
    
    com = <div style={styles.wrapper} id={name}>
        <Map style={styles.map} center={center} zoom={zoomUp} >
            <TileLayer url={aa} /> 
            <GeoJSON
                data={parseR}
                pointToLayer={pointToLayer}
            />
        </Map>
    </div>;
    ReactDOM.render(com,document.getElementById("jeje"));
}

ShowMap.defaultProps = {
    center: [43.38, -5.80],
    zoom: 12,
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
};


export default ShowMap;

