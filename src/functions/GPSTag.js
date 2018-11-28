
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import storage from './Storage';
import EasyBluetooth from 'easy-bluetooth-classic';
import { Button} from 'react-native-elements'

class Geolocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coordinates: {latitude: null,
                    longitude: null},
      error: null,
      tags: null, 
      data: null,
      keys: [],
      mensagem: 0,
    };
  }

  componentDidMount() {
   
    //PEGA A POSIÇÃO
    console.log("Definindo latitude e longitude")
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          coordinates: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    console.log("Coordenadas: " + this.state.coordinates)



    //REQUISIÇÃO DAS KEYS
    console.log("Requisitar as keys")
    var self = this;
    storage.getKeys() //tem que esperar a promise
          .then(function (keys) {
              self.setState({keys: keys})
            }
          )
          console.log(this.state.keys + "retornadas")


    //MODULO DE BLUETOOTH AQUI PARA FRENTE

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
      

      this.onDeviceFoundEvent = EasyBluetooth.addOnDeviceFoundListener(
        this.onDeviceFound.bind(this)
      ); 

      this.setTagPosition (this.state.keys, this.state.coordinates)

  }  

  onDeviceFound(device) {
    console.log("Ondevice FOUNd foi chamada")
    if (!devices[0]) {
      console.log("Mas nao achou nada")
      return 1
    } else {
      console.log("Achou o device" + device)
      return device
    }
  }

  setTagPosition(keys, coordinates){
    console.log("Preparando para setar as coordenadas dos dispositivos achados")
    for (let index = 0; index < keys.length; index++) {
      const aux = onDeviceFound(keys[index]);
      if (aux !== 1) {
        storage.mergeItem(keys[index], coordinates)
        console.log("Item mesclados" + keys[index],coordinates)
      }
    }
  }



  render() {
    const coordenadas = JSON.stringify(this.props.coordinates)
    return (
      <View>
      <Text>Estados:</Text>
      <Text> {this.state.mensagem} </Text>
      <Text> {coordenadas} </Text>
      <Text> {this.state.data} </Text>
      <Text> {this.state.error}</Text>
      <Text> {this.state.tags}</Text>


      <Button 
            onPress={() => {
                (this.setState({mensagem: this.state.mensagem +1}))}}
            raised
            icon={{name: 'cached'}}
            title='state change' 
        /> 
      </View>
    );
  }
}

export default Geolocation;
