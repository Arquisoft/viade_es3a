import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import FaceIcon from '@material-ui/icons/Face';

import styles from './Profile.css';

export default ({name, src, ...props}) => src ?
    <Avatar alt={name} src={src}  {...props}/> :
    <Avatar alt={name} {...props}><FaceIcon/></Avatar>
