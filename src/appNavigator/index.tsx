import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/Login';
import Register from '../screens/Register';
import Dashboard from '../screens/Dashboard';
import AIWealthCoachScreen from '../screens/AIBased';
import {navigationRef} from './navigationService';
import CustomerOnboardingScreen from '../screens/CustomerOnBoard';
import { BottomTabs } from '../components';
import COBListScreen from '../screens/COBList';
import { NAVIGATE_NAME } from '../utils/const';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="MainApp"
        screenOptions={{
          headerShown: false,
        }}>
        
        <Stack.Screen
          name={NAVIGATE_NAME.LOGIN}
          component={Login}
        />

         <Stack.Screen
          name={NAVIGATE_NAME.REGISTER}
          component={Register}
        />

        <Stack.Screen
          name="MainApp"
          component={BottomTabs}
        />

        <Stack.Screen
          name={NAVIGATE_NAME.AIWEALTH_COACH_SCREEN}
          component={AIWealthCoachScreen}
        />

         <Stack.Screen
          name={NAVIGATE_NAME.CUSTOMER_ONBOARDING_SCREEN}
          component={CustomerOnboardingScreen}
        />

        <Stack.Screen
          name={NAVIGATE_NAME.COB_LIST_SCREEN}
          component={COBListScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;