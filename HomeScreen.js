import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import React, {Component} from 'react';


export default class HomeScreen extends Component {

  render() {
    const { navigation } = this.props
    return (
      <ScrollView>
      <View style={styles.parentContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('BackPressAlert')}>
          <Text style={styles.btnText}>BackPress Alert</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SectionList')}>
          <Text style={styles.btnText}>Section List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('WebView')}>
          <Text style={styles.btnText}>WebView</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SwitchSlider')}>
          <Text style={styles.btnText}>Switch Slider</Text>
        </TouchableOpacity>
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
      </ScrollView>
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
    width: '63%',
    height:45,
    justifyContent:'center',
    margin:18,
    borderRadius:30
  },
  btnText:{
    textAlign:'center',
    color:'white',
    fontSize:16
  }
});
