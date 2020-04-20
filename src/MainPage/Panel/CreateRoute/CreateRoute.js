import React from "react";
import DocumentTitle from "react-document-title";
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

import map from "../Map/Map";

class CreateRoute extends React.Component {

    constructor() {
        super();
        this.state = {
          markers: [],
          name: "",
          description: "",
          images: [],
          videos: [],
          cont: 1
        };
      }

      getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
              center: {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              }
            })
          },
            (error) => {
              this.setState({
                center: {
                  lat: 40.205,
                  lng: -3.60,
                },
                zoom: 12
              })
            });
        }
      }

     clickOnMap = (e) => {
        const { markers } = this.state;
        markers.push({ lat: e.latlng.lat, lng: e.latlng.lng })
        this.setState({ markers })
        map.createPoint(this.state.markers.length-1, this.state.cont);
        // this.draw();
      }

      draw() {
        let points = [];
        for (let i = 0; i < this.state.markers.length; i++)
          points.push({ lat: this.state.markers[i].lat, lng: this.state.markers[i].lng })
        return points;
      };

      clearAll() { //Se pone todo por defecto, es decir: name=""...
        window.location.reload();
      }

    render() {
        this.getLocation();
        return(
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
                        <button data-testid="btnenviar" class="btn btn-info" > <SaveIcon /> Save </button>
                        <button data-testid="btnenviar" class="btn btn-info" onClick={this.clearAll} > <DeleteIcon /> Clear </button>
                    </center>
                </div>
            </DocumentTitle>
        )
    }
    
}

export default CreateRoute;