import React, {useCallback} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from '../components/Header';
import {useNavigation} from '@react-navigation/native';
import Footer from '../components/Footer';

const superHappyImage = require('../images/superHappy.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: '#FFF1CE',
    justifyContent: 'space-around',
  },
  image: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontWeight: '700',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  scoreText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 96,
  },
  button: {
    backgroundColor: '#BBD030',
    height: 80,
    justifyContent: 'center',
    marginHorizontal: 40,
  },
  buttonContainer: {
    paddingHorizontal: 48,
    paddingTop: 16,
  },
});

const FeedbackStorieThreeScreen = () => {
  const navigation = useNavigation();

  const navigateToDashboard = useCallback(() => {
    navigation.navigate('Dashboard');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.image}>
          <Image source={superHappyImage} />
        </View>
        <Text style={styles.text}>
          Uau! Você está super bem hoje! Que ótimo!
        </Text>
        <View style={styles.buttonContainer}>
          <Button color="#008C50" title="OK" onPress={navigateToDashboard} />
        </View>
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default FeedbackStorieThreeScreen;
