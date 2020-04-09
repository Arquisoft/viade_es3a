import React from 'react';

import { evaluateExpressions } from '@solid/react';

import ProfileContainer from './Container';

const ProfileEvaluation = evaluateExpressions(['fullName', 'imageSrc'], ProfileContainer);

export default ({webId}) => <ProfileEvaluation
    webId={webId}
    fullName={`[${webId}].name`}
    imageSrc={`[${webId}].image`}
/>
