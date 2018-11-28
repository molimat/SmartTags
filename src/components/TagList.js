import React from 'react';
import { View,  StyleSheet } from 'react-native';

import TagItem from '../components/TagItem'


const TagList = props => {

    const devicesList = props.devices;
    const origem = props.origem;

    //aqui a gente vai passar device a device para a page TagItem
    const items = devicesList.map((device) => 
        <TagItem 
            key = {device.id}       
            address = {device.address} 
            name = {device.name}
            origem = {origem}/>
     );


     return (
        <View key = {items.id} styles = {styles.container}>
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
