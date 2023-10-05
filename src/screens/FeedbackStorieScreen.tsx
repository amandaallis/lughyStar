import React, {useCallback} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';
import {useNavigation} from '@react-navigation/native';
import Footer from '../components/Footer';

const sadBoyImage = require('../images/sadBoy.png');

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
});

const FeedbackStorieScreen = () => {
  const navigation = useNavigation();

  const navigateToTip = useCallback(() => {
    navigation.navigate('Tip');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.image}>
          <Image source={sadBoyImage} />
        </View>
        <Text style={styles.text}>Poxa, você não não está bem hoje, né?</Text>
        <Text style={styles.scoreText}>15</Text>
        <TouchableOpacity style={styles.button} onPress={navigateToTip}>
          <Text style={styles.buttonText}>
            Veja dicas de como sair melhor na próxima.
          </Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default FeedbackStorieScreen;
