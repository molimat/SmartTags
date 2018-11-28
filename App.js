import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { PersistGate } from 'redux-persist/integration/react';
import factory from './src/reducers/configureStore';
import { Provider } from 'react-redux';





export default class App extends React.Component {

  
  render() {
    return (
    
          <View style={styles.container}>
            <AppNavigator/>    
          </View>

      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
