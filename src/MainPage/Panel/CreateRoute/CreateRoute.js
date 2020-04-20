import React from "react";
import DocumentTitle from "react-document-title";

const CreateRoute = () => {

    return (
        
        <DocumentTitle title="Create route">
            <div>
                <h2 class="h2">Create a route</h2>
                <br></br>
                <div class="form-group">
                    <label for="exampleFormControlInput1" class="labelName" data-testid="name">Name:</label>
                    <input type="text" class="form-control" id="name" data-testid="inputName" placeholder="Route's name" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1" class="labelDescription" data-testid="desc">Description:</label>
                    <textarea class="form-control" id="description" data-testid="inputDesc" name="description" rows="3"  ></textarea>
                </div>

                <div class="form-group">
                    <label class="exampleInputPhoto" for="photo" class="labelPhoto" data-testid="img">Images:</label><br></br>
                    <input value={null} type="file" id="photo" name="image" data-testid="inputImg" accept="image/*" multiple="true" />
                </div>
                <div class="form-group">
                    <label class="exampleInputVideo" for="video" class="labelVideo" data-testid="vid">Video:</label><br></br>
                    <input value={null} type="file" id="video" name="video" accept="video/*" data-testid="inputVid" multiple="true" />
                </div>
                <br></br>
                <center>
                <button data-testid="btnenviar"  class="btn btn-info" >Save
                </button>
            </center>
            </div>
        </DocumentTitle>
    
    )
}

export default CreateRoute;