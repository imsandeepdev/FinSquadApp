import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/Login';
import Register from '../screens/Register';
import AIWealthCoachScreen from '../screens/AIBased';
import {navigationRef} from './navigationService';
import CustomerOnboardingScreen from '../screens/CustomerOnBoard';
import { BottomTabs } from '../components';
import COBListScreen from '../screens/COBList';
import LoanTypeSelectionScreen from '../screens/LoanTypeSelection';
import LoanApprovalScreen from '../screens/LoanApproval';
import PreDisbursementScreen from '../screens/PreDisbursement';
import RepaymentScreen from '../screens/Repayment';
import LoanOriginationScreen from '../screens/LoanOrigination';
import ApprovalQueueScreen from '../screens/ApprovalQueue';
import EditProfileScreen from '../screens/Profile/EditProfile';
import DocumentsKYCScreen from '../screens/Profile/DocumentsKYC';
import ChangePasswordScreen from '../screens/Profile/ChangePassword';
import MyPerformanceScreen from '../screens/Profile/MyPerformance';
import MyCentresScreen from '../screens/Profile/MyCentres';
import MeetingScreen from '../screens/Meeting';
import { NAVIGATE_NAME } from '../utils/const';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={NAVIGATE_NAME.LOGIN}
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

        <Stack.Screen
          name={NAVIGATE_NAME.LOAN_TYPE_SELECTION_SCREEN}
          component={LoanTypeSelectionScreen}
        />

        <Stack.Screen
          name={NAVIGATE_NAME.LOAN_APPROVAL_SCREEN}
          component={LoanApprovalScreen}
        />

        <Stack.Screen
          name={NAVIGATE_NAME.PRE_DISBURSEMENT_SCREEN}
          component={PreDisbursementScreen}
        />

        <Stack.Screen
          name={NAVIGATE_NAME.REPAYMENT_SCREEN}
          component={RepaymentScreen}
        />

        <Stack.Screen
          name={NAVIGATE_NAME.LOAN_ORIGINATION_SCREEN}
          component={LoanOriginationScreen}
        />

        <Stack.Screen
          name={NAVIGATE_NAME.APPROVAL_QUEUE_SCREEN}
          component={ApprovalQueueScreen}
        />

        <Stack.Screen
          name={NAVIGATE_NAME.EDIT_PROFILE_SCREEN}
          component={EditProfileScreen}
        />

        <Stack.Screen
          name={NAVIGATE_NAME.DOCUMENTS_KYC_SCREEN}
          component={DocumentsKYCScreen}
        />

        <Stack.Screen
          name={NAVIGATE_NAME.CHANGE_PASSWORD_SCREEN}
          component={ChangePasswordScreen}
        />

        <Stack.Screen
          name={NAVIGATE_NAME.MY_PERFORMANCE_SCREEN}
          component={MyPerformanceScreen}
        />

        <Stack.Screen
          name={NAVIGATE_NAME.MY_CENTRES_SCREEN}
          component={MyCentresScreen}
        />

        <Stack.Screen
          name={NAVIGATE_NAME.MEETING_SCREEN}
          component={MeetingScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;