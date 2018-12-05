import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Font from '../assets/fonts/fonts'
import { Button } from 'react-native-elements';


class NewTagButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  goToNewTagScreen() {
    this.props.navigation.navigate('NewTagScreen');
  }

  render() {
    return (
      <View> 
          <Button
              onPress={() => this.goToNewTagScreen()}
              raised
              borderRadius = {5}
              backgroundColor = '#0CA98E'
              icon={{name: 'feed', type: 'font-awesome'}}
              title='PAIR NEW TAG'  
            /> 
      </View>
    );
  }
}


export default withNavigation(NewTagButton);
