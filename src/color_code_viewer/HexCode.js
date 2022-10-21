import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';


export class HexCode extends Component {
  constructor() {
    super();
    this.state = {
      hexCode: '',
      color: '',
    };
  }

  handlePress = () => {
    this.setState({color: this.state.hexCode});
  };

  render() {
    return (
      <SafeAreaView style={styles.parentContainer}>
        <Text style={styles.header}>Color Code Viewer</Text>
        <View style={styles.blankSpace} />
        <View style={styles2(this.state.color).display} />
        <View style={styles.blankSpace} />
        <TextInput
          style={styles.textInput}
          placeholder="Enter Hex Code"
          onChangeText={hexcode => this.setState({hexCode: hexcode})}
          autoCapitalize="none"
        />
        <View style={styles.blankSpace} />
        <TouchableOpacity style={styles.button} onPress={this.handlePress}>
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles2 = color =>
  StyleSheet.create({
    display: {
      width: '40%',
      height: 100,
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor: color,
    },
  });

const styles = StyleSheet.create({
  parentContainer: {
    alignItems: 'center',
  },
  header: {
    marginVertical: 20,
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 2,
    color: 'red',
  },
  blankSpace: {
    height: 40,
  },
  textInput: {
    height: 50,
    width: '50%',
    borderWidth: 0.7,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 17,
  },
  button: {
    // borderWidth:1,
    width: '40%',
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: 'rgb(59,106,246)',
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
  },
});

export default HexCode;
