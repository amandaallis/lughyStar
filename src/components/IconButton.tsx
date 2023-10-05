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

const IconButton = ({Icon, selected, index, onCheck, selectedColor}) => {
  const handlePress = useCallback(() => onCheck(index));

  const containerStyle = useMemo(
    () => [
      {
        backgroundColor: selected ? selectedColor : 'grey',
      },
      styles.iconButton,
    ],
    [selected, selectedColor],
  );

  return (
    <TouchableOpacity onPress={handlePress} style={containerStyle}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconButton;
