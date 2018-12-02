import React from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons' 
import {connectToDevice, sendChar} from '../functions/Bluetooth'



const TagItem = (props) => {
    const {address, name } = props;
    const device = {address: this.address, name:this.name}
   
        return (
            <View style = {styles.container}>
                    <Text style = {styles.address}>{address}</Text>
                    <Text style = {styles.name}>{name}</Text> 
                    <View>
                        <TouchableHighlight>
                            <View>
                                <Icon   name = "ios-cellular" 
                                    size= {30} 
                                    onPress={() => connectToDevice(device)}/>
                            </View>
                        </TouchableHighlight>    
                    </View>
                    <View>
                        <TouchableHighlight>
                            <View>
                                <Icon   name = "ios-alert" 
                                    size= {30} 
                                    onPress={() => sendChar()}/>
                            </View>
                        </TouchableHighlight>    
                    </View>
            </View>
        
        )
    
    
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

export default TagItem;


