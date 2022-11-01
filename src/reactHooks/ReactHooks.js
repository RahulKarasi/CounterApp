import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useRef, useState, useCallback} from 'react';
import {data} from './data';

const ReactHooks = () => {
  const [input, setInput] = useState('');
  const [showBtn, setShowBtn] = useState(false);
  var listRef = useRef(null);

  const goTo = () => {
    const id = data.findIndex(item => item.id === parseInt(input));
    listRef.scrollToIndex({
      index: id,
      animated: true,
    });
  };

  const onEnd = () => {
    setShowBtn(true);
  };

  const _getItemLayout = useCallback((_, index) => ({
    length: 305,
    offset: 305 * index,
    index,
  }));

  

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={input => setInput(input)}
          style={styles.textInput}></TextInput>
        <TouchableOpacity onPress={goTo} style={styles.goBtn}>
          <Text style={styles.goBtnTxt}>Go</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        ref={ref => {
          listRef = ref;
        }}
        data={data}
        keyExtractor={item => item.id}
        onEndReached={onEnd}
        // onEndReachedThreshold={0.4}
        getItemLayout={_getItemLayout}
        onScroll={event => {
            var total = data.length * 400
            console.log(total,event.nativeEvent.contentOffset.y);
            if(event.nativeEvent.contentOffset.y < 11777){
                setShowBtn(false)
            }
          
        }}
        renderItem={({item}) => {
          return (
            <View style={styles.itemList}>
              <View style={styles.item}>
                <Text style={styles.itemId}>{item.id}</Text>
                <Image style={styles.image} source={{uri: item.imageUrl}} />
              </View>
            </View>
          );
        }}
      />
      {showBtn && (
        <TouchableOpacity style={styles.topBtn}>
          <Text style={styles.topBtnTxt}>Back to top</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  textInput: {
    borderWidth: 1,
    width: 200,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  goBtn: {
    borderWidth: 1,
    borderRadius: 10,
    width: 60,
    justifyContent: 'center',
  },
  goBtnTxt: {
    textAlign: 'center',
  },
  itemList: {
    width: 320,
  },
  item: {
    alignItems: 'center',
    width: 320,
    padding: 10,
    marginBottom: 10,
  },
  image: {
    height: 250,
    width: 250,
  },
  itemId: {
    marginBottom: 10,
  },
  topBtn: {
    position: 'absolute',
    bottom: 30,
    width: 100,
    borderRadius: 10,
    height: 40,
    justifyContent: 'center',
    backgroundColor: 'rgb(135,95,250)',
  },
  topBtnTxt: {
    textAlign: 'center',
    color: 'white',
  },
});

export default ReactHooks;
