import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import {Card} from "react-bootstrap";


const SimpleMap = (props: any) => {
  const getMapOptions = (maps: any) => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
    };
  };

  const [center, setCenter] = useState({lat:27.708816 , lng: 85.3254351 });
  const [zoom, setZoom] = useState(14);
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAEeG9ixt_VVl-uEdh3GvSgpPEmX0mrVvc' }}
        defaultCenter={center}
        defaultZoom={zoom}
        options={getMapOptions}
      >
        <Marker
          lat={27.7088167}
          lng={85.3254351}
          name="My Marker"
          color="gfureen"
        />
      </GoogleMapReact>
    </div>
  );
}

class LiveMap extends React.Component{
  render(){
    return(
      <React.Fragment>
        <div
          className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h2>Maps</h2>
        </div>
        <Card className="vh-100" style={{backgroundColor: '#999'}}>
          <SimpleMap/>
        </Card>
      </React.Fragment>
    );
  }
}

export default LiveMap;