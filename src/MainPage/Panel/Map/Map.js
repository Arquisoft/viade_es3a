import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
`;

export default class Map extends React.Component{

    componentDidMount(){
        this.map = L.map("map", {
             center: [43.305, -5.60],
             zoom: 10,
             zoomControl: true
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            detectRetina: true,
            maxZoom:20,
            maxNativeZoom:17,
        }).addTo(this.map);

        //Markers --> Inicio, Fin
        var marker2 = L.marker([43.361070,-5.850456,16]).addTo(this.map);
        var marker = L.marker([43.354877,-5.851336,16]).addTo(this.map);
        
        marker2.bindPopup("<b>Campo San Francisco</b><br>Aquí finaliza nuestra ruta").openPopup();
        marker.bindPopup("<b>Escuela Ingeniería Informática</b><br>Aquí empieza nuestra ruta").openPopup();
        
        //GeoJson --> pintar ruta
        var geojsonFeature = {
            
            "type": "Feature",
            "properties": {
                "name": "Coors Field",
                "amenity": "Baseball Stadium",
                "popupContent": "This is where the Rockies play!"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [43.305, -5.60]
            }
        };

        //Añadimos Capa GeoJson
        L.geoJSON(geojsonFeature).addTo(this.map);

        //Coordenadas de la ruta para pintar la linea
        var myLines = [{
            "type": "LineString",
            "coordinates": [[43.354877,-5.851336,16], [43.361070,-5.850456,16]]
        }];

        //Estilo de la linea
        var myStyle = {
            "color": "#4169e1",
            "weight": 5,
            "opacity": 0.65
        };
        
        L.geoJSON(myLines, {
            style: myStyle
        }).addTo(this.map);
    }

        render(){
            return <Wrapper width="70vw" height="100vh" id="map"  className="rightPanel_mapa"/>
        }

        
}