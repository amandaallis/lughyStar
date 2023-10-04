import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
