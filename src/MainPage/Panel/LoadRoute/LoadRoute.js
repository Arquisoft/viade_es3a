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
                <h3 id="rutas">Routes list:</h3>

                {/* Por cada ruta */}
                <div class="card bg-info text-white">
                    <div class="card-body">
                        <h4 class="card-title" id="routeName">Route name</h4>
                        <p class="card-Description" id ="routeDescription">Route description</p>
                        <p className="card-Image" id="routeImage">Route image</p>
                        <div id="images"></div><br></br>
                        <p className="card-Video" id="routeVideo">Route video</p>
                        <div id="videos"></div><br></br>
                        <button type="button" class="btn btn-light">Load</button>
                    </div>
                </div> 
            </div>
           
        );
}


export async function listRoutes(url) {
    
    let folder = await fileClien.readFolder(url);
    var ul = document.createElement("ul");
    var li, a, text;
    var result = [];
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
    var k;
    var urlCarptetaRuta=urlRutas[index];
    console.log(urlRutas[index]);
    let folder = await fileClien.readFolder(urlCarptetaRuta);
    console.log(folder);
    let folderDesc = await fileClien.readFile(urlCarptetaRuta + "description");
    console.log(folderDesc);
    let folderImg = await fileClien.readFile(urlCarptetaRuta + "photo");
    document.getElementById("routeName").innerHTML = folder.name;
    document.getElementById("routeDescription").innerHTML = folderDesc;
    for(k=0; k<1000; k++){
        try{
            await fileClien.readFile(urlCarptetaRuta + "photo/img" + (k+1));
            let atag=document.createElement('img');
            atag.src=urlCarptetaRuta + "photo/img" + (k+1);
            atag.id="img" + (k+1);
            document.getElementById("images").appendChild(atag);
        }catch{
            k=1000;
        }
    }
    for(k=0; k<1000; k++){
        try{
            await fileClien.readFile(urlCarptetaRuta + "video/vid" + (k+1));
            let atag=document.createElement('video');
            atag.src=urlCarptetaRuta + "video/vid" + (k+1);
            atag.id="vid" + (k+1);
            document.getElementById("videos").appendChild(atag);
        }catch{
            k=1000;
        }
    }
}

export default LoadRoute;

