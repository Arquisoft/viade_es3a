
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
        result.push(folder.files[i].url);
    }
    for(var i=0;i<folder.files.length;i+=1){
        await fileClien.deleteFile(folder.files[i].url);
        //console.log(folder.files[i].url);
    }
setFolders(result);
}

const Notifications = () => {

    const [folders, setFolders] = useState([]);
    const [show, setShow] = useState(true);
    var user=useWebId();

    useEffect(() => {
        if ( user != undefined) {
            const url=user.split("profile/card#me")[0]+"inbox/routes3a/notifications";
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
                        var arrayUrl = folder.split("/")[folder.split("/").length - 1];
                        var userShare = arrayUrl.split(".")[0];
                        var nombre = userShare.split("-%3E")[0].split("%20").join(" ");
                        var who = userShare.split("-%3E")[1];
                        return(<Toast>
                            <Toast.Header closeButton={false}>
                              <strong class="mr-auto text-info">{who}</strong>
                              <small></small>
                            </Toast.Header>
                        <Toast.Body>{who} has shared the route {nombre} with you.</Toast.Body>
                          </Toast>);
                    })
                }
            </ul>
        </div>
        </DocumentTitle>
        );
};

export default Notifications;
