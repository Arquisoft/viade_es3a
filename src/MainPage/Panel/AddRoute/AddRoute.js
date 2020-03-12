import React from 'react';
import './AddRoute.css';
import {withRouter} from 'react-router';

class AddRoute extends React.Component {
   render () {
         return (
            <form> 
                <br></br>
                <br></br>
                <input type="file" />
                <br></br>
                <br></br>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <br></br>
                <br></br>
                <label>
                    Details:
                </label>
                <textarea>
                        ...
                </textarea>
                <br></br>
                <input type="submit" value="Save" />
            </form>
        );

    }

}

export default AddRoute;

