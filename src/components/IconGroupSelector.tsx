import React, {useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import IconButton from './IconButton';
import BadSad from '../icons/BadSad';
import Medium from '../icons/Medium';
import Happy from '../icons/Happy';

const styles = StyleSheet.create({
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 60,
    paddingBottom: 16,
    paddingTop: 8,
  },
});

const IconGroupSelector = () => {
  const [selected, setSelected] = useState([false, false, false]);

  const handleSelect = useCallback(index => {
    let newValue = [false, false, false];
    setSelected(newValue);
    newValue[index] = true;

    setSelected(newValue);
  }, []);

  return (
    <View style={styles.iconsContainer}>
      <IconButton
        Icon={BadSad}
        index={0}
        onCheck={handleSelect}
        selected={selected[0]}
      />
      <IconButton
        Icon={Medium}
        index={1}
        onCheck={handleSelect}
        selected={selected[1]}
      />
      <IconButton
        Icon={Happy}
        index={2}
        onCheck={handleSelect}
        selected={selected[2]}
      />
    </View>
  );
};

export default IconGroupSelector;
