import React, { Component } from 'react';
import { View,StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tagsActions from '../store/actions';
import moment from 'moment';

class IsOnline extends Component {
  constructor(props) {
    super(props);
    this.state = {
        color: "#666"
    };
  }

  componentDidMount () {
      this.isOnline();
  }

  isOnline () {

    let now =  moment();
    let then = moment(this.props.lastSeen);
    let result = now.diff(then, 'minutes')

    if (result > 60) {
        this.setState({color: "#AD2021"})
    } else if (result > 5 ) {
    this.setState({color: "#F06E1B"})
    } else {
    this.setState({color: "#0CA98E"})
    }
 }

  render() {
    return (
        <View style={styles.annotationContainer}>
            <View style={styles.annotationFill} backgroundColor = {this.state.color} />
        </View>
    );
  }
}

const mapStateToPros = state => ({
  tags: state.tags
});

const mapDispatchToProps = dispatch => 
  (bindActionCreators(tagsActions, dispatch))

export default connect(mapStateToPros, mapDispatchToProps) (IsOnline);


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