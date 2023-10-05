import React, {useCallback, useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import {useNavigation} from '@react-navigation/native';
import IconGroupSelector from '../components/IconGroupSelector';
import Footer from '../components/Footer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#BBD030',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    textAlign: 'center',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 60,
    paddingBottom: 16,
    paddingTop: 8,
  },
  buttonContainer: {
    paddingHorizontal: 48,
    paddingTop: 16,
  },
});

const TellingStorieScreen = () => {
  const navigation = useNavigation();
  const [selector, setSelector] = useState(0);

  const navigateToFeedbackStorie = useCallback(() => {
    if (selector === 0) {
      setSelector(1);
      return navigation.navigate('FeedbackStorie');
    }
    if (selector === 1) {
      setSelector(2);
      return navigation.navigate('FeedbackStorieTwo');
    }
    if (selector === 2) {
      setSelector(0);
      return navigation.navigate('FeedbackStorieThree');
    }
  }, [navigation, selector]);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.headerContainer}>
        <Text style={styles.text}>CONTANDO UMA HISTÓRIA</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>
          Escolha a carinha conforme você está se sentindo hoje.
        </Text>
        <Text style={styles.text}>Hoje eu estou:</Text>
        <IconGroupSelector />
        <Text style={styles.text}>Dificuldade para dormir:</Text>
        <IconGroupSelector />
        <Text style={styles.text}>Dormindo em excesso:</Text>
        <IconGroupSelector />
        <Text style={styles.text}>Sentindo-se cansado:</Text>
        <IconGroupSelector />
        <Text style={styles.text}>Falta de Apetite:</Text>
        <IconGroupSelector />
        <View style={styles.buttonContainer}>
          <Button
            color="#008C50"
            title="CONFIRMAR"
            onPress={navigateToFeedbackStorie}
          />
        </View>
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default TellingStorieScreen;
