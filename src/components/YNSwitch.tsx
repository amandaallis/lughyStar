import React, {useMemo, useState} from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    textAlign: 'center',
  },
});

const YNSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const label = useMemo(() => (isEnabled ? 'Sim' : 'Não'), [isEnabled]);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{false: '#767577'}}
        thumbColor={isEnabled ? '#008C50' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

export default YNSwitch;
