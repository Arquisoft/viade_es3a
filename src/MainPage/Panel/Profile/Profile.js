import React from 'react'
import { useWebId } from '@inrupt/solid-react-components';
import { Value, Link } from '@solid/react';
import { ReactComponent as ReactLogo } from '../../../react.svg';
import './Profile.css'


const Profile = () => {
    const webId = useWebId();
    return (
        <div className="card">
            <div className="photo">
                <ReactLogo height="12vh" width="12vh" className="icon" />
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
    )
}

export default Profile;


