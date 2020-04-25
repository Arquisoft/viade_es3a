import React from "react";
import DocumentTitle from "react-document-title";
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import L from 'leaflet';
import { TileLayer, Marker, Polyline, GeoJSON } from 'react-leaflet';
import { MapStyle} from './CreateRouteStyle';

import { useWebId } from "@solid/react";
import fileClient from "solid-file-client";
import * as solidAuth from "solid-auth-client";

class CreateRoute extends React.Component {

    constructor() {
        super();
        this.state = {
          markers: [],
          name: "",
          description: "",
          images: [],
          videos: []
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

      //Update data
      saveName = (n) => {
        var { name } = this.state;
        name = document.getElementById('name').value;
        this.setState({ name });
      }

      saveDescription = (n) => {
        var { description } = this.state;
        description = document.getElementById('description').value;
        this.setState({ description });
      }

      saveImages(images) {
        for (let i = 0; i < images.length; i++)
          this.state.images.push(images[i]);
      }

      saveVideos(videos) {
        for (let i = 0; i < videos.length; i++)
          this.state.videos.push(videos[i]);
      }

        saveRoute = async ()  =>  {
          var { name } = this.state;
          var { description } = this.state;
          const { markers } = this.state;
          var { images } = this.state;
          var { videos } = this.state;

          if(name === "" ){
            alert("Name is empty! Please, fill something to save the route");
          }
          else if(markers.lenght <=1){
            alert("There is not a route created. Please, click on the map to draw one");
          }
        else{
        //     //Vamos a guardar la ruta en el POD
        //     const auth = require("solid-auth-client");
        //     var user= "" + useWebId();
        //     const fileClien = new fileClient(solidAuth, { enableLogging: true });

        //     const folder = user.split("profile/card#me")[0]+"/private/routes3a";

        //     var existe = await fileClien.itemExists(folder);
        //     if (!existe){
        //       await fileClien.saveRoute(folder);
        //     }

        //     var fileList = [];

        //     //Name
        //     var destination = folder + "/" + name + "/";
        //     existe = await fileClien.itemExists(destination);

        //     if (!existe) {
        //       var k=0;
        //       await fileClien.createFolder(destination);
        //       var user = await auth.currentSession();
              
        //       let content = "@prefix : <#>.\n"+
        //       "@prefix n0: <http://www.w3.org/ns/auth/acl#>.\n"+
        //       "@prefix M: <./>.\n"+
        //       "@prefix c: </profile/card#>.\n"+
              
        //       ":ControlReadWrite\n"+
        //           "a n0:Authorization;\n"+
        //           "n0:accessTo M:;\n"+
        //           "n0:agent c:me;\n"+
        //           "n0:default M:;\n"+
        //           "n0:mode n0:Control, n0:Read, n0:Write.\n"+
        //       ":Read a n0:Authorization; n0:accessTo M:; n0:default M:; n0:mode n0:Read.";
              
        //     await fileClien.createFile(destination+"/.acl", content,"text/turtle");

            //Crear route con los markers --> GeoJson
            // Create an empty GeoJSON route
            var route = {
              "type": "FeatureCollection",
              "features": []
            };

            //De cada punto crear un Marker para crear cada parte del fichero
            for (let i = 0; i < markers.length; i++){
              var marker = new L.Marker([markers[i].lat, markers[i].lng]);
              var geojson = marker.toGeoJSON();
              route.features.push(geojson);
            }

            console.log(route);
            // fileList.push(route);
            
            // //Description
            // await fileClien.createFile(destination + "/"+ "description", description, "text/plain");

            // //Images
            // for(k=0; images !== null && k< images.length; k++){
            //   await fileClien.createFile(destination + "/"+ "photo" + "/img" + (k+1), images[k], "img");
            // }

            // //Videos
            // for(k=0; videos !== null && k<videos.length; k++){
            //   await fileClien.createFile(destination + "/"+ "video"+ "/vid" + (k+1), videos[k], "video");
            // }

            // // ??????
            // for (var i = 0; i < fileList.length; i++) {
            //   var file = fileList[i];
            //   const fileURl = destination + "/" + name + ".geojson";
            //   fileClien.putFile(fileURl, file, file.type);
            // }

            // alert("Your route has been added to the pod!!");
            // this.clearAll();

            // }else{
            //   alert("Route title already used, use another title");
            // }

          }
       }

    
    render() {
        this.getLocation();
        return(
            <DocumentTitle title="Create route">
                <div className="leftPanel_leftPart">     
                  <div className="leftPanel">
                  <nav className="leftPanel_leftPart">
                    <h2 className="h2">Create a route</h2>
                    <br></br>
                    <div className="form-group">
                        <label for="exampleFormControlInput1" className="labelName" data-testid="name">Name:</label>
                        <input type="text" className="form-control" id="name" data-testid="inputName" placeholder="Route's name" onChange={this.saveName}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1" className="labelDescription" data-testid="desc">Description:</label>
                        <textarea className="form-control" id="description" data-testid="inputDesc" name="description" rows="3" onChange={this.saveDescription} ></textarea>
                    </div>

                    <div className="form-group">
                        <label className="exampleInputPhoto" for="photo" className="labelPhoto" data-testid="img">Images:</label><br></br>
                        <input value={null} type="file" id="photo" name="image" data-testid="inputImg" accept="image/*" multiple="true"  onChange={(e) => this.saveImages(e.target.files)}/>
                    </div>
                    <div className="form-group">
                        <label className="exampleInputVideo" for="video" className="labelVideo" data-testid="vid">Video:</label><br></br>
                        <input value={null} type="file" id="video" name="video" accept="video/*" data-testid="inputVid" multiple="true"  onChange={(e) => this.saveVideos(e.target.files)}/>
                    </div>
                    <br></br>
                    <div className="botones">
                        <button data-testid="btnenviar" className="btn btn-info" id="botonOpcion" onClick={this.saveRoute}> <SaveIcon /> Save </button>
                        <button data-testid="btnenviar" className="btn btn-info" id="botonOpcion" onClick={this.clearAll} > <DeleteIcon /> Clear </button>
                    </div>
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