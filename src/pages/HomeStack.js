import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';
import LocationMap from '../components/LocationMap';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

MapboxGL.setAccessToken('pk.eyJ1IjoibW9saW1hdCIsImEiOiJjam93dmpxcGIxN3F0M3ZucXoxamM1bm14In0.XS1ra3lyN5he_rsJP9lBHQ');

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [{}]
    };
  }

  componentDidMount () {
    let { params } = this.props.navigation.state;
    this.setState(Object.assign(this.state.tags, params.tags))
  }

  componentWillUpdate () {
    console.log(this.state.tags)
  }
  

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.pickerContainer}>
          <Picker
            selectedValue={this.state.language}
            mode= {'dropdown'}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) => this.setState(console.log("mudou para" + item.value))}>   
              {this.state.tags.map((item, index) => {
                return (< Picker.Item label={item.name} value={index} key={index} />);
              })} 
          </Picker>
        </View>
        <Text>Mapa abaixo</Text>
        <View style = {styles.containerMap}>
          <LocationMap
            longitude = {-43.3527}
            latitude = {-22.8973}
          />
        </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  containerMap: {
    flex: 0.5,
  },

  pickerContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    color: '#445870' 
  },

  container: {
    flex: 1,
  }
})
export default HomeScreen;

