import React from "react";
import { useWebId, List, Value, Name, Link } from "@solid/react";
import "./Notifications.css";
import "bootstrap/dist/css/bootstrap.css";
import DocumentTitle from "react-document-title";



const Card = (props) => {
    return (
        <div class="card bg-info text-white" >
            <div class="card-body">
                <h4 class="card-title" id="friendName">
                    <Name src={props.nombre}>{props.nombre}</Name>
                </h4>
                <center>
                    <Link href={props.nombre} className="btn btn-light" data-testId="link">Profile</Link>
                </center>
            </div>
        </div>
    );
};