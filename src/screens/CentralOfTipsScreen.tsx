import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotificationItem from '../components/NotificationItem';

const infoImage = require('../images/info.png');

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

const CentralOfTipsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.insideContent}>
          <Text style={styles.text}>Dicas e recomendações</Text>
          <NotificationItem
            Icon={<Image source={infoImage} />}
            title={'Saiba como melhorar ...'}
            description={'Aqui seguem algumas dicas para...'}
          />
          <NotificationItem
            Icon={<Image source={infoImage} />}
            title={'Saiba como melhorar ...'}
            description={'Aqui seguem algumas dicas para...'}
          />
          <NotificationItem
            Icon={<Image source={infoImage} />}
            title={'Saiba como melhorar ...'}
            description={'Aqui seguem algumas dicas para...'}
          />
          <NotificationItem
            Icon={<Image source={infoImage} />}
            title={'Saiba como melhorar ...'}
            description={'Aqui seguem algumas dicas para...'}
          />
          <NotificationItem
            Icon={<Image source={infoImage} />}
            title={'Saiba como melhorar ...'}
            description={'Aqui seguem algumas dicas para...'}
          />
          <NotificationItem
            Icon={<Image source={infoImage} />}
            title={'Saiba como melhorar ...'}
            description={'Aqui seguem algumas dicas para...'}
          />
          <NotificationItem
            Icon={<Image source={infoImage} />}
            title={'Saiba como melhorar ...'}
            description={'Aqui seguem algumas dicas para...'}
          />
        </View>
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default CentralOfTipsScreen;
