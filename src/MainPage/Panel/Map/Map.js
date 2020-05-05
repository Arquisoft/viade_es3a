import React, { Component } from "react";
import { TileLayer, Map, GeoJSON, Marker, Polyline } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import ReactDOM from "react-dom";

import toGeoJSON from "@mapbox/togeojson";

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


class ShowMap extends React.Component {

    constructor() {
        super();
        this.state = {
            center: [43.38, -5.80],
            zoom: 12,
            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            geoj: ""
        };
        window.mapsComponent = this;
        this.geoJsonLayer = React.createRef();
    }
    reloa(centers, zooms, geojs) {
        window.mapsComponent.setState({
            center: centers,
            zoom: zooms,
            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            geoj: geojs
        });
    }
    render() {
        return (
            <div style={styles.wrapper} id="thisMap" >
                <Map style={styles.map} center={this.state.center} zoom={this.state.zoom}  >
                    <TileLayer url={this.state.url} />
                    <GeoJSON key={this.state.geoj.toString()}
                        pointToLayer={pointToLayer}
                        data={this.state.geoj}
                    />
                </Map>
            </div>
        );
    }
}

export function updateMap(route, name, num) {
    let center = [43.38, -5.80];
    let aa = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

    try {
        if (num == 0)
            var parseR = JSON.parse(route);
        else if (num == 1) {

            var xmlDoc = (new DOMParser()).parseFromString(route, "text/xml");
            var parseR = toGeoJSON.gpx(xmlDoc);
        }
        else {
            var xmlDoc = (new DOMParser()).parseFromString(route, "text/xml");
            var parseR = toGeoJSON.kml(xmlDoc);
        }

        let firstPoint1;
        let zoomUp;
        //1era opcion
        if (parseR.geometry !== undefined) {
            firstPoint1 = parseR.geometry.coordinates[0];
            //Darle la vuelta
            center = [
                firstPoint1[1],
                firstPoint1[0]
            ];
            zoomUp = 14;
        }
        //2a opcion
        else if (parseR.features[0] !== undefined && parseR.features[0].geometry.type !== "Point") {
            firstPoint1 = parseR.features[0].geometry.coordinates[0];
            //Darle la vuelta
            center = [
                firstPoint1[1],
                firstPoint1[0]
            ];
            zoomUp = 14;
        } else {
            center = [43.5878945, -5.80789456];
            zoomUp = 11;
        }
        window.mapsComponent.reloa(center, zoomUp, "");
        window.mapsComponent.reloa(center, zoomUp, parseR);
    }
    catch (error) {
        alert("The file is bad")
    }
}

ShowMap.defaultProps = {
    center: [43.38, -5.80],
    zoom: 12,
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    geoj: ""
};


export default ShowMap;

