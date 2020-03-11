import React from 'react';
import './AddRoute.css';

const AddRoute = () => {
    
    
    // constructor(props) {
    //     super(props);
    //     this.state = {value: ''};

    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    // handleChange(event) {
    //     this.setState({value: event.target.value});
    // }

    // handleSubmit(event) {
    //     alert('A name was submitted: ' + this.state.value);
    //     event.preventDefault();
    // }

    // render() {
        return (
            <form> {/* onSubmit={this.handleSubmit}> */}
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
    // }
}

export default AddRoute;

