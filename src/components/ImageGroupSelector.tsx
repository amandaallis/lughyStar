import React, {useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ImageButton from './ImageButton';

const sadImage = require('../images/sadYellow.png');
const neutralImage = require('../images/neutralYellow.png');
const happyImage = require('../images/happyYellow.png');

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
});

const ImageGroupSelector = () => {
  const [selected, setSelected] = useState([false, false, false]);

  const handleSelect = useCallback(index => {
    let newValue = [false, false, false];
    setSelected(newValue);
    newValue[index] = true;

    setSelected(newValue);
  }, []);

  return (
    <View style={styles.content}>
      <ImageButton
        imageSource={sadImage}
        index={0}
        selected={selected[0]}
        onCheck={handleSelect}
      />
      <ImageButton
        imageSource={neutralImage}
        index={1}
        selected={selected[1]}
        onCheck={handleSelect}
      />
      <ImageButton
        imageSource={happyImage}
        index={2}
        selected={selected[2]}
        onCheck={handleSelect}
      />
    </View>
  );
};

export default ImageGroupSelector;
