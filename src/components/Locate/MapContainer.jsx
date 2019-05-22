import React, { Component } from 'react';
import { GoogleMapReact, GoogleApiWrapper } from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const defaultProps = {
  center: {
    lat: 59.95,
    lng: 30.33
  },
  zoom: 11
};

class MapContainer extends React.Component {

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className='theMap'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyArQ14C_D7hv9OX3pv3YJZ3PLI9x8AtWHI' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        <defaultProps/>
        </GoogleMapReact>

        <style jsx>{`
          .theMap{
            height: 100vh;
            width: 100%;
            border: 1px solid red;
          }
        `}
        </style>
      </div>
    );
  }
}

export default MapContainer({
  apiKey: 'AIzaSyArQ14C_D7hv9OX3pv3YJZ3PLI9x8AtWHI'
});
