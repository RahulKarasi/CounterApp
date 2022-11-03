import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import React from 'react';
import Form from './Form';

const AsyncStorageSignUp = ({navigation}) => {
  

  
  return (

    <ImageBackground
      source={{
        uri: 'https://www.fabmood.com/wp-content/uploads/2022/04/spring-wallpaper-6.jpg',
      }}
      style={styles.backgroundImage}>
      <View style={styles.space} />
      <View style={styles.mainContainer}>
        <View style={styles.space} />
        <View style={styles.header}>
          <Text style={styles.headerTxt}>Let's Get Started!</Text>
          <Text style={styles.headerInfoTxt}>
            Create an account to Q Allure to get all features
          </Text>
        </View>

        <Form navigation={navigation} />

        <View style={styles.formFooter}>
          <Text>Already have an ccount? </Text>
          <Text style={styles.loginLink}>Login here</Text>
        </View>
        <View style={styles.spaceBotton} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  mainContainer: {
    marginHorizontal: 20,
    backgroundColor: '#e5e4e2',
    borderRadius: 30,
    shadowOpacity: 0.1,
  },
  space: {
    height: 80,
  },
  header: {
    alignItems: 'center',
  },
  headerTxt: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerInfoTxt: {
    fontSize: 14,
    color: 'rgb(159,159,159)',
  },

  spaceBotton: {
    height: 35,
  },
  formFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  loginLink: {
    color: 'blue',
  },
});

export default AsyncStorageSignUp;
