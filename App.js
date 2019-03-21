/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Image,  View} from 'react-native';
import PhonepePayment from './src/components/PhonepePayment/PhonepePayment';
import image from './src/assets/index.jpeg';
import sbi from './src/assets/sbi.png';
import sign from './src/assets/sign.png';
import avatar from './src/assets/avatar.png';
import back from './src/assets/back.png';

let pic = {
  uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
};
export default class App extends Component {
  render() {
    
    return (
      <View style={styles.container}>
        <PhonepePayment bankImage={sbi} signImage={sign} avatarImage={avatar} backImage={back} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
