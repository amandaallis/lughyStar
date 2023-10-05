import React, {useCallback, useMemo, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const styles = StyleSheet.create({
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
  const [read, setRead] = useState(false);

  const containerStyle = useMemo(
    () => ({
      backgroundColor: read ? '#BBD030' : '#E5F869',
      borderRadius: 8,
      flexDirection: 'row',
      padding: 4,
      alignItems: 'center',
    }),
    [read],
  );

  const handlePress = useCallback(() => {
    setRead(true);
  }, []);

  return (
    <TouchableOpacity style={containerStyle} onPress={handlePress}>
      {Icon}
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.text}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationItem;
