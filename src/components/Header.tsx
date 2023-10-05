import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Menu from '../icons/Menu';

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#008C50',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  profileImage: {
    backgroundColor: 'white',
    width: 32,
    height: 32,
    borderRadius: 20,
  },
});

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={navigation.openDrawer}>
        <Menu />
      </TouchableOpacity>
      <View style={styles.profileImage} />
    </View>
  );
};

export default Header;
