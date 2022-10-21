import React, {Component} from 'react';
import {Text} from 'react-native';

class CounterDisplay extends Component {
  constructor() {
    super();
    this.state = {};
    console.log('Child Constructor called');
  }

  static getDerivedStateFromProps() {
    console.log('Child getDerivedStateFromProps called');
    return null;
  }

  componentDidMount() {
    console.log('Child componentDidMount called');
  }

  componentDidUpdate() {
    console.log('Child componentDidUpdate called');
  }

  shouldComponentUpdate() {
    console.log('Child shouldComponentUpdate called');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('Child getSnapshotBeforeUpdate called');
    return null;
  }

  render() {
    {
      console.log('Child Render called');
    }
    return <Text style={{fontSize: 60,marginBottom:30}}>{this.props.counter}</Text>;
  }
}

export default CounterDisplay;
