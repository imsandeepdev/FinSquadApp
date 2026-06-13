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
          name="Login"
          component={Login}
        />

         <Stack.Screen
          name="Register"
          component={Register}
        />

        <Stack.Screen
          name="MainApp"
          component={BottomTabs}
        />

        <Stack.Screen
          name="AIWealthCoachScreen"
          component={AIWealthCoachScreen}
        />

         <Stack.Screen
          name="CustomerOnboardingScreen"
          component={CustomerOnboardingScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;