import React from 'react';
import { useWebId } from '@solid/react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Button } from 'react-bootstrap';

import * as solidAuth from 'solid-auth-client';
import fileClient from 'solid-file-client';

const fileClien = new fileClient(solidAuth, { enableLogging: true });
var urlRutas=[];
const LoadRoute = () => {
    var user=""+useWebId();
    const url=user.split("profile/card#me")[0]+"/private/routes3a";
    listRoutes(url);
        return (
            <div  class="container">
                <h2 id="rutas" class="h2">Routes list:</h2>

                {/* Por cada ruta */}
                <div class="card bg-info text-white">
                    <div class="card-body">
                        <h4 class="card-title" id="routeName">Route name</h4>
                        <p class="card-Description" id ="routeDescription">Route description</p>
                        <p className="card-Image" id="routeImage">Route image</p>
                        <div id="ImgDiv"><div id="images"></div></div><br></br>
                        <p className="card-Video" id="routeVideo">Route video</p>
                        <div id="VidDiv"><div id="videos"></div></div><br></br>
                        <center>
                            <button type="button" class="btn btn-light">Load</button>
                        </center>
                        
                    </div>
                </div> 
            </div>
           
        );
}


export async function listRoutes(url) {
    
    let folder = await fileClien.readFolder(url);
    var ul = document.createElement("ul");
    var li, a, text;
    if (folder) {

        for (var i = 0; i < folder.folders.length; i++) {
            
            
                li = document.createElement('li');
                a  = document.createElement('a');
                var urlArchivo= ""+folder.folders[i].url;
                var arrayUrl=urlArchivo.split('/');
                urlRutas.push(urlArchivo);
                var nombre=arrayUrl[arrayUrl.length-2]
                text = document.createTextNode(nombre);
                (function(index){
                    a.onclick = function(){
                          showRoute(index)
                    }    
                })(i);
                a.appendChild(text);
                li.appendChild(a);
                ul.appendChild(li);
               
              
              document.querySelector("#rutas").appendChild(ul);
        };
        for (var i = 0; i < urlRutas.length; i++) {
            console.log(urlRutas[i]);
        }
    }
   
}
export async function showRoute(index) {
    var result = ["images","videos"];
    reloadRoute(result)
    
    var urlCarptetaRuta=urlRutas[index];
    let folder = await fileClien.readFolder(urlCarptetaRuta);
    let folderDesc = await fileClien.readFile(urlCarptetaRuta + "description");
    document.getElementById("routeName").innerHTML = folder.name;
    document.getElementById("routeDescription").innerHTML = folderDesc;
    loadTypeFile(urlCarptetaRuta,"img","photo/img","images");
    loadTypeFile(urlCarptetaRuta,"video","video/vid","videos");
}

export async function reloadRoute(result){
    var d;
    for(d=0;d<result.length;d++){
        reloadRouteFiles(result[d]);
    }
}

export async function reloadRouteFiles(typeFile){
    let hijo = document.getElementById(typeFile);
    let padre = hijo.parentNode;
    padre.removeChild(hijo);
    let cosa=document.createElement('div');
    cosa.id=typeFile;
    padre.appendChild(cosa);
}

export async function loadTypeFile(urlCarptetaRuta, typeFile, route, folder){
    var k;
    for(k=0; k<1000; k++){
        try{
            await fileClien.readFile(urlCarptetaRuta + route + (k+1));
            let atag=document.createElement(typeFile);
            atag.src=urlCarptetaRuta + route + (k+1);
            atag.id=typeFile + (k+1);
            document.getElementById(folder).appendChild(document.createElement("br"));
            document.getElementById(folder).appendChild(atag);
            document.getElementById(folder).appendChild(document.createElement("br"));
        }catch{
            k=1000;
        }
    }
}

export default LoadRoute;

