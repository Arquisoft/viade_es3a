import React from "react";
import DocumentTitle from "react-document-title";

const CreateRoute = () => {

    return (
        
        <DocumentTitle title="Create route">
            <div>
                <h2 className="h2">Create a new route</h2>
                <p>Click on the map to mark different point and be able to do a new route. 
                    Once you have it, click on 'Save' to save it on your POD</p>
                <center>
                    <button class="btn btn-info" >Save
                    </button>
                </center>
            </div>
        </DocumentTitle>
    
    )
}

export default CreateRoute;