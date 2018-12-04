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
            name = {device.name}/>
     );


     return (
        <View key = {items.address} styles = {styles.container}>
          {items}
        </View>
      );
}



const styles = StyleSheet.create({
    container : {
        alignItems:'center',
        
  
    }
  })

export default TagList;
