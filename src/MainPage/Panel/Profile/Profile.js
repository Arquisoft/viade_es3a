import React from 'react'
import { useWebId, ProfileViewer } from '@inrupt/solid-react-components';
import { Value, Link } from '@solid/react';
import { ReactComponent as ProfileLogo } from '../../../img/profile.svg';
import './Profile.css'

import DocumentTitle from "react-document-title";


const Profile = () => {
    const webId = useWebId();
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
            </div>
        </DocumentTitle>
    )
}

export default Profile;


