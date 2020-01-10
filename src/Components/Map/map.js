import React, {Component} from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import {Card} from "react-bootstrap";


const mapStyles = {
    width: '100%',
    height: '100%',
    position: 'fixed'
};

class MapHere extends React.Component{
    render() {
        return (
            <React.Fragment>
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2 style={{left: '3%', marginTop: '1%'}}>Maps</h2>
                </div>

                <Card style={{height: '795px', width: '100%', marginTop: '1%'}}>
                    <Map
                        google={this.props.google}
                        zoom={17}
                        style={mapStyles}
                        initialCenter={{ lat: 27.7087074, lng: 85.3237989}}
                    />
                </Card>
            </React.Fragment>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAEeG9ixt_VVl-uEdh3GvSgpPEmX0mrVvc"})(MapHere);