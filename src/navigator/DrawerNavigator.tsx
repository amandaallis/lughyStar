import {
  DrawerContentComponentProps,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import React from 'react';
import AppNavigator from './AppNavigator';
import DrawerTab from '../screens/DrawerTab';

const Drawer = createDrawerNavigator();

const OPTIONS = {
  headerShown: false,
  drawerType: 'front',
  drawerStyle: {
    width: '60%',
  },
};

const drawerContent = (props: DrawerContentComponentProps) => (
  <DrawerTab {...props} />
);

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={OPTIONS} drawerContent={drawerContent}>
      <Drawer.Screen name="AppNavigator" component={AppNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
