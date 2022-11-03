import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  AsyncStorage,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const AsyncHome = ({navigation}) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    _retrieveData();
  }, []);

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('userInfo');
      if (value !== null) {
        setUserData(JSON.parse(value));
      }
    } catch (error) {
      console.log(' not found');
    }
  };

  const logoutBtn = () => {
    Alert.alert('Alert Title', 'Do you want to logout', [
      {
        text: 'NO',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'YES',
        onPress: () => {
           const removeItemValue= async (key) =>{
                try {
                    await AsyncStorage.removeItem(key);
                    console.log("deleted");
                }
                catch(exception) {
                    console.log("not deleted");
                }
            }
            removeItemValue("userInfo")
            navigation.replace('AsyncStorageSignUp');
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.main}>
      <View style={styles.space} />

        <Text style={styles.text} >Name -{userData.name}</Text>
        <Text style={styles.text} > Email -{userData.email}</Text>
        <Text style={styles.text}>Phone No -{userData.phoneNo}</Text>

        <TouchableOpacity style={styles.logOutBtn} onPress={logoutBtn}>
          <Text style={styles.btnTxt}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor:'red',
    alignItems:'center'
  },
  space: {
    height: 80,
  },
  text:{
    fontSize:20
  },
  logOutBtn:{
    marginTop:20,
    backgroundColor:'blue',
    width:100,
    alignItems:'center',
    height:30,
    borderRadius:10,
    justifyContent:'center'
  },
  btnTxt:{
    color:'white'
  }
});

export default AsyncHome;
