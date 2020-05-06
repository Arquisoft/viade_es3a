import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./NavBar/NavBar";
import Panel from "./Panel/Panel";

import * as solidAuth from "solid-auth-client";
import fileClient from "solid-file-client";
import { useWebId } from "@solid/react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AccessControlList, AppPermission } from '@inrupt/solid-react-components';

const fileClien = new fileClient(solidAuth, { enableLogging: true });
const auth = require("solid-auth-client");

const checkAppPermissions = (userAppPermissions, appPermissions) =>
  appPermissions.every(permission => userAppPermissions.includes(permission));

const checkSpecificAppPermission = async (webId, permission) => {
  const userAppPermissions = await AppPermission.checkPermissions(webId);
  return userAppPermissions.permissions.includes(permission);
};

const checkPermissions = async (webId, errorMessage) => {
  /**
   * Get permissions from trustedApp.
   */
  const userApp = await AppPermission.checkPermissions(webId);

  /**
   * Get modes permissions from solid-react-components
   */
  const permissions = AccessControlList.MODES;
  const { APPEND, READ, WRITE, CONTROL } = permissions;

  // If we are missing permissions that the app requires, display an error message with a Learn More link
  if (
    userApp === null ||
    userApp.permissions === null ||
    !checkAppPermissions(userApp.permissions, [APPEND, READ, WRITE, CONTROL])
  ) {

    toast.error("You must have control permissions enabled to use all the features of the app", {
      position: toast.POSITION.TOP_CENTER,
      closeOnClick: false
    });
    
  }
};

/**
 * Helper function to fetch permissions for the game inbox, and if permissions are not set
 * correctly, then add them. This repairs a broken inbox.
 * @param inboxPath
 * @returns {Promise<void>}
 */
const checkOrSetInboxAppendPermissions = async (inboxPath, webId) => {
  // Fetch app permissions for the inbox and see if Append is there
  const inboxAcls = new AccessControlList(webId, inboxPath);
  const permissions = await inboxAcls.getPermissions();
  const inboxPublicPermissions = permissions.filter(perm => perm.agents === null);

  const appendPermission = inboxPublicPermissions.filter(perm =>
    perm.modes.includes(AccessControlList.MODES.APPEND)
  );

  if (appendPermission.length <= 0) {
    // What do we do when the permission is missing? Add it!
    try {
      // Permission object to add. A null agent means Everyone
      const permissions = [
        {
          agents: null,
          modes: [AccessControlList.MODES.APPEND]
        }
      ];
      const ACLFile = new AccessControlList(webId, inboxPath);
      await ACLFile.createACL(permissions);
    } catch (error) {
      // TODO: Better error handling here
      throw error;
    }
  }

  return true;
};

async function creates() {
  var user = await auth.currentSession();

  checkPermissions(user.webId);

  const folderP = user.webId.split("profile/card#me")[0] + "private/routes3a";
  const folderI = user.webId.split("profile/card#me")[0] + "inbox/routes3a";
  const folderN = user.webId.split("profile/card#me")[0] + "inbox/routes3a/notifications";

  var existeP = await fileClien.itemExists(folderP);
  var existeI = await fileClien.itemExists(folderI);
  if (!existeP) {
    await fileClien.createFolder(folderP);
  }

  if (!existeI) {
    await fileClien.createFolder(folderI);

    let content = "@prefix : <#>.\n" +
      "@prefix n0: <http://www.w3.org/ns/auth/acl#>.\n" +
      "@prefix rou: <./>.\n" +
      "@prefix n1: <http://xmlns.com/foaf/0.1/>.\n" +
      "@prefix c: </profile/card#>.\n" +
      "\n" +
      ":AppendRead\n" +
      "a n0:Authorization;\n" +
      "n0:accessTo rou:;\n" +
      "n0:agentClass n1:Agent;\n" +
      "n0:default rou:;\n" +
      "n0:mode n0:Append, n0:Read.\n" +
      ":ControlReadWrite\n" +
      "a n0:Authorization;\n" +
      "n0:accessTo rou:;\n" +
      "n0:agent c:me;\n" +
      "n0:default rou:;\n" +
      "n0:mode n0:Control, n0:Read, n0:Write.";

    await fileClien.createFile(folderI + "/.acl", content, "text/turtle");

    await fileClien.createFolder(folderN);
  }
}


const MainPage = () => {
  creates();
  return (
    <div>
        
        <NavBar />
        <Panel />
        <ToastContainer autoClose={false}/>
    </div>
  );
};

export default MainPage;