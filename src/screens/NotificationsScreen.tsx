import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NotificationItem from '../components/NotificationItem';
import Notification from '../icons/Notification';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  insideContent: {
    flex: 1,
    backgroundColor: '#FFF1CE',
    marginVertical: 32,
    marginHorizontal: 24,
    paddingHorizontal: 24,
    paddingBottom: 32,
    paddingTop: 16,
    gap: 8,
  },
  text: {
    color: 'black',
    fontWeight: '700',
  },
});

const NotificationsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.insideContent}>
          <Text style={styles.text}>Central de notificações</Text>
          <NotificationItem
            Icon={<Notification />}
            title={'Opa, tem algo errado por ai? Bora jogar?'}
            description={'Vamos jogar...'}
          />
          <NotificationItem
            Icon={<Notification />}
            title={'Vem jogar comigo.'}
            description={'Vamos jogar...'}
          />
          <NotificationItem
            Icon={<Notification />}
            title={'Nos ajude a cuidar de você! :)'}
            description={'Lembre-se de preencher seu...'}
          />
          <NotificationItem
            Icon={<Notification />}
            title={'É rapidinho!'}
            description={'Bora preencher seu formulário...'}
          />
          <NotificationItem
            Icon={<Notification />}
            title={'Bora se divertir e se cuidar?'}
            description={'Vamos jogar...'}
          />
        </View>
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default NotificationsScreen;
