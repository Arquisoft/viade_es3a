import React, { useState, useEffect } from "react";
import { List, useWebId, Value, Name, Link } from "@solid/react";
import "bootstrap/dist/css/bootstrap.css";
import "./ShareRoute.css";
import * as solidAuth from "solid-auth-client";
import fileClient from "solid-file-client";
import DocumentTitle from "react-document-title";

import * as algo from "../Map/Map";

import Slider from "../LoadRoute/Slider";
import { Loading } from "../../../Loading";

const auth = require("solid-auth-client");

const fileClien = new fileClient(solidAuth, { enableLogging: true });
var urlRutas = [];
var cont = 0;
var images = [];
var videos = [];
var rut = "";

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
    rut=route;
    return result;
}

export async function showRoute(urlCarptetaRuta) {

    let folder = await fileClien.readFolder(urlCarptetaRuta);

    document.getElementById("routeName").innerHTML = (folder.name).split("%20").join(" ");
    let ruta = await fileClien.readFile(urlCarptetaRuta + folder.name + ".geojson");

    algo.updateMap(ruta, folder.name);

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
        videos: videos,
        url: folder.url
    });
}

async function share(setLoading){
    var fri = false;
    if(rut != ""){
            setLoading(true);
            for(var i=0; i<cont;i++){
                let a = document.getElementById("ck"+i);
                if(a.checked==true) {
                    fri = true;
                    await enseñaAmigos(a.getAttribute("url"),a.getAttribute("nombre"),a.getAttribute("name"))
                }
            }
            setLoading(false);
            if(fri){
                alert("Your route has been shared!");
            }
            else {
                alert("You have to select at least a friend!");
            }
    }
    else {
        alert("You have to select a route!");
    }
}

async function enseñaAmigos(source, target, name) {

    const target2 = target.split("[")[1];
    const urlTarget = target2.split("profile/card#me")[0] + "/inbox/routes3a";
    const urlTargetNotifications = target2.split("profile/card#me")[0] + "/inbox/notifications";

    let acl = await fileClien.readFile(source + "/.acl");

    let content = "";

    let userToAcl = target2.split("]")[0];

    if (!(acl + "").includes(userToAcl.substring(0, userToAcl.length - 2))) {
        if (!(acl + "").includes("c0")) {
            content = "@prefix : <#>.\n" +
                "@prefix n0: <http://www.w3.org/ns/auth/acl#>.\n" +
                "@prefix M: <./>.\n" +
                "@prefix c: </profile/card#>.\n" +
                "@prefix c0: <" + userToAcl.substring(0, userToAcl.length - 2) + ">.\n" +
                ":ControlReadWrite\n" +
                "a n0:Authorization;\n" +
                "n0:accessTo M:;\n" +
                "n0:agent c:me;\n" +
                "n0:default M:;\n" +
                "n0:mode n0:Control, n0:Read, n0:Write.\n" +
                ":Read a n0:Authorization; \n" +
                "n0:accessTo M:; \n" +
                "n0:agent c0:me;\n" +
                "n0:default M:; \n" +
                "n0:mode n0:Read."
            await fileClien.createFile(source + "/.acl", content, "text/turtle");
        }
        else {

            var conta = 1;
            let nuevo = "";
            let nuevo2 = "";
            while ((acl + "").includes("c" + conta)) {
                conta++;
            }
            nuevo = acl.split(":ControlR")[0] + "@prefix c" + conta + ": <" + userToAcl.substring(0, userToAcl.length - 2) + ">.\n" + ":ControlR" + acl.split(":ControlR")[1];
            nuevo2 = nuevo.split("c0:me")[0] + "c0:me, c" + conta + ":me" + nuevo.split("c0:me")[1];
            await fileClien.createFile(source + "/.acl", nuevo2, "text/turtle");

        }

        await fileClien.postFile(urlTarget + "/" + name + "->" + ((await auth.currentSession()).webId).split("https://")[1].split(".")[0], source, "text/plain");

        await fileClien.postFile(urlTargetNotifications + '/' + name, '', 'text/plain');

        alert("Your route has been shared!");
    }
    else {
        //alert("Your route was already shared with this person!");
    }
}

const LoadRoute = () => {

    const [folders, setFolders] = useState([]);
    const [selected, setSelected] = useState({
        name: "",
        description: "",
        images: [],
        videos: [],
        url: ""
    });

    const [loading, setLoading] = useState(false);

    var user = useWebId();
    const webId = useWebId();
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
    useEffect(() => {
        if (user != undefined) {
            const url = user.split("profile/card#me")[0] + "/private/routes3a";
            //listRoutes(url);
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
    cont = 0;
    return (
        <React.Fragment>
        <Loading loading={loading}/>
        <DocumentTitle title="Share routes">
            <div class="container">
                <h2 data-testid="label" id="rutas" class="h2">Share a route with your friends:</h2>

                <ul>
                    {
                        folders.map((folder, i) => {
                            var urlArchivo = "" + folder.url;
                            var arrayUrl = urlArchivo.split("/");
                            urlRutas.push(urlArchivo);
                            var nombre = arrayUrl[arrayUrl.length - 2].split("%20").join(" ");
                            return (
                                <li key={"folder_" + i}>
                                    <a href="#" class={"lista"} onClick={() => loadRoute(urlArchivo, setSelected)}>
                                        {nombre}
                                    </a>
                                </li>);
                        })
                    }
                </ul>
                <div data-testid="card" class="card bg-info text-white">
                    <div class="card-body">
                        <h4 class="card-title" id="routeName">{selected.name.split("%20").join(" ")}</h4>
                        <p class="card-Description" id="routeDescription">{selected.description}</p>
                        <div className="bodyMedia">
                            <Slider images={images} videos={videos} />
                        </div>
                        <br></br>
                        <p className="prueba">
                            <h3 className="toShare">Do you want to share it? </h3>
                            <List src={`[${user}].friends`} className="list">{(friend) =>
                                <li key={friend} className="listElement">
                                    <OneFriend nombre={`[${friend}]`} url={selected.url} name={selected.name}></OneFriend>
                                </li>}
                            </List>
                        </p>

                        </div>
                <button className="btn btn-light" id="botonin" onClick={() => share(setLoading)}>Share</button>
            </div>  
        </div>
        </DocumentTitle>
        </React.Fragment>
    );
};

const OneFriend = (props) => {
    return (
        <div class="divAmigoShare">
            <div className="friendameDiv">
                <h5 id="friendName">
                <Link href={props.nombre} className="linkNameFriend" title="Go to SOLID profile">
                    <Name src={props.nombre}>{props.nombre}</Name>
                </Link>    
                </h5>
            </div>
            <div className="checkBoxShareDiv">
                <label className="custom-radio-checkbox">
                    {/* Input oculto */}
                    <input className="custom-radio-checkbox__input" type="checkbox" id={"ck" + (cont++)} url={props.url} nombre={props.nombre} name={props.name} />
                    {/* Imagen en sustitucion */}
                    <span className="custom-radio-checkbox__show custom-radio-checkbox__show--checkbox"></span>
                </label>
            </div>
        </div>
    );
};

export default LoadRoute;

