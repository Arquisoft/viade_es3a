
import { useWebId, Value, Name, Link } from "@solid/react";
import "./Notifications.css";
import "bootstrap/dist/css/bootstrap.css";
import DocumentTitle from "react-document-title";
import fileClient from "solid-file-client";
import React, { useState, useEffect } from "react";
import * as solidAuth from "solid-auth-client";
import { Toast } from "react-bootstrap";
const fileClien = new fileClient(solidAuth, { enableLogging: true });

async function loadRoutes(url, setFolders) {

    let folder = await fileClien.readFolder(url);
    var result=[];

    for(var i=0;i<folder.files.length;i+=1){
        try{
        let f=await fileClien.readFile(folder.files[i].url);
        
        let otro= await fileClien.readFolder(f);
        result.push(otro);
        }
        catch(error){
            await fileClien.deleteFile(folder.files[i].url);
        }
        // setFolders(result)
    }

setFolders(result);
}

const Notifications = () => {

    const [folders, setFolders] = useState([]);
    const [show, setShow] = useState(true);
    var user=useWebId();

    useEffect(() => {
        if ( user != undefined) {
            const url=user.split("profile/card#me")[0]+"inbox/routes3a";
            loadRoutes(url, setFolders);
        }
    }, [user]);
        return (
            
        <DocumentTitle title="Notifications">
        <div class="container">
        <h2 className="h2" data-testId="welcome">Your notifications, <Value src="user.name"/> </h2>
            
            <ul className="list" padding-inline-start="0">
                {
                    folders.map((folder, i) => {
                        var urlArchivo = "" + folder.url;
                        var arrayUrl = urlArchivo.split("/");
                        console.log(arrayUrl);
                        var userShare = arrayUrl[2].split(".")[0];
                        var nombre = arrayUrl[arrayUrl.length - 2].split("%20").join(" ");
                        return(<Toast>
                            <Toast.Header closeButton={false}>
                              <strong class="mr-auto text-info">{userShare}</strong>
                              <small></small>
                            </Toast.Header>
                            <Toast.Body>The route {nombre} has been shared with you.</Toast.Body>
                          </Toast>);
                    })
                }
            </ul>
        </div>
        </DocumentTitle>
        );
};

export default Notifications;
