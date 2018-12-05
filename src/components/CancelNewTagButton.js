import React, { Component } from 'react';
import { View} from 'react-native';
import { withNavigation } from 'react-navigation';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class CancelNewTagButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
 

  goToHomeScreen() {
    this.props.navigation.navigate('TagStack');;
  }

  render() {
    return (
      <View>
          <Button
            onPress={() => this.goToHomeScreen()}
            raised
            backgroundColor = '#AD2021'
            icon={{name: 'close', type: 'font-awesome'}}
            title='Cancel'  
            borderRadius = {5}
          />
      </View>
    );
  }
}


export default withNavigation(CancelNewTagButton);
