import React from 'react'
import { useWebId, ProfileViewer } from '@inrupt/solid-react-components';
import { Value } from '@solid/react';
import { Link } from 'react-router-dom';
import { ReactComponent as ProfileLogo } from '../../../img/profile.svg';
import './Profile.css'

import DocumentTitle from "react-document-title";

import { useLDflexValue, useLDflexList } from '@solid/react';

const Data = (props) => {
    return (
        props.lenght
    )
}

const Profile = () => {
    const webId = useWebId();
    const friends = useLDflexList('user.friends');
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
                        <div className="data">5</div>
                        <div ></div>
                        {/* /viade_es3a/loadRoute */}
                        <Link href={`[${webId}]`} className="buttonFriends">Show route</Link>
                    </div>
                </div>

            </div>

        </DocumentTitle>
    )
}

export default Profile;


