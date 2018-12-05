import React,  { Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome' 
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
                <View  style = {styles.textContainer}>
                    <Text style = {styles.nameNew}>{this.state.deviceName}</Text>
                    <Text style = {styles.addressNew}>{this.state.deviceAddress}</Text> 
                </View>
                <View>
                    <TouchableHighlight style = {styles.button}>
                        <Icon   name = "check" 
                            size= {40} 
                            color= "#FFFF"
                            onPress={() => {
                                this.onPress();
                            }}
                        />
                    </TouchableHighlight>    
                </View> 
            </View>
        )

    }
}
const styles = StyleSheet.create({


    containerNew: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        backgroundColor: "#0CA98E",
        flex: 0.3,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.6,
        shadowRadius: 2,
        elevation: 5
    },

    nameNew: {
        color: "#FCF9F9",
        fontSize : 20,
        alignSelf: 'flex-end',
    },

    textContainer: {
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'column',

        marginLeft: 15,
    },

    nameNew: {
        color: "#FCF9F9",
        fontSize : 20,
        alignSelf: 'auto',
    },

    addressNew: {
        color: "#FCF9F9",
        fontSize : 8,
        alignSelf: 'auto',
        marginLeft: 5
    },


});


const mapStateToPros = state => ({
    tags: state.tags
  });
  
const mapDispatchToProps = dispatch => 
    (bindActionCreators(tagsActions, dispatch))
  
export default withNavigation(connect(mapStateToPros, mapDispatchToProps) (NewTagItem));



