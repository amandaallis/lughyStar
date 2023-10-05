import React, {useCallback, useMemo} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

const ImageButton = ({imageSource, index, onCheck, selected}) => {
  const handlePress = useCallback(() => onCheck(index));

  const containerStyle = useMemo(
    () => ({
      borderRadius: 70,
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: 100,
      height: 100,
      backgroundColor: selected ? 'transparent' : 'gray',
      opacity: selected ? 0 : 0.9,
    }),
    [selected],
  );

  return (
    <TouchableOpacity onPress={handlePress}>
      <Image source={imageSource} />
      <View style={containerStyle} />
    </TouchableOpacity>
  );
};

export default ImageButton;
