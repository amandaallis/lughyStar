import React from 'react';
import {Button, ScrollView, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

const DrawerTab = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button title="TEste" />
    </ScrollView>
  );
};

export default DrawerTab;
