
import { useWebId, Value, Name, Link } from "@solid/react";
import "./Notifications.css";
import "bootstrap/dist/css/bootstrap.css";
import DocumentTitle from "react-document-title";
import fileClient from "solid-file-client";
import React, { useState, useEffect } from "react";
import * as solidAuth from "solid-auth-client";
const fileClien = new fileClient(solidAuth, { enableLogging: true });



const Card = (props) => {
    return (
        <div class="card bg-info text-white" >
            <div class="card-body">
                <h4 class="card-title" id="notification">
                    <Name src={props.nombre}>{props.nombre}</Name>
                </h4>
                <center>
                    <Link href={props.nombre} className="btn btn-light" data-testId="link">Notifications</Link>
                </center>
            </div>
        </div>
    );
    
};const Notifications = () => {
    const webId = useWebId();
    
    const [notifications, setNotifications] = React.useState([]);

    useEffect(() => {
        if (webId != undefined) {
            const url = webId.split("profile/card#me")[0] + "/inbox/notifications";
            //listRoutes(url);
            loadNotifications(url, setNotifications);
        }
    }, [webId]);
    return (
        <DocumentTitle title="Notifications">
        <div>
            <h2 className="h2" data-testId="label">Your notifications, <Value src="user.name"/> </h2>
            <ul className="list" padding-inline-start="0">
                {
                    notifications.map((notification, i) => (
                        <li key={`notification_${i}`} className="listElement">
                        <p>
                            <Card nombre={`[${notification}]`}></Card>
                        </p>
                    </li>
                    ))
                }
            </ul>
        </div>
        </DocumentTitle>
    );
};

async function loadNotifications(url, setNotifications) {
    let folder = await fileClien.readFolder(url);
    let notifications = folder.folders.map((folder, i) => {
        var urlArchivo = "" + folder.url;
        var arrayUrl = urlArchivo.split("/");
        var nombre = arrayUrl[arrayUrl.length - 2].split("%20").join(" ");
        return 'It has been shared with you the route ' + nombre;
    });
    setNotifications(notifications);
}

export default Notifications;
