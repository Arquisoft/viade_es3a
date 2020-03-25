import React from 'react'
import { useWebId, List, Link, Value, Name } from '@solid/react';
import './Friends.css'

const Card = (props) => {
    return (
        <div class="card bg-info text-white">
            <div class="card-body">
                <h4 class="card-title" id="friendName">
                    <Name src={props.nombre}>{props.nombre}</Name>
                </h4>
                <button type="button" class="btn btn-light">
                    <Link href={props.nombre}>Profile </Link>
                </button>
            </div>
        </div>
    )
}

const Friends = () => {
    const webId = useWebId();
    return (
        <div>
            <h2>Your friends, <Value src="user.name" /> </h2>
            <List src={`[${webId}].friends`} className="list" padding-inline-start="0">{friend =>
                <li key={friend} className="listElement">
                    <p>
                        <Card nombre={`[${friend}]`}></Card>
                    </p>
                </li>}
            </List>
        </div>
    )
}

export default Friends;