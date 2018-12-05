import React, { Component,  } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import MainTabNavigator from '../navigation/MainTabNavigator';
import CancelNewTagButton from '../components/CancelNewTagButton';

import EasyBluetooth from 'easy-bluetooth-classic';
import NewTagList from '../components/NewTagList';



class NewTagScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: [],
      loading: true,
      found: false,
      message: "AHHH"
    };
    
  }
  
  
  

 
  componentDidMount () {
    var self = this;
    var config = {
      "uuid": "00001101-0000-1000-8000-00805f9b34fb",
      "deviceName": "Bluetooth Example Project",
      "bufferSize": 1024,
      "characterDelimiter": "\n"

      
      
    }

  /*   navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({devices: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }});
      },
      (error) => {console.log(error)},
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    ); */



    EasyBluetooth.init(config)
      .then(function (config) {
        console.log("config done!");
      })
      .catch(function (ex) {
        console.warn(ex);
      });
  
  
    EasyBluetooth.startScan()
      .then(function (devices) {
          if (!devices[0]) {
              self.setState({found: false})
              self.setState({loading: false})
              self.setState({message: "Nenhuma SmartTag encontrada ;["})
          } else  {   
                self.setState({devices: devices})
                self.setState({loading: false})
                self.setState({found: true})
          }

        })
      .catch(function (ex) {
          console.warn(ex);
        });
        
  }


  render() { //corrigir o loading pra ficar maneiro
    return (
        <View style={styles.container}>
          {this.state.loading && (
            <ActivityIndicator
              style={{ height: 80 }}
              color="#C00"
              size="large"
            />
          )}
          <View style={styles.imageContainer}>
            { !(this.state.loading) && <NewTagList devices = {this.state.devices}/> }

            { !(this.state.loading) && !(this.state.found) &&

            <Image
            style={styles.image}
            source={require('../assets/images/robot-prod.png')}/> } 

            { !(this.state.loading) && !(this.state.loading) &&
              <Text style = {styles.info}>{this.state.message}</Text> } 
           
                    
          </View>
          <View>
            <CancelNewTagButton />
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  image: {
    height: 150,
    width: 150,
    margin: 20
  },

  info: {
    fontSize: 15,
    color: "#999",
    alignItems: 'center',
  }
})

export default NewTagScreen;
