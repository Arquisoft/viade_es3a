import React from 'react'
import { useWebId, List, Value, Name } from '@solid/react';


const Card = (props) => {
    return (
        <div class="card bg-info text-white">
            <div class="card-body">
                <h4 class="card-title" id="friendName">
                    <Name src={props.nombre}>{props.nombre}</Name>
                </h4>
                <button type="button" class="btn btn-light">Profile</button>
            </div>
        </div>
    )
}

const Friends = () => {
    const webId = useWebId();
    return (
        <div>
            <h2>Your friends, <Value src="user.name" /> </h2>
            <List src={`[${webId}].friends`}>{friend =>
                <li key={friend}>
                    <p>
                        <Card nombre={`[${friend}]`}></Card>
                    </p>
                </li>}
            </List>
        </div>
    )
}

export default Friends;