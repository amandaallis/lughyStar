import React, {useCallback} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/Header';
import Footer from '../components/Footer';

const gameImage = require('../images/game.png');
const happyImage = require('../images/happyFace.png');
const seriousImage = require('../images/seriousFace.png');
const brainHeartImage = require('../images/logo.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    paddingTop: 16,
    alignItems: 'center',
  },
  header: {
    height: 60,
    backgroundColor: '#008C50',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: '#D9D9D9',
    borderRadius: 75,
    width: 45,
    height: 45,
  },
  icon: {
    backgroundColor: '#D9D9D9',
    borderRadius: 75,
    width: 45,
    height: 45,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontWeight: '700',
    fontSize: 32,
  },
});

const DashboardScreen = () => {
  const navigation = useNavigation();

  const navigateToTellingStorie = useCallback(() => {
    navigation.navigate('TellingStorie');
  }, [navigation]);

  const navigateToHowUFeeling = useCallback(() => {
    navigation.navigate('HowUFeeling');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.logoContainer}>
        <Image source={brainHeartImage} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Escolha um jogo!</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity onPress={navigateToHowUFeeling}>
          <Image source={happyImage} />
        </TouchableOpacity>
        <Image source={gameImage} />
        <TouchableOpacity onPress={navigateToTellingStorie}>
          <Image source={seriousImage} />
        </TouchableOpacity>
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default DashboardScreen;
