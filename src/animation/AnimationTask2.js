import {View, StyleSheet, Animated, Dimensions} from 'react-native';
import React, {useEffect} from 'react';

const TextAnimation = () => {
  const windoX = Dimensions.get('window').width;
  const windowY = Dimensions.get('window').height;

  const rotateAnimation = new Animated.Value(0);

  const text1posX = new Animated.Value(0);
  const text1posY = new Animated.Value(0);

  const text2posX = new Animated.Value(windoX-100);
  const text2posY = new Animated.Value(0);

  const text3posX = new Animated.Value(-100);
  const text3posY = new Animated.Value(windowY-100);

  const text4posX = new Animated.Value(windoX);
  const text4posY = new Animated.Value(windowY-80);

  const rotate = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '3600deg'],
  });

  useEffect(() => {
    Animated.loop(Animated.timing(rotateAnimation, {
      toValue: 1,
      duration: 5000,
      useNativeDriver:false
    })).start();

    Animated.loop(Animated.timing(text1posX, {
      toValue: windoX -120,
      duration: 5000,
      useNativeDriver:false
    })).start();
    Animated.loop(Animated.timing(text1posY, {
      toValue: windowY - 160,
      duration: 5000,
      useNativeDriver:false
    })).start();

    Animated.loop(Animated.timing(text2posX, {
      toValue: 0,
      duration: 5000,
      useNativeDriver:false
    })).start();
    Animated.loop(Animated.timing(text2posY, {
      toValue: windowY - 160,
      duration: 5000,
      useNativeDriver:false
    })).start();

    Animated.loop(Animated.timing(text3posX, {
      toValue: windoX - 120,
      duration: 5000,
      useNativeDriver:false
    })).start();
    Animated.loop(Animated.timing(text3posY, {
      toValue: 0,
      duration: 5000,
      useNativeDriver:false
    })).start();

    Animated.loop(Animated.timing(text4posX, {
      toValue: 0,
      duration: 5000,
      useNativeDriver:false
    })).start();
    Animated.loop(Animated.timing(text4posY, {
      toValue: 0,
      duration: 5000,
      useNativeDriver:false
    })).start();

  }, []);

  return (
    <View style={styles.container}>
      <Animated.Text
        style={{
          color: 'red',
          fontWeight: '600',
          maxWidth: 120,
          fontSize: 40,
          transform: [{translateX: text1posX}, {translateY: text1posY}, {rotate: rotate}],
        }}>
        TASK1
      </Animated.Text>
      <Animated.Text
        style={{
          color: 'red',
          fontWeight: '600',
          maxWidth: 120,
          fontSize: 40,
          transform: [{translateX: text2posX}, {translateY: text2posY}, {rotate: rotate}],
          position:'absolute',
        }}>
        TASK1
      </Animated.Text>
      <Animated.Text
        style={{
          color: 'red',
          fontWeight: '600',
          maxWidth: 120,
          fontSize: 40,
          transform: [{translateX: text3posX}, {translateY: text3posY}, {rotate: rotate}],
          position:'absolute',
        }}>
        TASK1
      </Animated.Text>
      <Animated.Text
        style={{
          color: 'red',
          fontWeight: '600',
          maxWidth: 120,
          fontSize: 40,
          transform: [{translateX: text4posX}, {translateY: text4posY}, {rotate: rotate}],
          position:'absolute',
        }}>
        TASK1
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default TextAnimation;
