import React from 'react'
import { useWebId,List,Value,evaluateExpressions,evaluateList } from '@solid/react';


const Friends = () => {
    const webId = useWebId();
    return (
        <div>
            <h2>Your friends, <Value src="user.name" /> </h2>
            <ul>
                <p>
                    <List src={`[${webId}].friends`}>{friend =>
                        <li key={friend}>
                                <Value src={`[${friend}].name`}>{`${friend}`}</Value>
                        </li>}
                    </List>
                </p>
            </ul>
        </div>
    )
}

export default Friends;