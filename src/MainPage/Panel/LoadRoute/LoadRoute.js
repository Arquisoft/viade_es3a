import React, { useState, useEffect } from 'react';
import { useWebId } from '@solid/react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Button } from 'react-bootstrap';
import './LoadRoute.css';
import * as solidAuth from 'solid-auth-client';
import fileClient from 'solid-file-client';
import DocumentTitle from "react-document-title";

import * as algo from '../Map/Map';

import Slider from "./Slider";

const fileClien = new fileClient(solidAuth, { enableLogging: true });
var urlRutas = [];

var images = [];
var videos = [];

const LoadRoute = () => {

    const [folders, setFolders] = useState([]);
    const [selected, setSelected] = useState({
        name: '',
        description: '',
        images: [],
        videos: []
    });

    console.log(selected);

    var user = useWebId();

    useEffect(() => {
        if (user != undefined) {
            const url = user.split("profile/card#me")[0] + "/private/routes3a";
            //listRoutes(url);
            loadRoutes(url, setFolders);
        }
    }, [user]);

    return (
        
        <DocumentTitle title="Load Route">
        <div class="container">
            <h2 id="rutas" class="h2">Routes list:</h2>

            <ul>
                {
                    folders.map((folder, i) => {
                        var urlArchivo = "" + folder.url;
                        var arrayUrl = urlArchivo.split('/');
                        urlRutas.push(urlArchivo);
                        var nombre = arrayUrl[arrayUrl.length - 2].split("%20").join(" ")
                        return (
                            <li key={'folder_' + i}>
                                <a href="#" class={"lista"} onClick={() => loadRoute(urlArchivo, setSelected)}>
                                    {nombre}
                                </a>
                            </li>)
                    })
                }
            </ul>
            <div class="card bg-info text-white">
                <div class="card-body">
                    <h4 class="card-title" id="routeName">{selected.name.split("%20").join(" ")}</h4>
                    <p class="card-Description" id="routeDescription">{selected.description}</p>
                    {
                        selected.images.map((image) => (
                            images.push(image)
                        ))
                    }
                    {
                        selected.videos.map((video) => (
                            videos.push(video)
                        ))
                    }
                    <div className="bodyMedia">
                        <Slider images={images} videos={videos} />
                    </div>
                </div>
            </div>
        </div>
        </DocumentTitle>           
    );
}

async function loadRoutes(url, setFolders) {

    let folder = await fileClien.readFolder(url);
    setFolders(folder.folders);
}

async function loadRoute(urlCarptetaRuta, setSelected) {

    let folder = await fileClien.readFolder(urlCarptetaRuta);
    let folderDesc = await fileClien.readFile(urlCarptetaRuta + "description");
    let images = await loadFile(urlCarptetaRuta, "photo/img");
    let videos = await loadFile(urlCarptetaRuta, "video/vid");

    await showRoute(urlCarptetaRuta);

    setSelected({
        name: folder.name,
        description: folderDesc,
        images: images,
        videos: videos
    });

}

async function loadFile(urlCarptetaRuta, route) {
    var k;
    var result = [];
    for (k = 0; k < 1000; k++) {
        try {
            await fileClien.readFile(urlCarptetaRuta + route + (k + 1));
            result.push(urlCarptetaRuta + route + (k + 1))
        } catch{
            k = 1000;
        }
    }
    return result;
}

export async function showRoute(urlCarptetaRuta) {
    let folder = await fileClien.readFolder(urlCarptetaRuta);

    let ruta = await fileClien.readFile(urlCarptetaRuta + folder.name + ".geojson");

    algo.updateMap(ruta,folder.name);
}

export default LoadRoute;