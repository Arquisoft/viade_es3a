import React from "react";
import { useWebId, List, Value, Name, Link } from "@solid/react";
import "./Friends.css";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import IconButton from "@material-ui/core/IconButton";
import FileClient from "solid-file-client";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import DocumentTitle from "react-document-title";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import auth from "solid-auth-client";
const { default: data } = require("@solid/query-ldflex");

const reload = () => {
  window.location.reload();
};

const isWebIdValid = async (friendWebId) => {
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
};

const friendAlreadyAdded = async (friendWebId, webId) => {
  const user = data[webId];
  for await (const friend of user.friends) {
    if (String(friend).localeCompare(String(friendWebId)) === 0){ return true;}
  }
  return false;
};

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const addFriend = async (friendWebId, userWebId) => {

  const user = data[userWebId]; //sacamos nuestra informacion
  if (await isWebIdValid(friendWebId)) {
    if (friendWebId.localeCompare("") !== 0) {
      //comprobamos que no pasamos un campo vacio
      if (await friendAlreadyAdded(friendWebId, userWebId)) {
        //notificamos si el amigo estaba añadido
        toast.error("Friend already added", {
          position: toast.POSITION.BOTTOM_LEFT,
          autoClose: 5000
        } );
      } else {
        await user.knows.add(data[friendWebId]); //añadimos el amigo
        toast.info("Your friend has been added", {
          position: toast.POSITION.BOTTOM_LEFT,
          autoClose: 5000
        } );
        await sleep(5000);
        reload();
      }
    } else {
      toast.error("Empty string", {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 5000
      } );
    }
  } else {
    toast.error("Invalid WebId ", {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 5000
    } );
  }
};

const deleteFriend = async (friend, userWebId) => {
  var friendWebId = friend.nombre;
  friendWebId = friendWebId.replace("[", "");
  friendWebId = friendWebId.replace("]", "");

  const user = data[userWebId];
  if (await isWebIdValid(friendWebId)) {
    if (friendWebId.localeCompare("") !== 0) {
      if (await !friendAlreadyAdded(friendWebId, userWebId)) {
        toast.error("An error occurred when deleting the friend (maybe it was previously deleted)", {
          position: toast.POSITION.BOTTOM_LEFT,
          autoClose: 5000
      } );
      } else {
        await user.knows.delete(data[friendWebId]); //añadimos el amigo
        toast.info("User will be deleted from your friends", {
          position: toast.POSITION.BOTTOM_LEFT,
          autoClose: 5000
      } );
      await sleep(5000);
        reload();
      }
    } else {
      toast.error("Empty string", {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 5000
    } );
    }
  } else {
    toast.error("Invalid WebId ", {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 5000
  } );
  }

};

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
            <button className="btn btn-light" id="botonOpcion" data-testId="button" onClick={() => deleteFriend(props, user)} >Delete</button>
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
        <h4 class="card-title" id="addFriend" data-testId="addFriend">Add friends by webId</h4>
        <div class="wrap">
          <div class="search">
            <input type="text" class="searchTerm" placeholder="https://pepitogarcia.solid.community/profile/card#me" id="input" />
            <button type="submit" class="searchButton" onClick={() => addFriend(document.getElementById("input").value, webId)}>
              <SearchOutlinedIcon className="iconSearch" />
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
        
        <ToastContainer />
      </div>
    </DocumentTitle>
  );
};

export default Friends;