import React, {useCallback} from 'react';
import Footer from '../components/Footer';
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

const infoImage = require('../images/infoImage.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  content: {
    height: 272,
    width: 368,
    backgroundColor: '#FFF1CE',
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: 16,
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    textAlign: 'center',
    marginVertical: 8,
  },
  buttonContainer: {
    width: 90,
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 24,
  },
});

const SuccessQuizScreen = () => {
  const navigation = useNavigation();

  const navigateToDashboard = useCallback(() => {
    navigation.navigate('Dashboard');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.container}>
        <View style={styles.content}>
          <Image source={infoImage} />
          <Text style={styles.text}>Suas respostas foram enviadas.</Text>
          <Text style={styles.text}>Obrigado por responder!</Text>
          <View style={styles.buttonContainer}>
            <Button color="#008C50" title="OK" onPress={navigateToDashboard} />
          </View>
        </View>
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default SuccessQuizScreen;
