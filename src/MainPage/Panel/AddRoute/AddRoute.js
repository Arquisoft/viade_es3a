import React, { Fragment, useState } from 'react';
import './AddRoute.css';
import { useWebId } from '@solid/react';
import {

    Uploader,
    ProfileUploader
} from '@inrupt/solid-react-components';

import * as solidAuth from 'solid-auth-client';
import fileClient from 'solid-file-client';
import { Redirect} from 'react-router-dom';


const fileClien = new fileClient(solidAuth, { enableLogging: true });

const Upload = () => {
    const [file, setFile] = useState('');
    const [filename, setFileName] = useState('Choose File');

    const changeName = e => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    }

    return (
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
            </div>
            <div class="custom-file">
                <input type="file" class="custom-file-input" id="route"
                    aria-describedby="inputGroupFileAddon01" onChange={changeName} required/>
                <label class="custom-file-label" for="inputGroupFile01"id="labelRoute">{filename}</label>
            </div>
        </div>
    );
};
const Data = () => {
    var user=""+useWebId();
 
    const url=user.split("profile/card#me")[0]+"/private/routes3a";
    console.log(url);
    return (
        <div>
        
            <Upload/>
            <div class="form-group">
                <label for="exampleFormControlInput1">Name:</label>
                <input type="text" class="form-control" id="name" placeholder="Route's name" required/>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Description:</label>
                <textarea class="form-control" id="description" name="description" rows="3" ></textarea>
            </div>
            <div class="form-group">
                <label class="exampleInputPhoto" for="photo">Imagen:</label><br></br>
                <input type="file" id="photo" name="image" accept=".png" multiple="true"/>
            </div>
            <div class="form-group">
                <label class="exampleInputVideo" for="video">Vídeo:</label><br></br>
                <input type="file" id="video" name="video" accept=".mp4" multiple="true"/>
            </div>
            <button onClick={()=> createFolder(url)}  class="btn btn-info" >Add route
            </button>
            
            
         
         </div>
    );
};

const AddRoute = () => {
   
   
    return (
        <Fragment>
            <h2>Add route</h2>
            <Data />
        </Fragment>
    );

};



const createFolder = async (folder) => {
    if(document.getElementById("name").value===""||document.getElementById("route").files[0]==null){
        alert("Name or route is empty!");
    }
    else{
    var existe = await fileClien.itemExists(folder);
    if (!existe)
        await fileClien.createFolder(folder);
    var fileList = [];
    var nameValue = document.getElementById("name").value;
    var destination = folder + "/" + nameValue + "/";
    existe = await fileClien.itemExists(destination);
    if (!existe) {
        var k=0;
        await fileClien.createFolder(destination);
        fileList.push(document.getElementById("route").files[0]);
        await fileClien.createFile(destination + "/"+ "description", document.getElementById("description").value, "text/plain");
        for(k=0; k<document.getElementById("photo").files.length; k++){
            await fileClien.createFile(destination + "/"+ "photo" + "/img" + (k+1), document.getElementById("photo").files[k], "img");
        }
        for(k=0; k<document.getElementById("video").files.length; k++){
            await fileClien.createFile(destination + "/"+ "video"+ "/vid" + (k+1), document.getElementById("video").files[k], "video");
        }

        for (var i = 0; i < fileList.length; i++) {
            var file = fileList[i];
            const fileURl = destination + "/" + nameValue + ".geojson";
            fileClien.putFile(fileURl, file, file.type);
        }
        alert("Your route has been added to the pod!!");
        //clean all fields
        document.getElementById("name").value="";
        document.getElementById("description").value="";
        document.getElementById("route").value=null;
        document.getElementById("labelRoute").value=null;
    }
    else
        alert("Route title already used, use another title");
}

}

export default AddRoute;

