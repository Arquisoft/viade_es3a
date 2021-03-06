import React, { useState, useEffect } from "react";
import { useWebId } from "@solid/react";
import "bootstrap/dist/css/bootstrap.css";
import { Card, Button } from "react-bootstrap";
import "../LoadRoute/LoadRoute.css";
import * as solidAuth from "solid-auth-client";
import fileClient from "solid-file-client";
import DocumentTitle from "react-document-title";
import * as algo from "../Map/Map";
import Slider from "../LoadRoute/Slider";
import { Loading } from "../../../Loading";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const fileClien = new fileClient(solidAuth, { enableLogging: true });


var urlRutas = [];

var images = [];
var videos = [];

export async function showRoute(urlCarptetaRuta) {

    let folder = await fileClien.readFolder(urlCarptetaRuta);

    if( await fileClien.itemExists(urlCarptetaRuta + folder.name + ".geojson")) {
        let ruta = await fileClien.readFile(urlCarptetaRuta + folder.name + ".geojson");
        algo.updateMap(ruta, folder.name, 0);
    }
    else if( await fileClien.itemExists(urlCarptetaRuta + folder.name + ".gpx")) {
        let ruta = await fileClien.readFile(urlCarptetaRuta + folder.name + ".gpx");
        algo.updateMap(ruta, folder.name, 1);
    }
    else if( await fileClien.itemExists(urlCarptetaRuta + folder.name + ".kml")) {
        let ruta = await fileClien.readFile(urlCarptetaRuta + folder.name + ".kml");
        algo.updateMap(ruta, folder.name, 2);
    }
    else{
        toast.error("This file is not permited", {
            position: toast.POSITION.BOTTOM_LEFT
        });
    }

}

async function loadRoutes(url, setFolders) {

    let folder = await fileClien.readFolder(url);
    var result = [];

    for (var i = 0; i < folder.files.length; i += 1) {
        try {
            let f = await fileClien.readFile(folder.files[i].url);

            let otro = await fileClien.readFolder(f);
            result.push(otro);
        }
        catch (error) {
            await fileClien.deleteFile(folder.files[i].url);
        }
    }

    setFolders(result);
}

async function loadFile(urlCarptetaRuta, route) {
    var k;
    var result = [];
    for (k = 0; k < 1000; k++) {
        try {
            await fileClien.readFile(urlCarptetaRuta + route + (k + 1));
            result.push(urlCarptetaRuta + route + (k + 1));
        } catch{
            k = 1000;
        }
    }
    return result;
}



const SharedRoutes = () => {

    const [folders, setFolders] = useState([]);
    const [selected, setSelected] = useState({
        name: "",
        description: "",
        images: [],
        videos: []
    });
    const [loading, setLoading] = useState(false);
    var images = [];
    var videos = [];

    var user = useWebId();
    

    useEffect(() => {
        if (user != undefined) {
            const url = user.split("profile/card#me")[0] + "inbox/routes3a";
            //listRoutes(url);
            loadRoutes(url, setFolders);
        }
    }, [user]);
    selected.images.map((image) => (
        images.push(image)
    ));
    selected.videos.map((video) => (
        videos.push(video)
    ));
    return (
        <React.Fragment>
            <Loading loading={loading} />
        <DocumentTitle title="Friend's routes">
            <div class="container">
                <h2 data-testid="label" id="rutas" class="h2" data-testid="label">Routes from your friends:</h2>

                <div className="listaDeRutas">
                    {
                        folders.map((folder, i) => {
                            var urlArchivo = "" + folder.url;
                            var arrayUrl = urlArchivo.split("/");
                            urlRutas.push(urlArchivo);
                            var nombre = arrayUrl[arrayUrl.length - 2].split("%20").join(" ");
                            return (
                                <div key={"folder_" + i} className="optionRoute" id="optionRoute">
                                    <a role="button" class={"lista"} onClick={() => loadRoute(urlArchivo, setSelected,setLoading)} id="enlaceLoadRoute">
                                        {nombre}
                                        <span class="hyperspan"></span>
                                    </a>
                                </div>);
                        })
                    }
                </div>
                <div data-testid="card" class="card bg-info text-white" data-testid="card">
                    <div class="card-body">
                        <h4 class="card-title" id="routeName">{selected.name.split("%20").join(" ")}</h4>
                        <p class="card-Description" id="routeDescription">{selected.description}</p>
                        <div className="bodyMedia">
                            <Slider images={images} videos={videos} />
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </DocumentTitle>
        </React.Fragment>


    );
};
async function loadRoute(urlCarptetaRuta, setSelected,setLoading) {
    setLoading(true);
    let folder = await fileClien.readFolder(urlCarptetaRuta);

    let folderDesc = await fileClien.readFile(urlCarptetaRuta + "description");
    let images = await loadFile(urlCarptetaRuta, "photo/img");
    let videos = await loadFile(urlCarptetaRuta, "video/vid");

    await showRoute(urlCarptetaRuta);
    setLoading(false);

    setSelected({
        name: folder.name,
        description: folderDesc,
        images: images,
        videos: videos
    });

}

export default SharedRoutes;