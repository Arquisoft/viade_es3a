import React from "react";
import { useWebId, List, Value, Name, Link } from "@solid/react";
import "./Friends.css";
import { Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import DocumentTitle from "react-document-title";

const Card = (props) => {
    return (
        <div class="card bg-info text-white" >
            <div class="card-body">
                <h4 class="card-title" id="friendName">
                    <Name src={props.nombre}>{props.nombre}</Name>
                </h4>
                <center>
                    <div className="botones">
                        <Link href={props.nombre} className="btn btn-light" data-testId="link">Profile</Link>
                        <div className="hola">separ</div>
                        <Link href={props.nombre} className="btn btn-light" data-testId="link">Delete</Link>
                    </div>
                </center>
            </div>
        </div>
    );
};

const Friends = () => {
    const webId = useWebId();
    return (
        <DocumentTitle title="Friends">
            <div>
                <h2 className="h2" data-testId="label">Your friends, <Value src="user.name" /> </h2>
            
                <div class="card bg-info text-white" >
                    <div class="card-body">
                        <h4 class="card-title" id="friendName">
                            Agregar amigos
                        </h4>
                        <center>
                            <div class="form-group">
                                <Form.Control type="text" placeholder="https://uo264033.solid.community/profile/card#me" />
                                <div className="right">
                                    <IconButton aria-label="search"> Search
                                        <SearchIcon fontSize="large" />
                                    </IconButton>
                                </div>
                            </div>
                        </center>
                    </div>
                </div>

                <br></br>
                <List src={`[${webId}].friends`} className="list" padding-inline-start="0">{(friend) =>
                    <li key={friend} className="listElement">
                        <p>
                            <Card nombre={`[${friend}]`}></Card>
                        </p>
                    </li>}
                </List>
            </div>
        </DocumentTitle>
    );
};

export default Friends;