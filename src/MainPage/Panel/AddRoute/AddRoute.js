import React, { Fragment, useState } from 'react';
import './AddRoute.css';

const Upload = () => {
    const [file, setFile] = useState('');
    const [filename, setFileName] = useState('Choose File');

    const changeName = e => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    }

    return (
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
            </div>
            <div class="custom-file">
                <input type="file" class="custom-file-input" id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01" onChange={changeName} required/>
                <label class="custom-file-label" for="inputGroupFile01">{filename}</label>
            </div>
        </div>
    );
};

const Data = () => {
    return (
        <form>
            <Upload/>
            <div class="form-group">
                <label for="exampleFormControlInput1">Name:</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Route's name" required/>
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
    return (
        <Fragment>
            <h2>Add route</h2>
            <Data />
        </Fragment>

    );

};

export default AddRoute;

