import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, ActivityIndicator } from 'react-native';
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
      pickerId: 0,
      pickerValue: this.props.tags[0]['address'], //É O MAC_ADDRESS DA TAG
      auxName: this.props.tags[0]['name'],
      auxLatitude: this.props.tags[0]['latitude'],
      auxLongitude: this.props.tags[0]['longitude'],
      auxLastSeen: this.props.tags[0]['lastSeen'],
      loading: false
    }

  }


  
updateLocation() {
    
    const list = this.props.getBluetoothDevicesList();
    return list;
}


  
onPress() {
  this.setState({loading: true})
  this.updateLocation();
  setTimeout(() => {
    this.setState({loading: false});
  }, 10000)
  
}

componentDidMount() {
  this.setState({loading: false})
}

/* 
  getTagInfo () {
    let coordenadas = this.getActualLocation(this.props.tags, this.state.pickerValue)
    this.setState({
      auxLatitude: coordenadas.latitude,
      auxLongitude: coordenadas.longitude,
      auxName: coordenadas.name,
      pickerValue: coordenadas.address
    })
  }

  getActualLocation(tags, address) {
    const list = tags;
    let coord = {latitude: null, longitude:null}
      list.map(
        function (tag) {
          {if(tag.address === address )
            {  
              //return (location.latitude, location.longitude);
              coord.latitude = tag.latitude, 
              coord.longitude = tag.longitude,
              coord.name = tag.name
              coord.addres = tag.address
            }
          }
        }
      )
    return coord
  } */


  
  render() {
    
    return (
      <View style = {styles.container}>
        <View style = {styles.pickerContainer}>
          <Picker
            selectedValue={this.state.pickerValue}
            mode= {'dropdown'}
            style={styles.pickerStyle}
            onValueChange={(itemValue, itemIndex) => {
                this.setState(
                  {pickerValue: itemValue,
                    pickerId: itemIndex
              })          
            }}>   
              {this.props.tags.map((item, index) => {
                return (< Picker.Item label={item.name} value={item.address} key={item.address} />);
              })} 
          </Picker>
        </View>
        <View style = {styles.containerMap}>
          <LocationMap
            address = {this.state.pickerValue}
            latitude = {this.props.tags[this.state.pickerId]['latitude']}
            longitude = {this.props.tags[this.state.pickerId]['longitude']}
            name = {this.props.tags[this.state.pickerId]['name']}
            lastSeen = {this.props.tags[this.state.pickerId]['lastSeen']}
          />
        </View>
        <View style = {styles.containerInfo}>
          <View>
            <Text>Latitude: {this.props.tags[this.state.pickerId]['latitude']}</Text>
            <Text>Longitude: {this.props.tags[this.state.pickerId]['longitude']}</Text>
            <Text>Ultima vez visto em {this.props.tags[this.state.pickerId]['lastSeen']}</Text>
          </View>
          <View>
            {this.state.loading && (
              <ActivityIndicator
                style={{ height: 80 }}
                color="#F06E1B"
                size="large"
              />
            )}
            <Button style = {styles.button}
                onPress={() => {
                  this.onPress(); 
                }}
                raised
                backgroundColor= "#0E4252"
                borderRadius= {5}
                icon={{name: 'cached'}}
                title='Update Status' /> 
          </View>
        </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  containerMap: {
    flex: 4,
  },

  pickerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F06E1B', 
    flex: 1,

  },

  containerInfo: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff', 
    flex: 4
  },

  pickerStyle: {
    height: 50,
    width: 200,
    backgroundColor: '#FFF',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#F06E1B', 
    color: "#FFF",
    borderWidth: 2,
    borderColor: '#FFF'
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