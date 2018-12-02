import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';
import LocationMap from '../components/LocationMap';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import { Button } from 'react-native-elements'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tagsActions from '../store/actions'

import { withNavigation } from 'react-navigation';

MapboxGL.setAccessToken('pk.eyJ1IjoibW9saW1hdCIsImEiOiJjam93dmpxcGIxN3F0M3ZucXoxamM1bm14In0.XS1ra3lyN5he_rsJP9lBHQ');

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickerValue: this.props.tags[0]['address'] //É O MAC_ADDRESS DA TAG
    }

  }

  componentDidUpdate () {
    console.log("Valor mudou para" + this.state.pickerValue)
  }

  onPress () {
    this.props.setLocation(this.state.pickerValue) 
    alert("Atualizado!")
  }

  render() {
    console.log(this.props)
    return (
      <View style = {styles.container}>
        <View style = {styles.pickerContainer}>
          <Picker
            selectedValue={this.state.pickerValue}
            mode= {'dropdown'}
            style={styles.pickerStyle}
            onValueChange={(itemValue) => (this.setState({pickerValue: itemValue}))}>   
              {this.props.tags.map((item, index) => {
                return (< Picker.Item label={item.name} value={item.address} key={item.address} />);
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
        <View>
          <Button style = {styles.button1}
              onPress={() => {
                this.onPress(); 
              }}
              raised
              icon={{name: 'cached'}}
              title='Update Status' /> 
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
    backgroundColor: '#333', 
    flex: 0.1
  },

  pickerStyle: {
    height: 50,
    width: 200,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  container: {
    flex: 1,
  }
})


const mapStateToPros = state => ({
  tags: state.tags
});

const mapDispatchToProps = dispatch => 
  (bindActionCreators(tagsActions, dispatch))

export default withNavigation(connect(mapStateToPros, mapDispatchToProps) (HomeScreen));