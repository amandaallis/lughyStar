import React, {useCallback} from 'react';
import Footer from '../components/Footer';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
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
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    width: 200,
    color: 'black',
  },
  switchInput: {
    flexDirection: 'row',
    gap: 16,
  },
});

const QuizScreen = () => {
  const navigation = useNavigation();

  const navigateToSuccessQuiz = useCallback(() => {
    navigation.navigate('SuccessQuiz');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.headerContainer}>
        <Text style={styles.textBold}>QUESTIONÁRIO</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.questionContainer}>
          <Text style={styles.text}>Quando foi a sua última consulta?</Text>
          <TextInput
            placeholderTextColor="gray"
            placeholder="DD/MM/AAAA"
            style={styles.input}
          />
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.text}>Realizou exames recentemente?</Text>
          <YNSwitch />
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.text}>
            Utiliza alguma medicação de uso continuo?
          </Text>
          <View style={styles.switchInput}>
            <YNSwitch />
            <TextInput
              placeholderTextColor="gray"
              placeholder="Se sim, quais?"
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.text}>
            Você está realizando atividades físicas?
          </Text>
          <YNSwitch />
        </View>
        <View style={styles.questionContainer}>
          <Text style={styles.text}>
            Está realizando acompanhamento com equipe multiprofissional? (Ex:
            Nutricionista, Psicólogo.)
          </Text>
          <YNSwitch />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              color="#008C50"
              title="Enviar"
              onPress={navigateToSuccessQuiz}
            />
          </View>
        </View>
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default QuizScreen;
