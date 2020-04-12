import React from "react";
import { TileLayer, Map, GeoJSON } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import ReactDOM from "react-dom";

const Wrapper = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`;

function getStyle(feature, layer) {
    return {
        weight: 1,
        opacity: 1,
        color: "#000"
    }
}

const geojsonMarkerOptions = {
    radius: 4,
    fillColor: "#EE4266",
    color: "#000",
    weight: 0,
    opacity: 1,
    fillOpacity: 0.4
}

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
}

export function updateMap (route,name) {
    let center = [40.205, -3.60];
    let aa = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    let com = <div style={styles.wrapper} id={name}>
        <Map style={styles.map} center={center} zoom="8">
            <TileLayer url={aa} />
            
        </Map>
    </div>;
    ReactDOM.render(com,document.getElementById("jeje"))


    let parseR = JSON.parse(route)
    com = <div style={styles.wrapper} id={name}>
        <Map style={styles.map} center={center} zoom="8">
            <TileLayer url={aa} />
            <GeoJSON
                data={parseR}
                pointToLayer={pointToLayer}
            />
        </Map>
    </div>;
    ReactDOM.render(com,document.getElementById("jeje"))
}

ShowMap.defaultProps = {
    center: [40.205, -3.60],
    zoom: 8,
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
};

export default ShowMap;

/* export default class Map extends React.Component {

    componentDidMount() {
        this.map = L.map("map", {
            center: [43.305, -5.60],
            zoom: 10,
            zoomControl: true
        });

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            detectRetina: true,
            maxZoom: 20,
            maxNativeZoom: 17,
        }).addTo(this.map);

        //Markers --> Inicio, Fin

        var points = [[43.350835, -5.851479],
        [43.355012, -5.851291],
        [43.360846, -5.857008],
        [43.361753, -5.849873],
        [43.362632, -5.843335],
        [43.360655, -5.844574],
        [43.358475, -5.842981]];

        var polyline = L.polyline(points, { color: "rgb(77, 218, 243)" }).addTo(this.map);

        var popup = L.popup();
        var photoImg = "<img src="parqueDeInvierno.jpg" height="150px" width="150px"/>";

        var marker = L.marker([43.350835, -5.851479]).
            bindPopup("<b>Parque de invierno</b><br>Aquí empieza nuestra ruta").openPopup(popup).addTo(this.map);

        var marker2 = L.marker([43.358475, -5.842981]).
            bindPopup("<b>Campillín</b><br>Aquí finaliza nuestra ruta").addTo(this.map);
    }

    render() {
        return <Wrapper width="70vw" height="100vh" id="map" className="rightPanel_mapa" />
    }


} */