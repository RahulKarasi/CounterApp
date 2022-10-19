import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';


export default class HomeScreen extends Component {

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.parentContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CounterApp')}>
          <Text style={styles.btnText}>Assignment1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('OttScreen')}>
          <Text style={styles.btnText}>Assignment2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('OtpScreen')}>
          <Text style={styles.btnText}>Assignment3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('ColorViewer')}>
          <Text style={styles.btnText}>Assignment4</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parentContainer: {
    flex:1,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3d004d',
    width: '65%',
    height:50,
    justifyContent:'center',
    margin:35,
    borderRadius:30
  },
  btnText:{
    textAlign:'center',
    color:'white',
    fontSize:17
  }
});
