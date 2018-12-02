import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import MainTabNavigator from '../navigation/MainTabNavigator';
import CancelNewTagButton from '../components/CancelNewTagButton';

import EasyBluetooth from 'easy-bluetooth-classic';
import NewTagList from '../components/NewTagList';



class NewTagScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: [],
      ready: false,
      loading: true,
      message: "",
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
  
    this.setState({message: "Scanning devices.."})
    EasyBluetooth.startScan()
      .then(function (devices) {
        self.setState({message: "Scaneamento finalizado."})
          if (!devices[0]) {
              self.setState({message: "Nenhuma tag encontrada."})
              self.setState({loading: false})
          } else  {   
                self.setState({message: "Tags disponiveis abaixo."})
                self.setState({devices: devices})
                self.setState({ready: true})
                self.setState({loading: false})
          }

        })
      .catch(function (ex) {
          console.warn(ex);
        });
        
  }


  render() { //corrigir o loading pra ficar maneiro
    return (
      <View>
        <Text style = {styles.info}>{this.state.message}</Text>
        { this.state.ready && <NewTagList devices = {this.state.devices}/> } 
        <CancelNewTagButton />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  cancelButton : {

  },

  info: {
    fontSize: 20
  }
})

export default NewTagScreen;
