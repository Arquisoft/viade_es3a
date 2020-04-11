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
const auth = require('solid-auth-client')

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
                <label for="exampleRoute" class="labelRoute" data-testid="route">Route (.geojson):</label><br></br>
                <span class="input-group-text" id="inputGroupFileAddon01" data-testid="upload">Upload</span>
            </div>
            <div class="custom-file">
                <input value={null} type="file" class="custom-file-input" id="route" accept=".geojson"
                    aria-describedby="inputGroupFileAddon01" onChange={changeName} required data-testid="inputGeo"/>
                <label class="custom-file-label" for="inputGroupFile01"id="labelRoute" data-testid="labelRoute">{filename}</label>

            </div>
        </div>
    );
};
const Data = () => {
    var user=""+useWebId();
    //it saves the actual state of the data
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

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
                <label for="exampleFormControlInput1" class="labelName" data-testid="name">Name:</label>
                <input type="text" class="form-control" id="name" data-testid="inputName" placeholder="Route's name" required value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1" class="labelDescription" data-testid="desc">Description:</label>
                <textarea class="form-control" id="description" data-testid="inputDesc" name="description" rows="3" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>

            <div class="form-group">
                <label class="exampleInputPhoto" for="photo" class="labelPhoto" data-testid="img">Images:</label><br></br>
                <input value={null} type="file" id="photo" name="image" data-testid="inputImg" accept=".png" multiple="true" onChange={(e) => setImage(e.target.files)}/>
            </div>
            <div class="form-group">
                <label class="exampleInputVideo" for="video" class="labelVideo" data-testid="vid">Video:</label><br></br>
                <input value={null} type="file" id="video" name="video" accept=".mp4" data-testid="inputVid" multiple="true" onChange={(e) => setVideo(e.target.files)}/>
            </div>
            <br></br>
            {
                error &&
                    <div data-testid="msjerror" class="alert alert-danger" role="alert">
                        {error}
                    </div>
            }
            <center>
                <button data-testid="btnenviar" onClick={()=> createFolder(url, file, name, description, image, video, setFile, setName, setDescription, setImage, setVideo, setError)}  class="btn btn-info" >Add route
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



const createFolder = async (folder, route, name, description, photo, video,setFile, setName, setDescription, setImage, setVideo, setError) => {
    
    if (name===""||route==null){
        setError("Name or route is empty!");
    }
    else{
        setError(null);
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
        var user=await auth.currentSession()
        console.log(user.webId)
        let content = "# ACL resource for the private folder\n"+
      "@prefix acl: <http://www.w3.org/ns/auth/acl#>.\n"+
      "\n"+
      "# The owner has all permissions\n"+
      "<#owner>\n"+
          "a acl:Authorization;\n"+
          "acl:agent <"+ user.webId +">;\n"+
          "acl:accessTo <./>;\n"+
          "acl:defaultForNew <./>;\n"+
          "acl:mode acl:Read, acl:Write, acl:Control."

        await fileClien.createFile(destination+"/.acl", content,"text/turtle")

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