import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';

class Login extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <ImageBackground
          source={require('./images/netflix_login/peakpx.jpg')}
          resizeMode="cover"
          blurRadius={5}
          style={styles.backgroundImage}>

          <View style={styles.banner}>
            <Image
              style={styles.logo}
              resizeMode="stretch"
              source={require('./images/netflix_login/logo.png')}
            />
          </View>

          <View style={styles.formContent}>

            <View style={styles.emailPassContainer}>
              <Image
                style={styles.icon}
                source={require('./images/netflix_login/emailicon.png')}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="white"
              />
            </View>

            <View style={styles.emailPassContainer}>
              <Image
                style={styles.icon}
                source={require('./images/netflix_login/passicon.png')}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="white"
              />
            </View>

            <Text style={styles.resetText}>reset password</Text>

            <TouchableOpacity style={styles.signinBtn}>
              <Text style={styles.signinText}>Sign IN</Text>
            </TouchableOpacity>

            <Text style={styles.signupTxt}>
              Dont't have an account? 
            <Text style={{fontWeight: 'bold'}}> Sign Up</Text>
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  banner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'blue'
  },
  logo: {
    width: 270,
    height: 80,
  },
  formContent: {
    flex: 1,
  },
  emailPassContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 197, 255,0.5)',
    borderRadius: 20,
    marginHorizontal: 30,
    height: 42,
    padding: 10,
    marginTop: 20,
  },
  icon: {
    width: 25,
    height: 25,
    marginHorizontal: 12,
  },
  input: {
    color: 'white',
    marginTop: 2,
    flex: 4,
  },
  resetText: {
    color: 'white',
    textAlign: 'right',
    marginHorizontal: 33,
    fontSize: 12,
    marginTop: 9,
  },
  signinBtn: {
    marginHorizontal: 30,
    marginTop: 30,
    backgroundColor: 'rgb(213, 14, 14)',
    height: 40,
    borderRadius: 20,
    padding: 10,
  },
  signinText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  signupTxt: {
    color: 'white',
    textAlign: 'center',
    marginTop: 60,
    fontSize: 13,
  },
});

export default Login;
