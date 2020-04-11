import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './NavBar/NavBar';
import Panel from './Panel/Panel';

import * as solidAuth from "solid-auth-client";
import fileClient from 'solid-file-client';
import { useWebId } from '@solid/react';

const fileClien = new fileClient(solidAuth, { enableLogging: true });
const auth = require('solid-auth-client')

const MainPage = () => {
  creates();
  return (
    <div>
      <NavBar />
      <Panel />
    </div>
  );
};


async function creates() {
  var user=await auth.currentSession()

  const folderP=user.webId.split("profile/card#me")[0]+"private/routes3a";
  const folderI=user.webId.split("profile/card#me")[0]+"inbox/routes3a";

  var existeP = await fileClien.itemExists(folderP);
  var existeI = await fileClien.itemExists(folderI);
  if (!existeP)
      await fileClien.createFolder(folderP);
  if (!existeI){
      await fileClien.createFolder(folderI);

      let content = "@prefix : <#>.\n"+
      "@prefix n0: <http://www.w3.org/ns/auth/acl#>.\n"+
      "@prefix rou: <./>.\n"+
      "@prefix n1: <http://xmlns.com/foaf/0.1/>.\n"+
      "@prefix c: </profile/card#>.\n"+
      "\n"+
      ":AppendRead\n"+
      "a n0:Authorization;\n"+
      "n0:accessTo rou:;\n"+
      "n0:agentClass n1:Agent;\n"+
      "n0:default rou:;\n"+
      "n0:mode n0:Append, n0:Read.\n"+
      ":ControlReadWrite\n"+
      "a n0:Authorization;\n"+
      "n0:accessTo rou:;\n"+
      "n0:agent c:me;\n"+
      "n0:default rou:;\n"+
      "n0:mode n0:Control, n0:Read, n0:Write."

      await fileClien.createFile(folderI+"/.acl", content,"text/turtle")
  }
}

export default MainPage;