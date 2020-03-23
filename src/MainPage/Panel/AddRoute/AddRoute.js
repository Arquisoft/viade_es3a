import React, { Fragment, useState } from 'react';
import './AddRoute.css';
import { useWebId } from '@solid/react';
import {

    Uploader,
    ProfileUploader
} from '@inrupt/solid-react-components';

import * as solidAuth from 'solid-auth-client';
import fileClient from 'solid-file-client';

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
                <input type="file" class="custom-file-input" id="inputFile"
                    aria-describedby="inputGroupFileAddon01" onChange={changeName} multiple/>
                <label class="custom-file-label" for="inputGroupFile01">{filename}</label>
            </div>
        </div>
    );
};
const Data = () => {
    var user=""+useWebId();
 
    const url=user.split("profile/card#me")[0]+"private/routes3a";
    return (
        <div>
        
            <Upload/>
            <div class="form-group">
                <label for="exampleFormControlInput1">Name:</label>
                <input type="text" class="form-control" id="name" placeholder="Route's name" required/>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Description:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" ></textarea>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-2" for="foto">Imagen:</label>
                <input type="file" id="foto" accept=".png"/>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-2" for="video">Vídeo:</label>
                <input type="file" id="video" accept=".mp4"/>
            </div>
            <button onClick={()=> createFolder(url)}  class="btn btn-info">Add route</button>
         
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
    console.log(folder);
    var existe = await fileClien.itemExists(folder);
    
    if (!existe)
         await fileClien.createFolder(folder);
    console.log(existe)
 
    var nameValue = document.getElementById("name").value;
    var destination= folder+"/"+nameValue+"/";
    await fileClien.createFolder(destination); 
    var x = document.getElementById("inputFile");
    
        var file = x.files[0];
        console.log(file.name)
        console.log(file.size)
        const fileURl = destination + file.name
        await fileClien.putFile(fileURl, file, file.type)
  }
 
export default AddRoute;

