import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NewTagButton from '../components/NewTagButton';
import { Button } from 'react-native-elements'
import moment from 'moment';
import 'moment/min/moment-with-locales';

import * as tagsActions from '../store/actions';
import TagList from '../components/TagList';

import Input from '../components/textInput'

// O QUE RODA EM BACKGROUND DEVE SER INTANCIADO ANTES DO COMPONENTE
import BackgroundJob from "react-native-background-job";



class TagsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: "",
    }
  }

  componentDidMount () {
    BackgroundJob.cancelAll();
    const everRunningJobKey = "everRunningJobKey";
    BackgroundJob.register({
      jobKey: everRunningJobKey,
      job: () => {this.backgroundRunning()}
    });
    
    BackgroundJob.schedule({
      jobKey: everRunningJobKey,
      period: 20000,
      alwaysRunning: true,
      exact: true,
      allowWhileIdle: true,
      allowExecutionInForeground: true,
      notificationTitle: "SmartTags",
      notificationMessage: "On Background"
    })  
  }

  addNewTag = () => {
    this.props.addTagFake(this.state.textInput)
    this.setState({textInput: ''})
  }

  onChangeText(text) {
    this.setState({
      textInput: text
    })
  }

  onPress(){
    this.addNewTag(this.state.textInput)
  }

  backgroundRunning = () => {
    this.props.getBluetoothDevicesList();    
  }

  
  render() {
    const { textInput } = this.state
    return (
      <View style = {styles.container}>

        <Text>{this.state.message}</Text>
  
        <TagList  devices = {this.props.tags} origem = 'MyTag'/>
        <NewTagButton/>
        <View style = {styles.divContainer}>
          <Button style = {styles.button1}
            onPress={() => {
              this.setState({
              message: "Clicado",
            })}}
            raised
            icon={{name: 'cached'}}
            title='Update Status' /> 
          <Button style = {styles.button2}
            onPress={() => {
                this.props.getBluetoothDevicesList()}}
            raised
            backgroundColor = '#F24333'
            icon={{name: 'warning', type: 'font-awesome'}}
            title='Get Devices Lsit'  
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
          <View>
            
            <Input value = {textInput} onChangeText = {(e) => {this.onChangeText(e)}} />
            <Button style = {styles.button2}
              onPress={() => {this.onPress()}}
              raised
              backgroundColor = '#333'
              icon={{name: 'pencil', type: 'font-awesome'}}
              title='ADICIONAR TAG'  
            /> 
          </View>      
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



});

const mapStateToPros = state => ({
  tags: state.tags
});

const mapDispatchToProps = dispatch => 
  (bindActionCreators(tagsActions, dispatch))

export default connect(mapStateToPros, mapDispatchToProps) (TagsScreen);
