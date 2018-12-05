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
      message:""

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


    EasyBluetooth.init(config)
      .then(function (config) {
        console.log("config done!");
      })
      .catch(function (ex) {
        console.warn(ex);
      });
  
    this.setState({message: "Scanning devices..."})
    EasyBluetooth.startScan()
      .then(function (devices) {
        self.setState({message: "Scan finalizado."})
          if (!devices[0]) {
              self.setState({message: "Nenhuma SmartTAG encontrada :("})
              self.setState({loading: false})   
          } else  {   
                self.setState({message: "Tags disponiveis abaixo:"})
                self.setState({devices: devices})
                self.setState({loading: false})
                self.setState({found: true})
          }

        })
      .catch(function (ex) {
          console.warn(ex);
        });
        
  }


  render() { 
    return (
        <View style={styles.container}>
          {this.state.loading && (
            <ActivityIndicator
              style={{ height: 80 }}
              color="#C00"
              size="large"
            />
          )}
          <View style={styles.listContainer}>
            { this.state.found && <Text style = {styles.tittle}>{this.state.message}</Text> }
            { this.state.found && <NewTagList devices = {this.state.devices}/> }
          </View>
          <View style={styles.imageContainer}>
           

            { !(this.state.loading) && !(this.state.found) &&

            <Image
            style={styles.image}
            source={require('../assets/images/robot-prod.png')}/> } 

            { !(this.state.loading) && !(this.state.found) &&
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

  listContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  image: {
    height: 150,
    width: 150,
    margin: 20
  },

  tittle: {
    fontSize: 25,
    alignSelf: 'center',
    paddingTop: 40,
    color: "#999"
  },

  info: {
    fontSize: 15,
    color: "#999",
    alignItems: 'center',
  }
})

export default NewTagScreen;
