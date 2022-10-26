import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Clipboard,
  BackHandler,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
// import Clipboard from '@react-native-clipboard/clipboard';

const BackPressAlert = (props) => {
  const [text, setText] = useState('');

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => props.navigation.goBack()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress',backAction,);

    return () => backHandler.remove();
  }, []);

  const copyToClipboard = () => {
    Clipboard.setString(text);
    setText('');
  };

  const pasteToClipboard = async () => {
    const textv = await Clipboard.getString();
    setText(textv);
  };

  return (
    <View style={styles.parent}>
      <TextInput
        style={styles.textInput}
        onChangeText={text => setText(text)}
        placeholder="Clipboard"
        value={text}
      />

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={copyToClipboard}>
          <Text style={styles.btnText}>Copy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={pasteToClipboard}>
          <Text style={styles.btnText}>Paste</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  textInput: {
    borderWidth: 1,
    width: '36%',
    borderRadius: 10,
    marginTop: 20,
    height:40
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'rgb(62,59,226)',
    width: '18%',
    height: 39,
    justifyContent: 'center',
    marginTop: 18,
    borderRadius: 15,
    marginHorizontal: 8,
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
  },
});

export default BackPressAlert;
