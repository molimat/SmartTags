import React, { Component } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NewTagButton from '../components/NewTagButton';

import 'moment/min/moment-with-locales';

import * as tagsActions from '../store/actions';
import TagList from '../components/TagList';


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
      period: 30000,
      alwaysRunning: true,
      exact: true,
      allowWhileIdle: true,
      allowExecutionInForeground: false,
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
        <Text style = {styles.tittle}> SmartTAG</Text>
      { (this.props.tags[0]) &&
        <View>
          

          <TagList  devices = {this.props.tags} origem = 'MyTag'/>     
          
          <View style={styles.legenda}>
            <View style={styles.annotationContainer}>
                  <View style={styles.annotationFill} backgroundColor = "#AD2021" />
                  <Text style={styles.annotationText}>smartTAG disconectada há mais de uma hora.</Text>
            </View> 
            <View style={styles.annotationContainer}>
                  <View style={styles.annotationFill} backgroundColor = "#F06E1B" />
                  <Text style={styles.annotationText}>smartTAG disconectada por até quinze minutos</Text>
            </View> 
            <View style={styles.annotationContainer}>
                  <View style={styles.annotationFill} backgroundColor = "#0CA98E" />
                  <Text style={styles.annotationText}>smartTAG conectada há menos de cinco minutos</Text>
            </View> 
          </View>
      </View> }
      { 
        !(this.props.tags[0]) && //LEMBRAR DE COLOCAR ! AQUI
        <View style={styles.imageContainer}>
          <Image
          style={styles.image}
          source={require('../assets/images/robot-dev.png')}/> 
          <Text style={styles.noTagText}>Parece que você não possui nenhuma SmartTaG cadastrada</Text>
          <Text style={styles.noTagText}>Adicione uma para começar</Text>
        </View >
      } 
        <View style = {styles.addButton}>
          <NewTagButton/>
        </View> 
      </View>
    );
  }
}

{/* <Input value = {textInput} onChangeText = {(e) => {this.onChangeText(e)}} />
        <Button style = {styles.button2}
          onPress={() => {this.onPress()}}
          raised
          backgroundColor = '#333'
          icon={{name: 'pencil', type: 'font-awesome'}}
          title='ADICIONAR TAG'  
        />  */}


const styles = StyleSheet.create ({
  container: {
    flex:1,
    backgroundColor: "#FFFFFF"
   
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
  noTagText: {

    fontSize: 15,
    color: "#999"
  },

  image: {
    marginTop: 80,
    height: 150,
    width: 150,
    margin: 20

  },
  imageContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center'
    },
  legenda: {
    marginTop: 30
  },
  annotationContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginLeft: 15,
    flexDirection: 'row',
  },
  annotationFill: {
    width: 15,
    height:15,
    borderRadius: 15,
    transform: [{ scale: 0.8 }],
  },
  annotationText: {
    marginLeft: 5,
    color: "#999",
    fontSize: 10,
  },

  tittle: {
    fontSize: 40,
    alignSelf: 'center',
    paddingTop: 40,
    color: "#999"
  },

  addButton: {
    justifyContent: 'flex-end',
    alignSelf: 'center',
    flex: 1,
    marginBottom: 100,
    borderRadius: 10,

  }



});

const mapStateToPros = state => ({
  tags: state.tags
});

const mapDispatchToProps = dispatch => 
  (bindActionCreators(tagsActions, dispatch))

export default connect(mapStateToPros, mapDispatchToProps) (TagsScreen);
