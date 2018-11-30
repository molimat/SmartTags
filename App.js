import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { PersistGate } from 'redux-persist/integration/react';
import factory from './src/store';
import { Provider } from 'react-redux';
import { store, persistor } from './src/store';





export default class App extends React.Component {

  
  render() {
    return (
        <Provider store = {store} >
          <PersistGate loading ={null} persistor = {persistor} >
            <View style={styles.container}>
              <AppNavigator/>    
            </View>
          </PersistGate>
        </Provider> 
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
