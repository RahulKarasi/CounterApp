import {StyleSheet, Animated, TouchableOpacity} from 'react-native';
import React, { useEffect} from 'react';

const TextAnimation = () => {
  const rotateAnimation= new Animated.Value(0)
  const opacity = new Animated.Value(0.4)
   const fontSize = new Animated.Value(0)

  const rotate = rotateAnimation.interpolate({
    inputRange: [0,0.25, 0.5, 0.75, 1],
    outputRange: ['0deg', '720deg', '0deg', '720deg','0deg'],
  });

  useEffect(()=>{
    Animated.loop(Animated.timing(rotateAnimation, {
        toValue: 1,
        duration: 5000,
        useNativeDriver:false
      })).start();
  
      Animated.loop(Animated.timing(opacity, {
        toValue: 1,
        duration: 5000,
        useNativeDriver:false
      })).start();
  
      Animated.loop(Animated.timing(fontSize,{
          toValue:50,
          duration:5000,
          useNativeDriver:false
      })).start();
  },[])


  return (
    
        <TouchableOpacity  style={styles.container}>
      <Animated.Text
        style={{
          color: 'red',
          fontSize: 50,
          fontWeight: '600',
          transform: [{rotate: rotate}],
          opacity: opacity,
          fontSize: fontSize
        }}>
        TASK1
      </Animated.Text>
      </TouchableOpacity>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});

export default TextAnimation;
