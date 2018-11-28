import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import NewTagButton from '../components/NewTagButton';
import { Button, Divider } from 'react-native-elements'


import TagList from '../components/TagList';
import storage from '../functions/Storage';
import { Object } from 'core-js';
import TabBarIcon from '../components/TabBarIcon';
//import { TagPosition } from '../functions/GPSTag'

class TagsScreen extends Component {
  constructor(props) {
    super(props);
    
    this.state = {message:"",
                  pairedDevices: [{}], 
  
    };
  }

  componentDidMount () {
    var self = this;
    storage.getAllData() //tem que esperar a promise
          .then(function (devices) {
              self.setState({message: "Scaneamento finalizado.",
              pairedDevices: devices}
              );

        })
          .catch(()=> console.log("Promise rejected"))
  }
  

  

  render() {
    
    return (
      <View style = {styles.container}>

        <Text>{this.state.message}</Text>
  
        <TagList  devices = {this.state.pairedDevices} origem = 'MyTag'/>
        <NewTagButton/>
        <View style = {styles.divContainer}>
          <Button style = {styles.button1}
            onPress={() => {
              this.setState({
              message: "Clicado",
            })}}
            raised
            icon={{name: 'cached'}}
            title='Refresh Tags' />
          <Button style = {styles.button2}
            onPress={() => {
                storage.removeTags()}}
            raised
            backgroundColor = '#F24333'
            icon={{name: 'warning', type: 'font-awesome'}}
            title='Remove Tags'  
          />
          <Button style = {styles.button2}
            onPress={() => {
                this.props.navigation.navigate('HomeStack', {
                  tags: this.state.pairedDevices
                })}}
            raised
            backgroundColor = '#645DD7'
            icon={{name: 'pencil', type: 'font-awesome'}}
            title='Edit Tags'  
          />         
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create ({
  container: {
    flex:1
   
  },
  button1: {
    flex: 0.5,
    fontSize: 10
  },
  button2: {
    fontSize: 10
  },
  divContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 0.5

    
  },
  input: {
    display: 'none',
  },
});

export default TagsScreen;
