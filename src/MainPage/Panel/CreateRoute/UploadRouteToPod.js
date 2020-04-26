import React from "react";
import auth from 'solid-auth-client';
import { useWebId } from "@solid/react";

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
            var url=user.split("profile/card#me")[0]+"/private/routes3a";
        }


    }

}

export default UploadRouteToPod = new UploadRouteToPod();