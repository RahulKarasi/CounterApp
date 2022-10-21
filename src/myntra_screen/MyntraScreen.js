import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import React, {Component} from 'react';

const category = ['Polo Shirts', 'Dress Shirts', 'Shorts', 'T-Shirt'];
const product = [
  {
    image: require('./assets/pankaj.jpeg'),
    brand: 'Tommy Hilfiger',
    description: "Men's Morrison Stripe Polo, Limelight Combo",
    price: 'USD 23',
  },
  {
    image: require('./assets/pankaj.jpeg'),
    brand: 'Tommy Hilfiger',
    description: "Men's Morrison Stripe Polo, Limelight Combo",
    price: 'USD 23',
  },
  {
    image: require('./assets/pankaj.jpeg'),
    brand: 'Tommy Hilfiger',
    description: "Men's Morrison Stripe Polo, Limelight Combo",
    price: 'USD 23',
  },
  {
    image: require('./assets/pankaj.jpeg'),
    brand: 'Tommy Hilfiger',
    description: "Men's Morrison Stripe Polo, Limelight Combo",
    price: 'USD 23',
  },
  
];

export class MyntraScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>MEN CLOTHING</Text>
        </View>

        <View style={styles.groupingSection}>
          <View style={styles.items}>
            <Text>195 items</Text>
          </View>
          <View style={styles.sortingSection}>
            <TouchableOpacity style={styles.sort}>
              <Image
                style={styles.sortIcon}
                source={require('./assets/sort.png')}
              />
              <Text style={styles.sortText}>SORT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filter}>
              <Image
                style={styles.sortIcon}
                source={require('./assets/filter.png')}
              />
              <Text style={styles.filterText}>FILTER</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView horizontal={true} style={styles.categorySection} showsHorizontalScrollIndicator={false}>
          {category.map(category => {
            return (
              <TouchableOpacity style={styles.category}>
                <Text>{category}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

          <ScrollView showsVerticalScrollIndicator ={false}>
        <View style={styles.productSection}>
          {product.map(item => {
            return (
              <View style={styles.product}>
                <Image
                  style={styles.productImg}
                //   resizeMode={'contain'}
                  source={item.image}
                />
                <View style={styles.badge}><Text style={styles.badgeTxt}>New</Text></View>
                <TouchableOpacity style={styles.wishlistBtn}><Image style={styles.wishlist} source={require('./assets/love.png')}/></TouchableOpacity>
                <Text style={styles.brandTxt}>{item.brand}</Text>
                <Text style={styles.descriptionTxt}>{item.description}</Text>
                <Text style={styles.priceTxt}>{item.price}</Text>
              </View>
            );
          })}
        </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    // backgroundColor:'red',
    padding: 21,
  },
  headerText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 15,
  },
  groupingSection: {
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 0.4,
    borderBottomWidth: 0.4,
    paddingVertical: 15,
  },
  items: {
    //todo
  },
  sortingSection: {
    flexDirection: 'row',
  },
  sort: {
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortText: {
    paddingLeft: 10,
  },
  sortIcon: {
    height: 20,
    width: 21,
  },
  filter: {
    flexDirection: 'row',
    borderLeftWidth: 0.6,
    paddingLeft: 20,
    alignItems: 'center',
  },
  filterText: {
    paddingLeft: 10,
  },
  categorySection: {
    padding: 10,
    // backgroundColor:'red',
  },
  category: {
    width: 100,
    height: 38,
    borderRadius: 10,
    backgroundColor: 'rgb(230,230,230)',
    alignItems: 'center',
    marginRight: 8,
    justifyContent: 'center',
    marginBottom:10
  },
  productSection: {
    flexDirection:'row',
    flexWrap:'wrap'
  },
  product: {
    marginVertical:10,
    width: '47%',
    marginLeft:8
  },
  productImg: {
    width: '100%',
    height: 265,
  },
  badge:{
    backgroundColor:'green',
    position:'absolute',
    width:42,
    height:22,
    justifyContent:'center',
  },
  badgeTxt:{
    color:'white',
    textAlign:'center',
    fontSize:12
  },
  wishlistBtn:{
    position:'absolute',
    right:7,
    top:7,
    backgroundColor:'rgb(230,230,230)',
    borderRadius:100,
    padding:2
  },
  wishlist:{
    width:20,
    height:20
  },
  brandTxt: {
    marginTop:10,
    fontSize: 15,
    fontWeight: '500',
  },
  descriptionTxt: {
    marginTop:2,
    fontSize: 12,
    fontWeight: '300',
    letterSpacing:0.6
  },
  priceTxt: {
    marginTop:3.5,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default MyntraScreen;
