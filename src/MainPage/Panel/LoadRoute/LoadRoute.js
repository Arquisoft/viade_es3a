import React from 'react';
import './LoadRoute.css';
import { useWebId } from '@solid/react';

import * as solidAuth from 'solid-auth-client';
import fileClient from 'solid-file-client';

const fileClien = new fileClient(solidAuth, { enableLogging: true });
var urlRutas=[];
const LoadRoute = () => {
    var user=""+useWebId();
    
    const url=user.split("profile/card#me")[0]+"private/routes3";
    listRoutes(url);
        return (
            <h3 id="rutas">Routes list:</h3>
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
                        
                          enseñaRuta(index)
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
export async function enseñaRuta(index) {
    var urlCarptetaRuta=urlRutas[index];
    console.log(urlRutas[index]);
    let folder = await fileClien.readFolder(urlCarptetaRuta);
    console.log(folder);
   
}

export default LoadRoute;

