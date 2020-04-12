import React, { useState, useEffect } from "react";
import { List, useWebId,Value, Name, Link  } from "@solid/react";
import "bootstrap/dist/css/bootstrap.css";
import "./ShareRoute.css";
import * as solidAuth from "solid-auth-client";
import fileClient from "solid-file-client";

import * as algo from "../Map/Map";

const SolidAclUtils = require("solid-acl-utils");
const auth = require("solid-auth-client");
const { AclApi, AclDoc, AclParser, AclRule, Permissions, Agents } = SolidAclUtils;
const { READ, WRITE, APPEND, CONTROL } = Permissions;

const fetch = auth.fetch.bind(auth);

const aclApi = new AclApi(fetch, { autoSave: true });


const fileClien = new fileClient(solidAuth, { enableLogging: true });
var urlRutas=[];
const LoadRoute = () => {

    const [folders, setFolders] = useState([]);
    const [selected, setSelected] = useState({
        name: "",
        description: "",
        images: [],
        videos: [],
        url: ""
    });

    console.log(selected);

    var user=useWebId();
    const webId = useWebId();
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
         coll[i].addEventListener("click", function() {
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
        if ( user != undefined) {
            const url=user.split("profile/card#me")[0]+"/private/routes3a";
            //listRoutes(url);
            loadRoutes(url, setFolders);
        }
    }, [user]);
    
        return (
            <div  class="container">
                <h2 data-testid="label" id="rutas" class="h2">Share a route with your friends:</h2>

                <ul>
                {
                    folders.map((folder,i) => {
                        var urlArchivo= ""+folder.url;
                        var arrayUrl=urlArchivo.split("/");
                        urlRutas.push(urlArchivo);
                        var nombre=arrayUrl[arrayUrl.length-2].split("%20").join(" ");
                        return (
                        <li key={"folder_"+i}>
                            <a href="#" class={"lista"} onClick={() => loadRoute(urlArchivo, setSelected)}>
                                {nombre}
                            </a>
                        </li>);
                    })
                }
                </ul>
                <div data-testid="card" class="card bg-info text-white">
                    <div class="card-body">
                        <h4 class="card-title" id="routeName">{selected.name}</h4>
                        <p class="card-Description" id ="routeDescription">{selected.description}</p>
                        <div className="card-Image" id="routeImage">
                            {
                                selected.images.map((image,i) => (
                                    <div key={"image_"+i}><img src={image} class={"imag"}/></div>
                                ))
                            }
                        </div>
                        <div id="ImgDiv"><div id="images"></div></div><br></br>
                        <div className="card-Video" id="routeVideo">
                        {
                                selected.videos.map((video,i) => (
                                    <div key={"video_"+i}><video src={video} class={"vid"} controls/></div>
                                ))
                            }
                        </div>
                        <div id="VidDiv"><div id="videos"></div></div><br></br>
                        <center>
                            <h2 className="h2">Share with a friend:  </h2>
                        <List  src={`[${user}].friends`} className="list" padding-inline-start="0">{(friend) =>
                            <li key={friend} className="listElement">
                            <p>
                                <Carda nombre={`[${friend}]`} url={selected.url} name={selected.name}></Carda>
                            </p>
                            </li>}
                    </List>

                    

  
                        </center>
                        
                    
                        
                        
                    </div>
                </div> 
            </div>
           
        );
};

async function loadRoutes(url, setFolders) {

    let folder = await fileClien.readFolder(url);
    setFolders(folder.folders);
}

async function loadRoute(urlCarptetaRuta, setSelected) {
    
    let folder = await fileClien.readFolder(urlCarptetaRuta);
    let folderDesc = await fileClien.readFile(urlCarptetaRuta + "description");
    let images = await loadFile(urlCarptetaRuta, "photo/img");
    let videos = await loadFile(urlCarptetaRuta, "video/vid");
    console.log(folder.url);
    await showRoute(urlCarptetaRuta);

    setSelected({
        name: folder.name,
        description: folderDesc,
        images: images,
        videos: videos,
        url: folder.url
    });

}

async function loadFile(urlCarptetaRuta, route){
    var k;
    var result = [];
    for(k=0; k<1000; k++){
        try{
            await fileClien.readFile(urlCarptetaRuta + route + (k+1));
            result.push(urlCarptetaRuta + route + (k+1));
        }catch{
            k=1000;
        }
    }
    return result;
}

export async function showRoute(urlCarptetaRuta) {
    
    let folder = await fileClien.readFolder(urlCarptetaRuta);

    
    document.getElementById("routeName").innerHTML = (folder.name).split("%20").join(" ");
    let ruta = await fileClien.readFile(urlCarptetaRuta+folder.name+".geojson");

    algo.updateMap(ruta, folder.name);
    
}
async function enseñaAmigos(source,target,name){
   
    const target2=target.split("[")[1];
    const urlTarget=target2.split("profile/card#me")[0]+"/inbox/routes3a";
    console.log(name);

    const aclApi = new AclApi(fetch, { autoSave: true });
    const acl = await aclApi.loadFromFileUrl(source);

    await acl.addRule(READ, target2.split("]")[0]);

    await fileClien.postFile(urlTarget + "/"+ name, source , "text/plain");
    
    alert("Your route has been shared!");
}
const Carda = (props) => {
    return (
        <div class="card bg-info text-white">
            <div class="card-body">
                <h4 class="card-title" id="friendName">
                    <Name src={props.nombre}>{props.nombre}</Name>
                </h4>
                    <button  className="btn btn-light" onClick={() => enseñaAmigos(props.url,props.nombre,props.name)}>Share</button>
            </div>
        </div>
    );
};

export default LoadRoute;

