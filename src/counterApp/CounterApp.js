import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import CounterDisplay from './CounterDisplay';

class CounterApp extends Component {
  constructor() {
    super();
    this.state = {counter: 0};
    console.log('Parent Constructor called');
  }

  static getDerivedStateFromProps() {
    console.log('Parent getDerivedStateFromProps called');
    return null;
  }

  componentDidMount() {
    console.log('Parent componentDidMount called');
  }

  componentDidUpdate() {
    console.log('Parent componentDidUpdate called');
  }

  shouldComponentUpdate() {
    console.log('Parent shouldComponentUpdate called');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('Parent getSnapshotBeforeUpdate called');
    return null;
  }

  componentWillUnmount() {
    console.log('Parent componentWillUnmount');
  }

  incrimentBtn = () => {
    if (this.state.counter < 10) {
      this.setState({counter: this.state.counter + 1});
    } else {
      Alert.alert('Max Count Reached');
    }
  };

  decrementBtn = () => {
    if (this.state.counter > 0) {
      this.setState({counter: this.state.counter - 1});
    } else {
      Alert.alert('Min Count Reached');
    }
  };

  resetBtn = () => {
    this.setState({counter: 0});
  };

  render() {
    console.log('Parent Render called');
    return (
      <SafeAreaView>
        <Text style={styles.heading}>Counter Application</Text>
        <View style={styles.wrapper}>
          {/* passing state variable-counter to CounterDisplay Component as a prop */}
          <CounterDisplay counter={this.state.counter} />

          <View style={styles.view}>
            <TouchableOpacity onPress={this.decrementBtn} style={styles.button}>
              <Text style={styles.btnText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.incrimentBtn} style={styles.button}>
              <Text style={styles.btnText}>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={this.resetBtn} style={styles.resetBtn}>
            <Text style={styles.btnText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    color: '#6495ED',
    marginTop: 25,
    fontSize: 30,
  },
  wrapper: {
    height: 500,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  view: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 60,
  },
  button: {
    backgroundColor: '#2E86C1',
    padding: 10,
    borderRadius: 10,
    width: 70,
    marginHorizontal: 80,
  },
  resetBtn: {
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 10,
    width: 150,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default CounterApp;
