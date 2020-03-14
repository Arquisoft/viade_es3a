import React from 'react'
import { useWebId, ProfileViewer } from '@inrupt/solid-react-components';
import styled from 'styled-components';

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
    return (
        <div>
            {webId && (
                    <ProfileViewer
                    {...{
                        webId,
                        direction: 'down',
                        viewMoreText: 'See Profile',
                        onError: error => {
                            // eslint-disable-next-line no-console
                            console.log('ERROR', error.statusText);
                        },
                        onClick: false
                    }} 
                    >
                        <ButStyle>See Profile</ButStyle>
                    </ProfileViewer>
                )}
        </div>
    )
}

export default Profile;
