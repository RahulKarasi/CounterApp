import {SafeAreaView, Text, FlatList, Image, View,  TouchableOpacity, StyleSheet} from 'react-native';
import React,{useRef} from 'react';
// import BackButton from './BackButton';
import InputB from './InputB';

const DATA = [
    {
      id: 101,
      imageUrl: 'https://source.unsplash.com/1600x900/?beach',
    },
    {
      id: 102,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 103,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 104,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 105,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 106,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 107,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 108,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 109,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 110,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 111,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 112,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 113,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 114,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 115,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 116,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 117,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 118,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 119,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 120,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 121,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 122,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 123,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 124,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 125,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 126,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 127,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 128,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 129,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 130,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 131,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 132,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 133,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 134,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 135,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 136,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 137,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 138,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 139,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
    {
      id: 140,
      imageUrl: 'https://source.unsplash.com/1600x900/?random',
    },
  ];

const FunctionalAssignment = () => {
  // var flatref=useRef(null).current;
  // const buttonHandler=()=>{
  //   this.flatref.scrollToOffset({ animated: true, offset: 0 });
  // }
  return (
    <SafeAreaView style={{flex:1}}>
      <InputB/>
      <FlatList
      ref={this.flatList}
        style={{flex: 1,backgroundColor:'grey'}}
        data={DATA} 
        keyExtractor = {(item, index) => `${index + item.id}`}
        renderItem={({item, index}) => {
          return (
            <View key={index} style={{backgroundColor: '#529FF3', margin: 10, justifyContent:'center'}}>
              <View>
                <Text
                  style={{
                    paddingVertical: 10,
                    fontSize: 15,
                    paddingStart: 5,
                    paddingEnd: 16,
                    color: 'black',
                    textAlign:'center'
                  }}>
                  {item.id}
                </Text>
              </View>
              <View>
               <Image
                  source={{uri: item.imageUrl}}
                  style={{height: 200, width: 200, alignSelf:'center', margin:10,}}
                />
              </View>
            </View>
          );
        }}
        
      />
        <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Back to top</Text>
                </TouchableOpacity>
    </SafeAreaView>
    
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgb(90,128,236)',
    width: "90%",
    marginTop: 50,
    marginLeft: 20,
    //    marginHorizontal:10,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    padding: 15,
  }
  });

export default FunctionalAssignment;
