import React, {useCallback, useMemo} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  iconButton: {
    height: 30,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

const IconButton = ({Icon, selected, index, onCheck}) => {
  const handlePress = useCallback(() => onCheck(index));

  const containerStyle = useMemo(
    () => [
      {
        backgroundColor: selected ? '#008C50' : 'grey',
      },
      styles.iconButton,
    ],
    [selected],
  );

  return (
    <TouchableOpacity onPress={handlePress} style={containerStyle}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconButton;
