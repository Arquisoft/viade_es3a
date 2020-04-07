import React from 'react'
import { useWebId, ProfileViewer } from '@inrupt/solid-react-components';
import { Value, Link } from '@solid/react';
import { ReactComponent as ReactLogo } from '../../../react.svg';
import './Profile.css'
import Avatar from '@material-ui/core/Avatar';
import FaceIcon from '@material-ui/icons/Face';


const Profile = () => {
    const webId = useWebId();
    return (
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
                         <Avatar alt={"user.name"}><FaceIcon/></Avatar>
                    </ProfileViewer>
            )}
            </div>
            <div className="info">
                <div className="name">
                    <Value src="user.name"/>
                </div>
                <div className="user">Viade's user</div>
                <div className="divider"></div>
                <Link href={`[${webId}]`} className="buttonSolid">Go to SOLID profile</Link>
            </div>

        </div>
        </div>
    )
}

export default Profile;


