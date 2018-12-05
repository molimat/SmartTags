import React from 'react';
import { View,  StyleSheet } from 'react-native';

import TagItem from '../components/TagItem'


const TagList = props => {

    const devicesList = props.devices;

    //aqui a gente vai passar device a device para a page TagItem
    const items = devicesList.map((device) => 
        <TagItem 
            key = {device.address}       
            address = {device.address} 
            name = {device.name}
            lastSeen = {device.lastSeen} />
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
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        height: 200,
        alignItems: 'stretch',
        marginLeft: 10,
        marginRight: 10,
       
  
    }
  })

export default TagList;
