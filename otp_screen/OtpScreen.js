import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {Component} from 'react';

export class OtpScreen extends Component {
  constructor() {
    super();
    this.state = {
      num1: '',
      num2: '',
      num3: '',
      num4: '',
    };
    const ref = [];
  }
  render() {
    return (
      <View style={styles.mainView}>
        <SafeAreaView style={styles.safeAreaView}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Log into Saavn</Text>
          </View>
        </SafeAreaView>

        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.descText}>Enter your code</Text>
          </View>

          <View style={styles.otpSection}>
            <TextInput
              ref={'num1ref'}
              onChangeText={num1 => {
                this.setState({num1: num1});
                if (num1 != '') {
                  this.refs.num2ref.focus();
                }
              }}
              value={this.state.num1}
              maxLength={1}
              style={styles.textBox}
            />
            <TextInput
              ref={'num2ref'}
              onChangeText={num2 => {
                this.setState({num2: num2});
                if (num2 !== '') {
                  this.refs.num3ref.focus();
                }
              }}
              value={this.state.num2}
              maxLength={1}
              style={styles.textBox}
              onKeyPress={({nativeEvent}) => {
                if (
                  nativeEvent.key === 'Backspace' &&
                  this.state.num2 == '' &&
                  this.state.num1 != ''
                ) {
                  this.refs.num1ref.focus();
                  this.setState({num1: ''});
                }
              }}
            />
            <TextInput
              ref={'num3ref'}
              onChangeText={num3 => {
                this.setState({num3: num3});
                if (num3 != '') {
                  this.refs.num4ref.focus();
                }
              }}
              value={this.state.num3}
              maxLength={1}
              style={styles.textBox}
              onKeyPress={({nativeEvent}) => {
                if (
                  nativeEvent.key === 'Backspace' &&
                  this.state.num3 == '' &&
                  this.state.num2 != ''
                ) {
                  this.refs.num2ref.focus();
                  this.setState({num2: ''});
                }
              }}
            />
            <TextInput
              ref={'num4ref'}
              onChangeText={num4 => {
                this.setState({num4: num4});
              }}
              value={this.state.num4}
              maxLength={1}
              style={styles.textBox}
              onKeyPress={({nativeEvent}) => {
                if (
                  nativeEvent.key === 'Backspace' &&
                  this.state.num4 == '' &&
                  this.state.num3 != ''
                ) {
                  this.refs.num3ref.focus();
                  this.setState({num3: ''});
                }
              }}
            />
          </View>

          <View style={styles.emptySpace} />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  safeAreaView: {
    backgroundColor: 'rgb(110,186,121)',
  },
  header: {
    height: 45,
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
    paddingTop: 15,
    fontWeight: '600',
    fontSize: 17,
  },
  content: {
    //toDo
  },
  textContainer: {
    height: 140,
    alignItems: 'center',
    // backgroundColor:'red',
    justifyContent: 'center',
  },
  descText: {
    fontSize: 19,
  },
  otpSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  textBox: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderRadius: 4,
    marginHorizontal: 9,
    textAlign: 'center',
  },
  emptySpace: {
    height: 80,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: '69%',
    borderWidth: 1.6,
    borderColor: 'green',
    marginHorizontal: 64,
    borderRadius: 3,
  },
  btnText: {
    color: 'green',
    fontSize: 17,
  },
});

export default OtpScreen;
