import {View, Text, SafeAreaView, StyleSheet, Switch} from 'react-native';
import React, {useState} from 'react';
import Slider from '@react-native-community/slider';

const SwitchSlider = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.emptyView} />
      <Text style={styles.header}>Toggle to Hide Slider</Text>
      <View style={styles.toggleSwitch}>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#273746' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={switchValue => setIsEnabled(switchValue)}
          value={isEnabled}
        />
      </View>
      {!isEnabled && <View style={styles.sliderSection}><Slider
        maximumValue={100}
        minimumValue={0}
        step={1}
        minimumTrackTintColor="#307ecc"
        maximumTrackTintColor="#000000"
        value={sliderValue}
        onValueChange={sliderValue => setSliderValue(sliderValue)}
      />
      <Text style={styles.valueTxt}>Value : {sliderValue}</Text></View>}
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyView: {
    height: 70,
  },
  toggleSwitch: {
    margin: 30,
    alignItems: 'center',
  },
  header: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 17,
  },
  sliderSection:{
    paddingHorizontal:20
  },
  valueTxt:{
    textAlign:'center'
  }
});

export default SwitchSlider;
