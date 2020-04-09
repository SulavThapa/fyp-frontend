import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import {Card} from "react-bootstrap";
import axios from "axios";


const SimpleMap = () => {





  const getMapOptions = () => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
    };
  };

  const [center, setCenter] = useState({lat:27.708816 , lng: 85.3254351 });
  const [zoom, setZoom] = useState(16);
  return (
    <div style={{ height: '85vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAEeG9ixt_VVl-uEdh3GvSgpPEmX0mrVvc' }}
        defaultCenter={center}
        defaultZoom={zoom}
        options={getMapOptions}
      >
        <Marker
          lat={27.7088167}
          lng={85.3254351}
          name="Ba 1 cha 5486"
          color="green"
        />
      </GoogleMapReact>
    </div>
  );
}

class LiveMap extends React.Component{
  state = {
    gps: []
  };
  componentDidMount()
  {
    axios.get(`https://api.thingspeak.com/channels/1021842/feeds.json?api_key=LIN8G7PKND7MMP6E&results=15`)
      .then(res => {
        this.setState({gps: res.data});
        console.log(res);
      }).catch(err => console.log('Cannot access', err));
  }
  render(){
    return(
      <React.Fragment>
        <div
          className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h2 style={{fontFamily: 'monospace', fontSize: '35px'}}>Maps</h2>
        </div>
        <Card className="100%" style={{backgroundColor: '#999'}}>
          <SimpleMap/>
        </Card>
      </React.Fragment>
    );
  }
}

export default LiveMap;