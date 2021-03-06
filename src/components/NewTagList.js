import React from 'react';
import { View,  StyleSheet } from 'react-native';

import NewTagItem from './NewTagItem'


const NewTagList = props => {

    const devicesList = props.devices;

    //aqui a gente vai passar device a device para a page TagItem
    const items = devicesList.map((device) => 
        <NewTagItem 
            key = {device.address}       
            address = {device.address} 
            name = {device.name}/>
     );


     return (
        <View key = {items.address} style = {styles.container}>
          {items}
        </View>
      );
}



const styles = StyleSheet.create({
    container : {
        alignItems:'center',
        justifyContent: 'space-evenly',
        height: 250,
        width: 400,
        alignItems: 'stretch',
        marginLeft: 10,
        marginRight: 10,
       
  
    }
  })

export default NewTagList;
