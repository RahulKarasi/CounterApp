import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyntraScreen from './MyntraScreen';
import {Alert, Image, StyleSheet} from 'react-native';

class Category extends Component {
  render() {
    return Alert.alert('Inside Category');
  }
}
class MyCart extends Component {
  render() {
    return Alert.alert('Inside MyCart');
  }
}
class Wishlist extends Component {
  render() {
    return Alert.alert('Inside Wishlist');
  }
}
class Account extends Component {
  render() {
    return Alert.alert('Inside Account');
  }
}

const Tab = createBottomTabNavigator();

export class MyntraNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen
            name="Home"
            component={MyntraScreen}
            options={{
              tabBarIcon: ({focused}) =>
                focused ? (
                  <Image
                    source={require('./assets/homeFocused.png')}
                    style={styles.menImg}
                  />
                ) : (
                  <Image
                    source={require('./assets/home.png')}
                    style={styles.menImg}
                  />
                ),
            }}
          />
          <Tab.Screen
            name="Categories"
            component={Category}
            options={{
              tabBarIcon: () => (
                <Image
                  source={require('./assets/options-lines.png')}
                  style={styles.menImg}
                />
              ),
            }}
          />
          <Tab.Screen
            name="My Cart"
            component={MyCart}
            options={{
              tabBarIcon: () => (
                <Image
                  source={require('./assets/cart.png')}
                  style={styles.menImg}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Wishlist"
            component={Wishlist}
            options={{
              tabBarIcon: () => (
                <Image
                  source={require('./assets/love.png')}
                  style={styles.menImg}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Account"
            component={Account}
            options={{
              tabBarIcon: () => (
                <Image
                  source={require('./assets/account.png')}
                  style={styles.menImg}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  menImg: {
    paddingTop: 20,
    height: 24,
    width: 24,
  },
});

export default MyntraNavigator;
