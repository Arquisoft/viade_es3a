import React, { Fragment, useState, useEffect, useRef } from 'react';
import './AddRoute.css';
import { useWebId } from '@solid/react';
import {

    Uploader,
    ProfileUploader
} from '@inrupt/solid-react-components';

import * as solidAuth from 'solid-auth-client';
import fileClient from 'solid-file-client';
import { Redirect } from 'react-router-dom';
import DocumentTitle from "react-document-title";


const fileClien = new fileClient(solidAuth, { enableLogging: true });

const Upload = ({setFile, file}) => {
    const filename = file == null ? 'Choose File' : file.name;

    const changeName = e => {
        setFile(e.target.files[0]);
    }
    //para acceder a componentes del dum desde react
    //const refFile = useRef();


    return (
        <div class="input-group">
            <div class="input-group-prepend">
                <label for="exampleRoute" class="labelRoute">Route (.geojson):</label><br></br>
                <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
            </div>
            <div class="custom-file">
                <input value={null} type="file" class="custom-file-input" id="route" accept=".geojson"
                    aria-describedby="inputGroupFileAddon01" onChange={changeName} required/>
                <label class="custom-file-label" for="inputGroupFile01"id="labelRoute">{filename}</label>

            </div>
        </div>
    );
};
const Data = () => {
    var user=""+useWebId();
    //it saves the actual state of the data
    const [file, setFile] = useState(null);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);

    const url=user.split("profile/card#me")[0]+"/private/routes3a";
    console.log(url);
    return (
        <div>
            <br></br>
            <Upload setFile={setFile} file={file}/>
            <br></br>

            <div class="form-group">
                <label for="exampleFormControlInput1" class="labelName">Name:</label>
                <input type="text" class="form-control" id="name" placeholder="Route's name" required value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1" class="labelDescription">Description:</label>
                <textarea class="form-control" id="description" name="description" rows="3" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>

            <div class="form-group">
                <label class="exampleInputPhoto" for="photo" class="labelPhoto">Images:</label><br></br>
                <input value={null} type="file" id="photo" name="image" accept="image/*" multiple="true" onChange={(e) => setImage(e.target.files)}/>
            </div>
            <div class="form-group">
                <label class="exampleInputVideo" for="video" class="labelVideo">Video:</label><br></br>
                <input value={null} type="file" id="video" name="video" accept="video/*" multiple="true" onChange={(e) => setVideo(e.target.files)}/>
            </div>
            <br></br>
            <center>
                <button onClick={()=> createFolder(url, file, name, description, image, video, setFile, setName, setDescription, setImage, setVideo)}  class="btn btn-info" >Add route
                </button>
            </center>
          
            
         </div>

    );
};

const AddRoute = () => {

    return (

        <DocumentTitle title='Add route'>
            <Fragment>
                <h2>Add route</h2>
                <Data />
            </Fragment>
        </DocumentTitle>

    );

};



const createFolder = async (folder, route, name, description, photo, video,setFile, setName, setDescription, setImage, setVideo) => {
    if (name===""||route==null){
        alert("Name or route is empty!");
    }
    else{
    var existe = await fileClien.itemExists(folder);

    if (!existe)
        await fileClien.createFolder(folder);
    var fileList = [];
    var nameValue = name;
    var destination = folder + "/" + nameValue + "/";
    existe = await fileClien.itemExists(destination);
    if (!existe) {
        var k=0;
        await fileClien.createFolder(destination);
        fileList.push(route);
        await fileClien.createFile(destination + "/"+ "description", description, "text/plain");
        for(k=0; photo != null && k<photo.length; k++){
            await fileClien.createFile(destination + "/"+ "photo" + "/img" + (k+1), photo[k], "img");
        }
        for(k=0; video != null && k<video.length; k++){
            await fileClien.createFile(destination + "/"+ "video"+ "/vid" + (k+1), video[k], "video");
        }

        for (var i = 0; i < fileList.length; i++) {
            var file = fileList[i];
            const fileURl = destination + "/" + nameValue + ".geojson";
            fileClien.putFile(fileURl, file, file.type);
        }
        alert("Your route has been added to the pod!!");
        //clean all fields
        setName('');
        setDescription('');
        setFile(null);
        setImage(null);
        setVideo(null);  
        
        document.getElementById('photo').value=null;
        document.getElementById('video').value=null;
        document.getElementById('route').value=null;
    }
    else
        alert("Route title already used, use another title");
}

}


export default AddRoute;
