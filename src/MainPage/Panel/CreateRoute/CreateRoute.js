import React from "react";
import DocumentTitle from "react-document-title";
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import { TileLayer, Marker, Polyline } from 'react-leaflet';
import { MapStyle} from './CreateRouteStyle';

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

       styles = {
        wrapper: {
            width: "70vw",
            height: "100vh",
            className: "rightPanel_mapa",
            display: "flex"
        },
        map: {
            flex: 1
        }
    };

      getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
              center: { lat: position.coords.latitude,lng: position.coords.longitude
              }
            })
          },
            (error) => {
              this.setState({
                center: { lat: 43.38, lng: -5.0}
              })
            });
        }
      }

     clickOnMap = (e) => {
        const { markers } = this.state;
        markers.push({ lat: e.latlng.lat, lng: e.latlng.lng })
        this.setState({ markers })
        this.drawLine();
      }

      drawLine() {
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
                <div className="leftPanel_leftPart">     
                  <div className="leftPanel">
                  <nav className="leftPanel_leftPart">
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
                        <p></p>
                        <button data-testid="btnenviar" class="btn btn-info" onClick={this.clearAll} > <DeleteIcon /> Clear </button>
                    </center>
                  </nav>
                  <div className="rightPanel_mapa" id="jeje">
                      <MapStyle id="map" center={this.state.center} zoom={12} onClick={this.clickOnMap}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        {this.state.markers.map((position, idx) =>
                          <Marker key={`marker-${idx}`} position={position}></Marker>
                        )}
                        <Polyline positions={this.drawLine()} />
                      </MapStyle>
                  </div>
                </div>
              </div>
            </DocumentTitle>
        )
    }
    
}

export default CreateRoute;