import React from 'react'
import { useWebId, List, Value } from '@solid/react';


const Friends = () => {
    const webId = useWebId();
    return (
        <div>

            <h2>Your friends, <Value src="user.name"/> </h2> 

            <List src="user.friends" />

        </div>
    )
}

export default Friends;