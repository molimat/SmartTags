import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Geolocation from '../functions/GPSTag'


class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Geolocation></Geolocation>
        
      </View>
    );
  }
}

export default SettingsScreen;
