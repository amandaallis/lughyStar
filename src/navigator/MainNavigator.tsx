import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

const OPTIONS = {
  headerShown: false,
};

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={OPTIONS}>
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
