import React, { Fragment, useState } from 'react';
import './AddRoute.css';
import { useWebId } from '@solid/react';
import {

    Uploader,
    ProfileUploader
} from '@inrupt/solid-react-components';



const Upload = (props) => {
    console.log("SUBIENDO "+props.url);
    return(
    <Uploader
                 {...{
                 fileBase:   props.url ,
                         render: props => <ProfileUploader {...{ ...props }} />
                     }}
                />
                );
            };

const Data = () => {
    return (
        <form>
            <div class="form-group">
                <label for="exampleFormControlInput1">Name:</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Route's name" />
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Description:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-info">Add route</button>
        </form>
    );
};

const AddRoute = () => {
   
    var user=""+useWebId();
 
    const url=user.split("profile/card#me")[0]+"private/";
    return (
        <Fragment>
            <h2>Add route</h2>
            <Upload url={url} />
            <Data />
        </Fragment>

    );

};

export default AddRoute;

