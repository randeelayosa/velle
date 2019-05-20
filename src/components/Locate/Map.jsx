import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

export class Map extends Component {
  state = ({
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  });

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <div>
        <h1>The map</h1>
        <Map
          google={this.props.google}
          zoom={14}
          style={style}
          initialCenter={{ lat: -1.2884, lng: 36.8233 }} />
        <Marker onClick={this.onMarkerClick} name={'Kenyatta International Convention Centre'} />
        <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow} onClose={this.onClose}>
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </CurrentLocation>
      </div>
    );
  }
}

  export default GoogleApiWrapper({
    apiKey: ""

  })(Map);
