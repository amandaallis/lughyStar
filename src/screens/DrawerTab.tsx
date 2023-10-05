import React, {useCallback} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Home from '../icons/Home';
import Notification from '../icons/Notification';
import Questions from '../icons/Questions';
import {useNavigation} from '@react-navigation/native';

const tipsImage = require('../images/tips.png');

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#008C50',
  },
  text: {
    fontWeight: '700',
  },
  drawerItem: {
    flexDirection: 'row',
    gap: 8,
    paddingTop: 16,
    paddingBottom: 16,
    marginLeft: 16,
  },
});

const DrawerTab = () => {
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
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.drawerItem} onPress={navigateToDashboard}>
        <Home />
        <Text style={styles.text}>Inicio</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={navigateToNotification}>
        <Notification />
        <Text style={styles.text}>Notificações</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={navigateToQuiz}>
        <Questions />
        <Text style={styles.text}>Questionário</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={navigateToCentralOfTips}>
        <Image source={tipsImage} />
        <Text style={styles.text}>Dicas e sugestões</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DrawerTab;
