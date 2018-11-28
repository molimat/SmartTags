import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from '../constants/Colors';

 class TabBarIcon extends Component {
  render() {
    return (
      <Icon
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}

export default TabBarIcon;

