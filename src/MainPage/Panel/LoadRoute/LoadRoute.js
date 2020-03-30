import React from 'react';
import './LoadRoute.css';
import { useWebId } from '@solid/react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Button } from 'react-bootstrap';

import * as solidAuth from 'solid-auth-client';
import fileClient from 'solid-file-client';

const fileClien = new fileClient(solidAuth, { enableLogging: true });
var urlRutas=[];
const LoadRoute = () => {
    var user=""+useWebId();
    
    const url=user.split("profile/card#me")[0]+"private/routes3a";
    listRoutes(url);
        return (
            <div  class="container">
                <h3 id="rutas">Routes list:</h3>

                {/* Por cada ruta */}
                <div class="card bg-info text-white">
                    <div class="card-body">
                        <h4 class="card-title" id="routeName">Route name</h4>
                        <p class="card-text">Route details</p>
                        <img class="card-img-top" src="img_.png" alt="Route image"></img>
                        <br></br>
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
    console.log(index);
    var urlCarptetaRuta=urlRutas[index];
    console.log(urlRutas[index]);
    let folder = await fileClien.readFolder(urlCarptetaRuta);
    
    let urlRoute = urlCarptetaRuta.concat(index+".geojson");
        fetch(urlRoute)
          .then(function (response) {
            return response.json();
          })
          .then(function (myFile) {
             return myFile;
          });


    console.log(folder);
    document.getElementById("routeName").innerHTML = folder.name;
    
   
}

export default LoadRoute;

