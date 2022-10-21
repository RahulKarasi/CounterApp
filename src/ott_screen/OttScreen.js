import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';

export class OttScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.parentContainew}>
        <View style={styles.header}>
          <Image
            style={styles.headerIcon}
            source={require('../images/ott_screen/back.png')}
          />
          <Text style={styles.headerText}>Product Details</Text>
          <Image
            style={styles.headerIcon}
            source={require('../images/ott_screen/saved.png')}
          />
        </View>

        <ScrollView style={styles.content}>
          <View style={styles.detailSection}>
            <Image
              style={styles.poster}
              source={require('../images/ott_screen/poster.jpg')}
            />
            <Text style={styles.nameText}>Money Heist</Text>
            <Text style={styles.partText}>Part lV</Text>
            <View style={styles.genreSection}>
              <View style={styles.generes}>
                <Text style={styles.generesText}>Drama</Text>
              </View>
              <View style={styles.generes}>
                <Text style={styles.generesText}>Crime</Text>
              </View>
              <View style={styles.generes}>
                <Text style={styles.generesText}>Thriller</Text>
              </View>
            </View>
            <View style={styles.blankSpace1}/>
          </View>

          <View style={styles.aboutSection}>
            <View style={styles.blankSpace2}/>
            <View style={styles.description}>
              <View style={styles.descriptionElement}>
                <Text style={styles.descriptionElementText}>Year</Text>
                <Text>2020</Text>
              </View>
              <View style={styles.descriptionElement}>
                <Text style={styles.descriptionElementText}>Country</Text>
                <Text>Spain</Text>
              </View>
              <View style={styles.descriptionElement}>
                <Text style={styles.descriptionElementText}>Episodes</Text>
                <Text>8</Text>
              </View>
            </View>

            <View style={styles.about}>
              <Text style={styles.aboutTitle}>About Series</Text>
              <Text style={styles.aboutDes}>
                Eight thieves take hostages and lock themselves in the Royal
                Mint of Spain as a criminal mastermind manipulates the police to
                carry out his plan.
              </Text>
            </View>

            <View style={styles.screenShotContainer}>
              <Text style={styles.screenShotText}>Screenshots</Text>
              <ScrollView horizontal={true}>
                <Image
                  style={styles.screenShots}
                  source={require('../images/ott_screen/ss1.jpg')}
                />
                <Image
                  style={styles.screenShots}
                  source={require('../images/ott_screen/ss2.jpg')}
                />
                <Image
                  style={styles.screenShots}
                  source={require('../images/ott_screen/ss3.jpg')}
                />
                <Image
                  style={styles.screenShots}
                  source={require('../images/ott_screen/ss4.jpg')}
                />
              </ScrollView>
            </View>
          </View>
        </ScrollView>

        <View style={styles.buyFooter}>
          <TouchableOpacity style={styles.buyBtn}>
            <Text style={styles.buyBtnText}>BUY TICKET</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  parentContainew: {
    flex: 1,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 17,
    backgroundColor: 'rgb(255,255,255)',
  },
  headerIcon: {
    width: 20,
    height: 19,
  },
  headerText: {},
  content: {
    backgroundColor:'rgb(248,249,252)'
  },
  detailSection: {
    alignItems: 'center',
  },
  poster: {
    width: 300,
    height: 450,
    borderRadius: 10,
    marginTop: 30,
  },
  nameText: {
    fontWeight: '600',
    fontSize: 20,
    marginTop: 20,
    // letterSpacing: 1,
  },
  partText: {
    marginTop: 10,
  },
  genreSection: {
    flexDirection: 'row',
    marginTop: 17,
    marginBottom: 10,
  },
  generes: {
    backgroundColor: 'rgb(59,106,246)',
    borderRadius: 20,
    marginHorizontal: 5,
    height: 30,
    width: 75,
  },
  generesText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 6,
    fontSize: 13,
  },
  blankSpace1:{
    height:60
  },
  aboutSection: {
    marginTop: 10,
    paddingHorizontal: 18,
    borderTopWidth:0.3,
    borderTopColor:'grey'
  },
  blankSpace2:{
    height:20
  },
  description: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 30,
  },
  descriptionElement: {
    alignItems: 'center',
  },
  descriptionElementText: {
    fontWeight: '200',
    marginBottom: 6,
  },
  about: {
    marginVertical:20
  },
  aboutTitle: {
    marginBottom: 20,
    fontSize:15
  },
  aboutDes: {
    marginBottom: 20,
    fontWeight: '200',
  },
  screenShotContainer:{
    marginBottom:30
  },
  screenShotText:{
    marginBottom:10,
    fontSize:15
  },
  screenShots:{
    width: 200,
    height: 150,
    borderRadius:10,
    marginRight:10,
    marginTop:20
  },
  buyFooter: {
    paddingHorizontal:20,
    paddingVertical:13,
    backgroundColor:'rgb(248,249,252)'
  },
  buyBtn:{
    backgroundColor:'rgb(59,106,246)',
    borderRadius:7
  },
  buyBtnText:{
    fontSize:18,
    color:'white',
    textAlign:'center',
    padding:15
  }
});

export default OttScreen;
