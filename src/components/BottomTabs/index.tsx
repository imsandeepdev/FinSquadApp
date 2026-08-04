import React from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';

import {
  createBottomTabNavigator,
  BottomTabBarButtonProps,
} from '@react-navigation/bottom-tabs';
import { ParamListBase } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Dashboard from '../../screens/Dashboard';
import AIWealthCoachScreen from '../../screens/AIBased';
import ProfileScreen from '../../screens/Profile';
import ReportScreen from '../../screens/Report';
import { getStyles } from './styles';
import { useTheme } from '../../utils/provider/themeProvider';
import { responsiveSize } from '../../res';


/* -----------------------------
   Bottom Tab Param List
------------------------------ */

export interface BottomTabParamList extends ParamListBase {
  Dashboard: undefined;
  Clients: undefined;
  AI: undefined;
  Report: undefined;
  Account: undefined;
}

const Tab:any = createBottomTabNavigator<BottomTabParamList>();

/* -----------------------------
   Dummy Screens
------------------------------ */

const ClientScreen: React.FC = () => {
  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);
  return <View style={styles.screen} />;
};

/* -----------------------------
   AI Button Props
------------------------------ */

interface AIButtonProps extends BottomTabBarButtonProps {}

const AIButton: React.FC<AIButtonProps> = ({
  children,
  onPress,
}) => {
    const { theme: { themeColor } } = useTheme();
    const styles = getStyles(themeColor);
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.aiContainer}
      onPress={onPress}>
      <View style={styles.aiButton}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

/* -----------------------------
   Bottom Tabs
------------------------------ */

const BottomTabs: React.FC = () => {

  const { theme: { themeColor } } = useTheme();
  const styles = getStyles(themeColor);
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={({route}: {route: any}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,

        tabBarIcon: ({focused, color, size}: {focused: boolean; color: string; size: number}) => {
          let iconName: string;

          switch (route.name) {
            case 'Dashboard':
              iconName = focused
                ? 'grid'
                : 'grid-outline';
              break;

            case 'Clients':
              iconName = focused
                ? 'people'
                : 'people-outline';
              break;

            case 'AI':
              iconName = focused
                ? 'grid'
                : 'grid-outline';
              break;

            case 'Report':
              iconName = focused
                ? 'bar-chart'
                : 'bar-chart-outline';
              break;

            case 'Account':
              iconName = focused
                ? 'person-circle'
                : 'person-circle-outline';
              break;

            default:
              iconName = 'ellipse';
          }

          return (
            <Ionicons
              name={iconName}
              size={responsiveSize(24)}
              color={focused ? themeColor.appColor : themeColor.lightBlack}
            />
          );
        },
      })}>
      {/* <Tab.Screen
        name="Dashboard"
        component={Dashboard}
      /> */}
       <Tab.Screen
        name="AI"
        component={AIWealthCoachScreen}
      />

      <Tab.Screen
        name="Clients"
        component={ClientScreen}
      />

      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarButton: (props: BottomTabBarButtonProps) => (
            <AIButton {...props} />
          ),
        }}
      />

      <Tab.Screen
        name="Report"
        component={ReportScreen}
      />

      <Tab.Screen
        name="Account"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
