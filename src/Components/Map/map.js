import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import {Card} from 'react-bootstrap';


const SimpleMap = (props: any) => {
  const getMapOptions = (maps: any) => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [{featureType: 'poi', elementType: 'labels', stylers: [{visibility: 'on'}]}],
    };
  };

  const [center, setCenter] = useState({lat: 27.7087074, lng: 85.3237989});
  const [zoom, setZoom] = useState(14);
  return (
    <div style={{height: '100vh', width: '100%'}}>
      <React.Fragment>
        <div
          className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h2>Maps</h2>
        </div>
        <Card className="vh-100" style={{backgroundColor: '#999'}}>
          <GoogleMapReact
            bootstrapURLKeys={{key: 'AIzaSyAEeG9ixt_VVl-uEdh3GvSgpPEmX0mrVvc'}}
            defaultCenter={center}
            defaultZoom={zoom}
            options={getMapOptions}
          >
            <Marker
              lat={11.0168}
              lng={76.9558}
              name="My Marker"
              color="blue"
            />
          </GoogleMapReact>
        </Card>
      </React.Fragment>
    </div>
  );
}
export default SimpleMap;



