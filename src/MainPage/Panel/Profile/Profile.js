import React from 'react'
import { ProfileViewer } from '@inrupt/solid-react-components';
import { useWebId } from '@solid/react';
import { Value } from '@solid/react';
import { Link } from 'react-router-dom';
import { ReactComponent as ProfileLogo } from '../../../img/profile.svg';
import './Profile.css'

import DocumentTitle from "react-document-title";

import { useLDflexList } from '@solid/react';

import * as solidAuth from 'solid-auth-client';
import fileClient from 'solid-file-client';

const fileClien = new fileClient(solidAuth, { enableLogging: true });

var routes;
var friends;

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
    friends = useLDflexList('user.friends');
    RoutesLength(webId);

    return (
        <DocumentTitle title='Profile'>
            <div>
                <p><h2 class="h2">Profile</h2></p>
                <div className="card">
                    <div className="photo">
                        {webId && (
                            <ProfileViewer
                                {...{
                                    webId,
                                    direction: 'down',
                                    onError: error => {
                                        // eslint-disable-next-line no-console
                                        console.log('ERROR', error.statusText);
                                    },
                                    onClick: false
                                }}
                            >
                                <ProfileLogo height="16vh" width="16vh" className="icon" />
                            </ProfileViewer>
                        )}
                    </div>
                    <div className="info">
                        <div className="name">
                            <Value src="user.name" />
                        </div>
                        <div className="user">Viade's user</div>
                        <div className="divider"></div>
                        <Link href={`[${webId}]`} className="buttonSolid">Go to SOLID profile</Link>
                    </div>

                </div>
                <br></br>

                <div className="card-friends">
                    <div className="info">
                        <div className="friends"> My friends</div>
                        <div className="data">{friends.length}</div>
                        {/* /viade_es3a/friends */}
                        <Link to="/viade_es3a/friends" className="buttonFriends">Show friends</Link>
                    </div>
                </div>
                <div className="card-routes">
                    <div className="info">
                        <div className="routes"> My routes</div>
                        <div className="data">{routes}</div>
                        <div ></div>
                        {/* /viade_es3a/loadRoute */}
                        <Link to="/viade_es3a/loadRoute" className="buttonFriends">Show routes</Link>
                    </div>
                </div>

            </div>

        </DocumentTitle>
    )
}

export default Profile;


