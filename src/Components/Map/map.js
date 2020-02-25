import React, {Component} from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import {Card} from "react-bootstrap";


class MapHere extends React.Component{
    render() {
        return (
            <React.Fragment>
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2>Maps</h2>
                </div>
                    <Card className="vh-100" style={{ backgroundColor: '#999'}}>
                        <Map
                          google={this.props.google}
                          zoom={17}
                          initialCenter={{ lat: 27.7087074, lng: 85.3237989}}
                        />
                    </Card>
            </React.Fragment>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAEeG9ixt_VVl-uEdh3GvSgpPEmX0mrVvc"})(MapHere);