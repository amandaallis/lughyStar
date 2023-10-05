import React, {useCallback} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Home from '../icons/Home';
import Notification from '../icons/Notification';
import Questions from '../icons/Questions';
import {useNavigation} from '@react-navigation/native';

const tipsImage = require('../images/tips.png');

const styles = StyleSheet.create({
  footer: {
    height: 60,
    backgroundColor: '#008C50',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
});

const Footer = () => {
  const navigation = useNavigation();

  const navigateToDashboard = useCallback(() => {
    navigation.navigate('Dashboard');
  }, [navigation]);

  const navigateToQuiz = useCallback(() => {
    navigation.navigate('Quiz');
  }, [navigation]);

  const navigateToNotification = useCallback(() => {
    navigation.navigate('Notification');
  }, [navigation]);

  const navigateToCentralOfTips = useCallback(() => {
    navigation.navigate('CentralOfTips');
  }, [navigation]);

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={navigateToDashboard}>
        <Home />
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToNotification}>
        <Notification />
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToQuiz}>
        <Questions />
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToCentralOfTips}>
        <Image source={tipsImage} />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
