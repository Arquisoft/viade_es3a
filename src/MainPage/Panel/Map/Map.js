import React from "react";
import { TileLayer, Map, GeoJSON } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import ReactDOM from "react-dom";
/*
const Wrapper = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`;

function getStyle(feature, layer) {
    return {
        weight: 1,
        opacity: 1,
        color: "#000"
    };
}*/

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
            <Map style={styles.map} center={props.center} zoom={props.zoom}>
                <TileLayer url={props.url} />
                
            </Map>
        </div>
    );
};

export function updateMap (route,name) {
    let center = [40.205, -3.60];
    let aa = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    let com = <div style={styles.wrapper} id={name}>
        <Map style={styles.map} center={center} zoom="8">
            <TileLayer url={aa} />
            
        </Map>
    </div>;
    ReactDOM.render(com,document.getElementById("jeje"));


    let parseR = JSON.parse(route);
    let first = parseR.features[0].geometry.coordinates[0];
    var firstP = [
        first[1],
        first[0]
    ];
    com = <div style={styles.wrapper} id={name}>
        <Map style={styles.map} center={firstP} zoom="12" >
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
    center: [40.205, -3.60],
    zoom: 8,
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
};

export default ShowMap;

