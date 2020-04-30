import React from "react";
import { useWebId, List, Value, Name, Link } from "@solid/react";
import "./Friends.css";
import { Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import IconButton from '@material-ui/core/IconButton';
import FileClient from 'solid-file-client';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import DocumentTitle from "react-document-title";
  

import auth from "solid-auth-client";
const { default: data } = require('@solid/query-ldflex');

const Card = (props, webId) => {
    var user = "" + useWebId();
    return (
        <div class="card bg-info text-white" >
            <div class="card-body">
                <h4 class="card-title" id="friendName">
                    <Name src={props.nombre}>{props.nombre}</Name>
                </h4>
                <center>
                    <div className="botones">
                        <Link href={props.nombre} className="btn btn-light" id="botonOpcion" data-testId="link">Profile</Link>
                        <button className="btn btn-light" id="botonOpcion" data-testId="button"  onClick={() => deleteFriend(props, user)} >Delete</button>
                        {/* onClick={() => deleteFriend(props, webId)} */}
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
            <div className="prueba">
                <h2 className="h2" data-testId="label">Your friends, <Value src="user.name" /> </h2>

                <h4 class="card-title" id="friendName">Agregar amigos</h4>

                <div class="wrap">
                    <div class="search">
                        <input type="text" class="searchTerm" placeholder="https://uo264033.solid.community/profile/card#me" id="input"/>
                        <button type="submit" class="searchButton" onClick={() => addFriend(document.getElementById('input').value, webId)}>
                            <SearchOutlinedIcon className="iconSearch"/>
                        </button>
                    </div>
                </div>

                <br></br>
                <List src={`[${webId}].friends`} className="list" padding-inline-start="0">{(friend) =>
                    <li key={friend} className="listElement">
                        <p>
                            <Card nombre={`[${friend}]`} web={webId}></Card>
                        </p>
                    </li>}
                </List>
            </div>
        </DocumentTitle>
    );
};


const deleteFriend = async (friendWebId, userWebId) => {
    const user = data[userWebId];
    //console.log(user.friends.firstName)
    for await (const name of user.friends.firstName){
    console.log("Hola")
        console.log(`  - ${name} is a friend`);}
    //console.log(friendWebId)
    //await ldflex[userWebId].friends.delete(friendWebId);
    //console.log(await ldflex[userWebId].friends.friends.random);
    /*const auth = require("solid-auth-client");
    var friends = `[${userWebId}].friends`;
    for (let i = 0; i < friends.length; i++) {
        if (friends[i] === friendWebId)
            friends.splice(i);
    }*/
    //Mirar si se elimina en Solid
}

  const reload = () => {
    window.location.reload();
  };


  const addFriend = async (friendWebId, userWebId) =>{
    
    const user = data[userWebId]; //sacamos nuestra informacion
    if (await isWebIdValid(friendWebId)) {
      if (friendWebId.localeCompare("") !== 0) {
        //comprobamos que no pasamos un campo vacio
        if (await friendAlreadyAdded(friendWebId, userWebId)) {
          //notificamos si el amigo estaba añadido
          alert("Friend already added");
        } else {
          await user.knows.add(data[friendWebId]); //añadimos el amigo
          reload();
        }
      } else {
        alert("Error");
      }
    } else {
     alert("Error 2");
    }
  }

  const isWebIdValid = async (friendWebId) =>{
    const fc = new FileClient(auth);
    let session = await auth.currentSession();
    if (!session) {
      session = await auth.login();
    }
    try {
      let op = async (client) => await client.itemExists(friendWebId);
      return await op(fc);
    } catch (e) {
      session = await auth.currentSession();
    }
  }

  const friendAlreadyAdded = async (friendWebId, webId) => {
    const user = data[webId];
    for await (const friend of user.friends)
      if (String(friend).localeCompare(String(friendWebId)) === 0) return true;
    return false;
  }

export default Friends;