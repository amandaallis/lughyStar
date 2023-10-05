import React, {useCallback} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import {useNavigation} from '@react-navigation/native';
import Footer from '../components/Footer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: '#BBD030',
  },
  insideContent: {
    flex: 1,
    backgroundColor: '#FFF1CE',
    marginVertical: 32,
    marginHorizontal: 24,
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontWeight: '700',
  },
  title: {
    color: 'black',
    marginVertical: 16,
    textAlign: 'center',
    fontWeight: '700',
  },
  button: {
    backgroundColor: 'red',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  contactCardMainText: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: 'black',
  },
  contactCardSubText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    textAlign: 'center',
  },
  contactCardLastText: {
    fontSize: 14,
    fontWeight: '700',
    color: 'black',
    textAlign: 'center',
  },
  contactCard: {
    flex: 1,
    backgroundColor: '#BBD030',
    justifyContent: 'center',
    alignSelf: 'center',
    marginHorizontal: 40,
    width: 280,
    borderRadius: 8,
    marginTop: 40,
    padding: 8,
  },
});

const TipScreen = () => {
  const navigation = useNavigation();

  const navigateToDashboard = useCallback(() => {
    navigation.navigate('Dashboard');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.insideContent}>
          <Text style={styles.title}>DICA</Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            laoreet justo ut luctus fermentum. Donec placerat quis massa id
            vulputate. Suspendisse porta velit vel ipsum fermentum fringilla.
            Vivamus felis urna, blandit eget massa eget, cursus pellentesque
            nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            laoreet justo ut luctus fermentum. Donec placerat quis massa id
            vulputate. Suspendisse porta velit vel ipsum fermentum fringilla.
            Vivamus felis urna, blandit eget massa eget, cursus pellentesque
            nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <View style={styles.contactCard}>
            <Text style={styles.contactCardMainText}>
              Quer falar com alguém?
            </Text>
            <Text style={styles.contactCardSubText}>
              Ligue para xx xxxx-xxxx
            </Text>
            <Text style={styles.contactCardLastText}>
              Programa de Gerenciamento de Saúde
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button color="#008C50" title="OK" onPress={navigateToDashboard} />
          </View>
        </View>
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default TipScreen;
