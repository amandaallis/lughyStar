import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#BBD030',
    borderRadius: 8,
    flexDirection: 'row',
    padding: 4,
    alignItems: 'center',
  },
  titleText: {
    fontWeight: '700',
    fontSize: 15,
    color: 'black',
  },
  text: {
    fontSize: 15,
    color: 'black',
  },
  textContainer: {
    marginLeft: 8,
  },
});

const NotificationItem = ({Icon, title, description}) => {
  return (
    <View style={styles.container}>
      {Icon}
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.text}>{description}</Text>
      </View>
    </View>
  );
};

export default NotificationItem;
