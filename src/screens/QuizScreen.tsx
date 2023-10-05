import React, {useCallback} from 'react';
import Footer from '../components/Footer';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import YNSwitch from '../components/YNSwitch';
import {useNavigation} from '@react-navigation/native';

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
  },
  textBold: {
    color: 'black',
    fontWeight: '700',
  },
  questionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingTop: 16,
    paddingHorizontal: 24,
  },
  button: {
    paddingBottom: 32,
    width: 240,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const QuizScreen = () => {
  const navigation = useNavigation();

  const navigateToDashboard = useCallback(() => {
    navigation.navigate('Dashboard');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.headerContainer}>
        <Text style={styles.textBold}>QUESTIONÁRIO</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.questionContainer}>
          <Text style={styles.text}>Tem ido ao médico regularmente?</Text>
          <YNSwitch />
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.text}>Pergunta 1?</Text>
          <YNSwitch />
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.text}>Pergunta 2?</Text>
          <YNSwitch />
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.text}>Pergunta 3?</Text>
          <YNSwitch />
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.text}>Pergunta 4?</Text>
          <YNSwitch />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              color="#008C50"
              title="Enviar"
              onPress={navigateToDashboard}
            />
          </View>
        </View>
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default QuizScreen;
