import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

MapboxGL.setAccessToken('pk.eyJ1IjoibW9saW1hdCIsImEiOiJjam93dmpxcGIxN3F0M3ZucXoxamM1bm14In0.XS1ra3lyN5he_rsJP9lBHQ');

export default class LocationMap extends Component {
  constructor(props) {
    super(props); }
  
  renderAnnotations() {
    const longitude = this.props.longitude;
    const latitude = this.props.latitude;
    const address = this.props.address;
    const name = this.props.name
    const lastSeen= this.props.lastSeen
    
    const message = (name + '\n' + address + '\n' + lastSeen)
    return (
      <MapboxGL.PointAnnotation
        id={address}
        coordinate={[longitude, latitude]}
      >
        <View style={styles.annotationContainer}>
          <View style={styles.annotationFill} />
        </View>
        <MapboxGL.Callout title={message} />
      </MapboxGL.PointAnnotation>
    )
  }

  render() {
    return (
      <MapboxGL.MapView
      centerCoordinate={[-43.2096, -22.9035]}
      zoomLevel = {9}
      style={styles.container}
      showUserLocation = {true}
      styleURL={MapboxGL.StyleURL.Dark}
      >
      {this.renderAnnotations()}
      </MapboxGL.MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  annotationContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
  },
  annotationFill: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#0CA98E',
    transform: [{ scale: 0.8 }],
  }
});