import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './NavBar/NavBar';
import Panel from './Panel/Panel';

import * as solidAuth from 'solid-auth-client';
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
  }
}

export default MainPage;