import React from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons' 
import storage from '../functions/Storage'
import {connectToDevice, sendChar} from '../functions/Bluetooth'


const TagItem = (props) => {
    const {address, name, origem } = props;
    const self = this;
    const device = {address: this.address, name:this.name}

    if (origem === 'MyTag' ) {
   
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
    else {
        return (
            <View style = {styles.containerNew}>
                    <Text style = {styles.addressNew}>{address}</Text> 
                    <Text style = {styles.nameNew}>{name}</Text>
                    <View>
                        <TouchableHighlight>
                            <View>
                                <Icon   name = "ios-add-circle-outline" 
                                    size= {30} 
                                    onPress={() => storage.pushData(address, name)}/>
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

export default TagItem;

