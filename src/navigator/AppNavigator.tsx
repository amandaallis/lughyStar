import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import DashboardScreen from '../screens/DashboardScreen';
import TellingStorieScreen from '../screens/TellingStorieScreen';
import FeedbackStorieScreen from '../screens/FeedbackStorieScreen';
import TipScreen from '../screens/TipScreen';
import HowUFeelingScreen from '../screens/HowUFeelingScreen';
import FeedbackStorieTwoScreen from '../screens/FeedbackStorieTwoScreen';
import FeedbackStorieThreeScreen from '../screens/FeedbackStorieThreeScreen';
import QuizScreen from '../screens/QuizScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import CentralOfTipsScreen from '../screens/CentralOfTipsScreen';

const Stack = createStackNavigator();

const OPTIONS = {
  headerShown: false,
};

const AppNavigator = () => (
  <Stack.Navigator screenOptions={OPTIONS} initialRouteName="Dashboard">
    <Stack.Screen name="Dashboard" component={DashboardScreen} />
    <Stack.Screen name="HowUFeeling" component={HowUFeelingScreen} />
    <Stack.Screen name="TellingStorie" component={TellingStorieScreen} />
    <Stack.Screen name="FeedbackStorie" component={FeedbackStorieScreen} />
    <Stack.Screen
      name="FeedbackStorieTwo"
      component={FeedbackStorieTwoScreen}
    />
    <Stack.Screen
      name="FeedbackStorieThree"
      component={FeedbackStorieThreeScreen}
    />
    <Stack.Screen name="Tip" component={TipScreen} />
    <Stack.Screen name="Quiz" component={QuizScreen} />
    <Stack.Screen name="Notification" component={NotificationsScreen} />
    <Stack.Screen name="CentralOfTips" component={CentralOfTipsScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
