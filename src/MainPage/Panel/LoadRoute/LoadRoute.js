import React, { useState, useEffect } from "react";
import { useWebId } from "@solid/react";
import "bootstrap/dist/css/bootstrap.css";
import { Card, Button, InputGroup } from "react-bootstrap";
import "./LoadRoute.css";
import * as solidAuth from "solid-auth-client";
import fileClient from "solid-file-client";
import DocumentTitle from "react-document-title";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import { Loading } from "../../../Loading";

import * as algo from "../Map/Map";

import Slider from "./Slider";


const fileClien = new fileClient(solidAuth, { enableLogging: true });
var urlRutas = [];

var images = [];
var videos = [];
var urlfol;

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
        alert("This file is not permited");
    }
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
    var x = document.getElementById("botonDel");
    x.style.display = "block";
    var y = document.getElementById("botonEdi");
    y.style.display = "block";
    return result;
}

async function loadRoute(urlCarptetaRuta, setSelected,setLoading) {

    setLoading(true);
    let folder = await fileClien.readFolder(urlCarptetaRuta);
    let folderDesc = await fileClien.readFile(urlCarptetaRuta + "description");
    let images = await loadFile(urlCarptetaRuta, "photo/img");
    let videos = await loadFile(urlCarptetaRuta, "video/vid");
    
    await showRoute(urlCarptetaRuta);

    setSelected({
        name: folder.name,
        description: folderDesc,
        images: images,
        videos: videos,
        url: urlCarptetaRuta
    });
    setLoading(false);
    
}
async function editRoute(selected, description, images, videos) {
    if (description != "" || images.length != 0 || videos.length != 0) {

        if (description != "") {
            await fileClien.createFile(urlfol + "/" + selected.name + "/" + "description", description, "text/plain");
        }

        for (var k = 0; images.length != 0 && k < images.length; k++) {
            await fileClien.createFile(urlfol + "/" + selected.name + "/" + "photo" + "/img" + (k + 1 + selected.images.length), images[k], "img");
        }

        for (var k = 0; videos.length != 0 && k < videos.length; k++) {
            await fileClien.createFile(urlfol + "/" + selected.name + "/" + "video" + "/vid" + (k + 1 + selected.videos.length), videos[k], "video");
        }
        document.getElementById("photo2").value = [];
        document.getElementById("video2").value = [];
        document.getElementById("description2").value = "";
        alert("Route edited!!!");
        window.location.reload();
    }
    else {
        alert("All the fields are empty!!!");
    }
}
async function deleteRoute(selected,setLoading) {
    if (fileClien.itemExists(selected.url)) {
        setLoading(true);
        alert("Route will be deleted, please wait a few seconds");        
        await fileClien.deleteFolder(selected.url);
    }
    else {
        alert("Route can`t be deleted");
    }
    setLoading(false);
    window.location.reload();
}

async function loadRoutes(url, setFolders) {

    let folder = await fileClien.readFolder(url);
    setFolders(folder.folders);
    urlfol = url;
}

const LoadRoute = () => {

    const [folders, setFolders] = useState([]);
    const [selected, setSelected] = useState({
        name: "",
        description: "",
        images: [],
        videos: []
    });
    const [description, setDescription] = useState("");
    const [image, setImage] = useState([]);
    const [video, setVideo] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const onClick = () => showResults ? setShowResults(false) : setShowResults(true);    
    const [loading, setLoading] = useState(false);

    var user = useWebId();

    useEffect(() => {
        if (user != undefined) {
            const url = user.split("profile/card#me")[0] + "/private/routes3a";
            loadRoutes(url, setFolders);
        }
    }, [user]);

    images = [];
    videos = [];
    selected.images.map((image) => (
        images.push(image)
    ));
    selected.videos.map((video) => (
        videos.push(video)
    ));
    return (
        <div>
        <Loading loading={loading}/>
        <DocumentTitle title="My Routes">
        
            <div class="container">
                <h2 id="rutas" class="h2" data-testid="label">Routes list</h2>
                <div className="chooseRoute" data-testid="chooseRoute">Choose a route to see in detail:</div>
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
                <div class="card bg-info text-white" data-testid="card">
                    <div class="card-body">
                        <h4 class="card-title" id="routeName">{selected.name.split("%20").join(" ")}</h4>
                        <p class="card-Description" id="routeDescription">{selected.description}</p>
                        <div className="bodyMedia">
                            <Slider images={images} videos={videos} />
                        </div>
                        <br></br>
                        {showResults ?
                            <center>
                                <div>
                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1" className="labels" data-testid="desc">Description:</label>
                                        <textarea class="form-control" id="description2" data-testid="inputDesc" name="description2" rows="3" onChange={(e) => setDescription(e.target.value)}></textarea>
                                    </div>

                                    <div class="form-group">
                                        <label class="exampleInputPhoto" for="photo2" className="labels" data-testid="img">Images:</label><br></br>
                                        <input value={null} type="file" id="photo2" name="image2" data-testid="inputImg" accept="image/*" multiple="true" onChange={(e) => setImage(e.target.files)} />
                                    </div>
                                    <div class="form-group">
                                        <label class="exampleInputVideo" for="video2" className="labels" data-testid="vid">Videos:</label><br></br>
                                        <input value={null} type="file" id="video2" name="video2" accept="video/*" data-testid="inputVid" multiple="true" onChange={(e) => setVideo(e.target.files)} />
                                    </div>
                                    <button className="btn btn-light" id="botonCam" onClick={() => editRoute(selected, description, image, video)}>Submit <SaveIcon /></button>
                                    <br />
                                </div></center> : null}
                        <br /><br />
                        <button className="btn btn-light" id="botonEdi" onClick={onClick}>Edit  <EditTwoToneIcon /></button>
                        <button className="btn btn-light" id="botonDel" onClick={() => deleteRoute(selected, setLoading)}>Delete <DeleteIcon /></button>
                    </div>
                </div>
            </div>
        </DocumentTitle>
        </div>
    );
};

export default LoadRoute;