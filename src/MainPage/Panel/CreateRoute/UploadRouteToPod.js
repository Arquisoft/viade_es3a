import React from "react";
import auth from "solid-auth-client";
import fileClient from "solid-file-client";
import * as solidAuth from "solid-auth-client";
import { CreateRoute, recarga, sleep } from "./CreateRoute";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SelectInput from "@material-ui/core/Select/SelectInput";

class UploadRouteToPod {

    constructor() {
        this.state = {
            fileName: "",
        };
    }

    async uploadRoute(route, name, description, images, videos) {
        let session = await auth.currentSession();

        if (session) {
            var user = `${session.webId}`;
            var folder = (user+"").split("profile/card#me")[0] + "/private/routes3a";
            var fileClien = new fileClient(solidAuth, { enableLogging: true });

            var existe = await fileClien.itemExists(folder);

            if (!existe) {
                await fileClien.createFolder(folder);
            }

            var fileList = [];
            //Name
            var destination = folder + "/" + name + "/";

            existe = await fileClien.itemExists(destination);

            if (!existe) {
                var k = 0;
                await fileClien.createFolder(destination);
                var user = await auth.currentSession();

                let content = "@prefix : <#>.\n" +
                    "@prefix n0: <http://www.w3.org/ns/auth/acl#>.\n" +
                    "@prefix M: <./>.\n" +
                    "@prefix c: </profile/card#>.\n" +

                    ":ControlReadWrite\n" +
                    "a n0:Authorization;\n" +
                    "n0:accessTo M:;\n" +
                    "n0:agent c:me;\n" +
                    "n0:default M:;\n" +
                    "n0:mode n0:Control, n0:Read, n0:Write.\n" +
                    ":Read a n0:Authorization; n0:accessTo M:; n0:default M:; n0:mode n0:Read.";

                await fileClien.createFile(destination + "/.acl", content, "text/turtle");

                //Description
                await fileClien.createFile(destination + "/" + "description", description, "text/plain");

                //Imagen
                for (k = 0; images !== null && k < images.length; k++) {
                    await fileClien.createFile(destination + "/" + "photo" + "/img" + (k + 1), images[k], "img");
                }

                //Videos
                for (k = 0; videos !== null && k < videos.length; k++) {
                    await fileClien.createFile(destination + "/" + "video" + "/vid" + (k + 1), videos[k], "video");
                }

                //Route
                var routed = JSON.stringify(route);
                await fileClien.createFile(destination + "/" + name + ".geojson", routed, "text/json");

                
                toast.info("Your route has been added to the pod!!", {
                    position: toast.POSITION.BOTTOM_LEFT
                } );

                await sleep(5000);
                recarga();
                document.getElementById("name").value = "";
                document.getElementById("description").value = "";
                document.getElementById("photo").value = null;
                document.getElementById("video").value = null;

            } else {
                toast.error("Route title already used, use another title", {
                    position: toast.POSITION.BOTTOM_LEFT
                } );
            }

        }


    }

}

export default UploadRouteToPod = new UploadRouteToPod();