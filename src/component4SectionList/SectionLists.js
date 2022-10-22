import {View, Text, SafeAreaView, SectionList, StyleSheet} from 'react-native';
import {data} from './data';

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.itemTxt}>{title}</Text>
  </View>
);

const SectionLists = () => {
  const structuredData = [];
  data.forEach(element => {
    if (structuredData.length) {
      var categoryMatched = false;

      structuredData.forEach(item => {
        if (item.categoryId === element.categoryId) {
          item.data.push(element.title);
          categoryMatched = true;
        }
      });

      if (!categoryMatched) {
        let newCategory = {
          categoryId: element.categoryId,
          data: [element.title],
        };
        structuredData.push(newCategory);
      }
    } else {
      let obj = {categoryId: element.categoryId, data: [element.title]};
      structuredData.push(obj);
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        showsVerticalScrollIndicator={false}
        sections={structuredData}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Item title={item} />}
        renderSectionHeader={({section}) => (
          <View style={styles.header}>
            <Text style={styles.headerTxt}>{section.categoryId}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#2C3E50',
    padding: 10,
    marginVertical: 8,
    borderRadius: 17,
  },
  header: {
    borderRadius: 7,
    backgroundColor: '#922B21',
    marginTop: 10,
  },
  headerTxt: {
    fontSize: 32,
    textAlign: 'center',
    padding: 11,
    color: 'white',
  },
  itemTxt: {
    fontSize: 23,
    textAlign: 'center',
    color: 'white',
  },
});

export default SectionLists;
