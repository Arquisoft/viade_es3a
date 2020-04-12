import React from "react";
import { ProfileViewer } from "@inrupt/solid-react-components";
import { useWebId } from "@solid/react";
import { Value, Link as LinkSolid } from "@solid/react";
import { Link } from "react-router-dom";
import { ReactComponent as ProfileLogo } from "../../../img/profile.svg";
import "./Profile.css";

import DocumentTitle from "react-document-title";

import { useLDflexList } from "@solid/react";

import * as solidAuth from "solid-auth-client";
import fileClient from "solid-file-client";

const fileClien = new fileClient(solidAuth, { enableLogging: true });

var routes = 0;
var friends = 0;

export async function RoutesLength(user) {
    if (user != undefined && user != "") {
        try {
            const url = user.split("profile/card#me")[0] + "/private/routes3a";
            let folder = await fileClien.readFolder(url);

            if (folder) {
                routes = folder.folders.length;
            }
        }
        catch (err) {
            routes = 0;
        }
    }
}

const Profile = () => {
    const webId = useWebId();
    friends = useLDflexList("user.friends");
    RoutesLength(webId);

    return (
        <DocumentTitle title="Profile">
            <div>
                <h2 className="h2" data-testid="label" data-testid="titleProfile">Profile</h2>
                <div className="card" id="cardProfile">
                    <div className="photo" data-testid="photoProfile">
                        {webId && (
                            <ProfileViewer data-testid="viewerProfile"
                                {...{
                                    webId,
                                    direction: "down",
                                    onError: (error) => {
                                        // eslint-disable-next-line no-console
                                        console.log("ERROR", error.statusText);
                                    },
                                    onClick: false
                                }}
                            >
                                <ProfileLogo height="16vh" width="16vh" className="icon" data-testid="logoProfile" />
                            </ProfileViewer>
                        )}
                    </div>
                    <div className="info">
                        <div className="name">
                            <Value src="user.name" data-testid="nameProfile" />
                        </div>
                        <div className="user" data-testid="userProfile">Viade"s user</div>
                        <div className="divider" data-testid="dividerProfile"></div>
                        <LinkSolid href={`[${webId}]`} className="buttonSolid" data-testid="buttonSolidProfile">Go to SOLID profile</LinkSolid>
                    </div>
                </div>
                <div className="cardExtra">
                    <div className="cardInfoExtra">
                        <div className="infoExtra">
                            <div className="titleExtra" data-testid="myFriendsProfile">My friends</div>
                            <div className="data" data-testid="friendsLengthProfile">{friends.length}</div>
                            {/* /viade_es3a/friends */}
                            <Link to="/viade_es3a/friends" className="buttonExtra" data-testid="buttonFriendsProfile">Show friends</Link>
                        </div>
                    </div>
                    <div className="hueco"></div>
                    <div className="cardInfoExtra">
                        <div className="infoExtra">
                            <div className="titleExtra" data-testid="myRoutesProfile">My routes</div>
                            <div className="data" data-testid="routesLengthProfile">{routes}</div>
                            {/* /viade_es3a/loadRoute */}
                            <Link to="/viade_es3a/loadRoute" className="buttonExtra" data-testid="buttonRoutesProfile">Show routes</Link>
                        </div>
                    </div>
                </div>

            </div>

        </DocumentTitle>
    )
}

export default Profile;