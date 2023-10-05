import React, {useCallback} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';
import {useNavigation} from '@react-navigation/native';

const sadImage = require('../images/sadYellow.png');
const neutralImage = require('../images/neutralYellow.png');
const happyImage = require('../images/happyYellow.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    gap: 16,
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
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingBottom: 32,
    width: 240,
  },
});

const HowUFeelingScreen = () => {
  const navigation = useNavigation();

  const navigateToDashboard = useCallback(() => {
    navigation.navigate('Dashboard');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.headerContainer}>
        <Text style={styles.text}>COMO ESTOU ME SENTINDO HOJE:</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity>
          <Image source={sadImage} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={neutralImage} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={happyImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            color="#008C50"
            title="Confirmar"
            onPress={navigateToDashboard}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HowUFeelingScreen;
