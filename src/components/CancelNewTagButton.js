import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import Font from '../assets/fonts/fonts'

class CancelNewTagButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  goToHomeScreen() {
    this.props.navigation.navigate('HomeStack');
  }

  render() {
    return (
      <View>
          <TouchableOpacity onPress={() => this.goToHomeScreen()} style = {styles.buttonContainer}>
            <Icon 
              name = "md-close"   
              color = 'red'
            />
            <Text style = { styles.buttonText }> Cancel </Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10
    },
    buttonText: {
      color: 'red',
      fontSize: 12,
      fontFamily: Font.buttonFont
    },
    buttonContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: 'red',
      borderRadius: 10,
      height: 30,
      width: 60
    }
  })

export default withNavigation(CancelNewTagButton);
