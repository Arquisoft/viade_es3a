import React from 'react'
import { useWebId, ProfileViewer } from '@inrupt/solid-react-components';
import { List, Value, Name, Link, Image } from '@solid/react';
import styled from 'styled-components';
import Photo from './Photo.js';


const ButStyle = styled.button`
  background-color:#18EEE9;
  border-radius: 10px;
  font-weight: bold;
  box-shadow: 0px 0px 10px 0.5px rgb(253, 252, 252);
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

const Profile = () => {
    const webId = useWebId();
    var user = "user.name";
    const string = value => value ? value.toString() : undefined;
    return (
        <div>
                <h2>Hi, </h2>
                
                <div class="card bg-info text-white">

                    <Photo srcImg={"user.imageSrc"} defaultSrc="profile.svg" className="profile"/>
                  
                    <div class="card-body">
                        <h4 class="card-title" id="name">
                            <Value src={user} />
                        </h4>
                        
                        <Link href={`[${webId}]`} className="btn btn-light">Profile</Link>
                        
                    </div>
                </div>
        </div>
    )
}

export default Profile;


