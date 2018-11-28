import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Font from '../assets/fonts/fonts'

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
          <TouchableOpacity style = {styles.buttonContainer} onPress={() => this.goToNewTagScreen()}>
            <Icon 
              name = "ios-add"   
              color = 'green'
              size = {15}
            />
            <Text style = {styles.buttonText}> Add Tag</Text>
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
    color: 'green',
    fontSize: 12,
    fontFamily: Font.buttonFont
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1.5,
    borderColor: 'green',
    borderRadius: 10,
    height: 30,
    width: 70
  }
})

export default withNavigation(NewTagButton);
