import React, { Component } from 'react';
import {
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

class Google extends Component {
  render() {
    const { lat, lng } = this.props;
    return (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat, lng }}
      >
        {this.props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
      </GoogleMap>
    );
  }

}

export default withGoogleMap(Google);
