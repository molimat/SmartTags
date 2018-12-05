import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome' 
import {connectToDevice, sendChar} from '../functions/Bluetooth'

import IsOnline from '../components/IsTheTagOnline'


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tagsActions from '../store/actions';

import moment from 'moment';

class TagItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
          textInput: "",
        }
      }
    

    isOnline (address) {
    const color = this.props.tags.map(tag => {
            if (tag.address === address) {
                let now =  moment();
                let then = moment(this.props.lastSeen);
                let result = now.diff(then, 'minutes')
               
                if (result > 60) {
                    return "#AD2021"
                } else if (result > 5 ) {
                    return "#F06E1B"
                } else {
                    return "#0CA98E"
                }
            }
        })
        return(color)
    }

   render () {
        const {address, name} = this.props;
        
        const device = {address: this.address, name:this.name}
        return (
            <View style = {styles.container}>
                <IsOnline color = {this.isOnline(address)}/>
                <View style = {styles.textContainer}>
                    <TouchableHighlight onLongPress = {()=>{return 1}}>
                        <Text style = {styles.name}>{name}</Text>
                    </TouchableHighlight>
                        <Text style = {styles.address}>{address}</Text>   
                </View>
                <View style = {styles.menuContainer}>
                   {/*  <TouchableHighlight style = {styles.buttonItemCont}>
                            <Icon   name = "pencil" style = {styles.buttons}
                                size= {20} 
                                onPress={() => connectToDevice(device)}/>
                    </TouchableHighlight> */}    
                    <TouchableHighlight style = {styles.buttonItemCont}>
                            <Icon   name = "trash-o" style = {styles.buttons}
                                size= {20} 
                                onPress={() => this.props.removeTag(address)}/>
                    </TouchableHighlight>    
                </View>
            </View>
        
        )
    
    } 
}

const mapStateToPros = state => ({
    tags: state.tags
  });
  
const mapDispatchToProps = dispatch => 
  (bindActionCreators(tagsActions, dispatch))

export default connect(mapStateToPros, mapDispatchToProps) (TagItem);

const styles = StyleSheet.create({
    
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderRadius: 10,
        backgroundColor: "#0E4252",
        flex: 0.3,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.6,
        shadowRadius: 2,
        elevation: 5
    },
   
   
    address: {
        color: "#FCF9F9",
        fontSize : 8,
        alignSelf: 'auto',
        marginLeft: 5
    },

    textContainer: {
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        flex: 5,
        marginLeft: 15,
    },

    menuContainer: {
        alignSelf: 'center',
        flexDirection: 'row',
        flex: 3,
        justifyContent: 'flex-end',
        marginRight: 20
    },



    name: {
        color: "#FCF9F9",
        fontSize : 20,
        alignSelf: 'auto',
    },

    buttons: {
        color: "#FCF9F9",
        paddingLeft: 20

    },

 



});


