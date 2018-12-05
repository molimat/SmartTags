import React, { Component } from 'react';
import { View,StyleSheet } from 'react-native';

class IsOnline extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

  }

  render() {
    return (
        <View style={styles.annotationContainer}>
            <View style={styles.annotationFill} backgroundColor = {this.props.color} />
        </View>
    );
  }
}

export default IsOnline;


const styles = StyleSheet.create({
    annotationContainer: {
        width: 15,
        height: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
      },
      annotationFill: {
        width: 15,
        height:15,
        borderRadius: 15,
        transform: [{ scale: 0.8 }],
      }
})