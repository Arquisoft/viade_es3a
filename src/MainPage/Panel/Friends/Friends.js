import React from 'react'
import { useWebId, List, Value } from '@solid/react';

import DocumentTitle from "react-document-title";

const Friends = () => {
    const webId = useWebId();
    return (
        <DocumentTitle title='Friends'>
            <div>
                <h2>Your friends, <Value src="user.name" /> </h2>
                <List src="user.friends" />
            </div>
        </DocumentTitle>
    )
}

export default Friends;