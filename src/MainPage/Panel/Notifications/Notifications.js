import React from "react";
import { useWebId, List, Value, Name, Link } from "@solid/react";
import "./Notifications.css";
import "bootstrap/dist/css/bootstrap.css";
import DocumentTitle from "react-document-title";



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
    return (
        <DocumentTitle title="Notifications">
        <div>
            <h2 className="h2" data-testId="label">Your notifications, <Value src="user.name"/> </h2>
            <List src={`[${webId}].notifications`} className="list" padding-inline-start="0">{(notification) =>
                <li key={notification} className="listElement">
                    <p>
                        <Card nombre={`[${notification}]`}></Card>
                    </p>
                </li>}
            </List>
        </div>
        </DocumentTitle>
    );
};


export default Notifications;
