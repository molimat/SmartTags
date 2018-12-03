import React,  { Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons' 
import {connectToDevice, sendChar} from '../functions/Bluetooth'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tagsActions from '../store/actions'
import { withNavigation } from 'react-navigation';


// NEW TAG ITEM
// ESSA PAGINA É CHAMADA DE DENTRO DO NEW TAG
// oi
class NewTagItem extends Component {
    constructor(props) {
      super(props);
      this.state = {
        deviceName: "",
        deviceAddress: "",
      }
    }

    componentDidMount () {
        this.setState({deviceName: this.props.name, deviceAddress: this.props.address})
    }

    /* const {address, name } = props;
    const device = {address: this.address, name:this.name} */

    addNewTag = () => {
        const tag = {name: this.state.deviceName, 
                    address: this.state.deviceAddress,
                    latitude: null,
                    longitude: null
                }
        
        this.props.addTag(tag)
        this.props.setLocation(tag.address)
        this.setState({deviceName: ''})
        this.props.navigation.navigate('TagStack')
    }

    onPress = () => { this.addNewTag(this.state.deviceName)}


    render () {

        return (

            <View style = {styles.containerNew}>
                    <Text style = {styles.addressNew}>{this.state.deviceAddress}</Text> 
                    <Text style = {styles.nameNew}>{this.state.deviceName}</Text>
                    <View>
                        <TouchableHighlight>
                            <View>
                                <Icon   name = "ios-add-circle-outline" 
                                    size= {30} 
                                    onPress={() => {
                                        this.onPress();
                                    }}

                                    />
                            </View>
                        </TouchableHighlight>    
                    </View> 
            </View>
        )

    }
}
const styles = StyleSheet.create({
    address: {
        fontSize : 20,
        color: '#333',
        alignSelf: 'auto',
    },

    container: {
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 10,
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },

   
    id: {
        fontSize : 20,
        color: '#333',
        alignSelf: 'auto',
    },

    name: {
        fontSize : 10,
        color: '#333',
        alignSelf: 'auto',
    },

    containerNew: {
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 10,
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    nameNew: {
        fontSize : 20,
        color: '#333',
        alignSelf: 'auto',
    },
    idNew: {
        fontSize : 10,
        color: '#333',
        alignSelf: 'auto',
    },
    addressNew: {
        fontSize : 20,
        color: '#333',
        alignSelf: 'auto',
    },


});


const mapStateToPros = state => ({
    tags: state.tags
  });
  
const mapDispatchToProps = dispatch => 
    (bindActionCreators(tagsActions, dispatch))
  
export default withNavigation(connect(mapStateToPros, mapDispatchToProps) (NewTagItem));



