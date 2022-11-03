import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import React, {useState} from 'react';

const inputView = [
  {
    imageUri: 'https://cdn-icons-png.flaticon.com/512/747/747376.png',
    placeHolderTxt: 'Name',
    type: 'name',
  },
  {
    imageUri: 'https://cdn-icons-png.flaticon.com/128/646/646094.png',
    placeHolderTxt: 'Email',
    type: 'email',
  },
  {
    imageUri: 'https://cdn-icons-png.flaticon.com/128/3415/3415074.png',
    placeHolderTxt: 'Phone',
    type: 'phoneNo',
  },
  {
    imageUri: 'https://cdn-icons-png.flaticon.com/128/25/25215.png',
    placeHolderTxt: 'Password',
    type: 'pass',
  },
  {
    imageUri: 'https://cdn-icons-png.flaticon.com/128/25/25215.png',
    placeHolderTxt: 'Confirm Password',
    type: 'confirmPass',
  },
];

const Form = ({ navigation }) => {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    phoneNo: '',
    pass: '',
    confirmPass: '',
  });

  const setInput = (text, type) => {
    setCredentials({...credentials, [type]: text});
  };

  const createBtn = async () => {
    if(credentials.name ==='' && credentials.email === '',credentials.confirmPass==='',credentials.pass==='',credentials.confirmPass===''){
        alert('required')
    }
    else{try {
      await AsyncStorage.setItem('userInfo', JSON.stringify(credentials));
    //   const value = await AsyncStorage.getItem('userInfo');
    //   console.log(value);
    } catch (error) {
        alert("cnjsdnck")
    }

   navigation.replace('AsyncHome')}

  };

  return (
    <View style={styles.form}>
      {inputView.map(item => {
        return (
          <View style={styles.inputSection}>
            <Image style={styles.inputIcon} source={{uri: item.imageUri}} />
            <TextInput
              style={styles.textInput}
              placeholder={item.placeHolderTxt}
              onChangeText={text => {
                setInput(text, item.type);
              }}
            />
          </View>
        );
      })}
      <TouchableOpacity style={styles.createBtn} onPress={createBtn}>
        <Text style={styles.createBtnTxt}>Create</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    alignItems: 'center',
    marginTop: 25,
  },
  inputSection: {
    flexDirection: 'row',
    borderRadius: 30,
    width: '90%',
    height: 55,
    alignItems: 'center',
    marginVertical: 12,
    backgroundColor: 'white',
    shadowOpacity: 0.1,
  },
  textInput: {
    width: 200,
  },
  inputIcon: {
    height: 20,
    width: 20,
    marginHorizontal: 25,
  },
  createBtn: {
    backgroundColor: 'rgb(27,85,200)',
    width: '50%',
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    shadowOpacity: 0.1,
  },
  createBtnTxt: {
    color: 'white',
  },
});

export default Form;
