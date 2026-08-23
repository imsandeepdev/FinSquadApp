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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Dashboard from '../../screens/Dashboard';
import AIInsightsScreen from '../../screens/AIInsights';
import ClientsScreen from '../../screens/Clients';
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

        tabBarIcon: ({focused}: {focused: boolean; color: string; size: number}) => {
          // Active tabs render in the brand color, inactive ones in the
          // theme's muted/placeholder tint — same pair used everywhere
          // else in the app for "selected vs. not" icon states.
          const tintColor = focused ? themeColor.appColor : themeColor.placeHolder;

          switch (route.name) {
            case 'Dashboard':
              // The asymmetric 4-tile "dashboard" glyph, not Ionicons'
              // plain uniform grid — matches the requested icon.
              return (
                <MaterialCommunityIcons
                  name={focused ? 'view-dashboard' : 'view-dashboard-outline'}
                  size={responsiveSize(24)}
                  color={tintColor}
                />
              );

            case 'Clients':
              // Requested icon is a single person inside a scan/viewfinder
              // frame (not the two-people "people" glyph) — matches
              // MaterialCommunityIcons' "face-recognition" exactly. It
              // only ships one weight, so focus is shown by color alone.
              return (
                <MaterialCommunityIcons
                  name="face-recognition"
                  size={responsiveSize(24)}
                  color={tintColor}
                />
              );

            case 'AI':
              // Requested icon is a hexagon outline with a sparkle inside
              // — MaterialCommunityIcons' "creation" glyph. Single weight,
              // so focus is shown by color alone.
              return (
                <MaterialCommunityIcons
                  name="creation"
                  size={responsiveSize(24)}
                  color={tintColor}
                />
              );

            case 'Report':
              // Ionicons' "bar-chart" has no outer frame — the requested
              // icon is a boxed bar-chart (rounded square border baked
              // into the glyph itself), which is MaterialCommunityIcons'
              // "chart-box".
              return (
                <MaterialCommunityIcons
                  name={focused ? 'chart-box' : 'chart-box-outline'}
                  size={responsiveSize(24)}
                  color={tintColor}
                />
              );

            case 'Account':
              // MaterialCommunityIcons' "account-circle" matches the
              // requested profile glyph (circle + head + shoulder arc),
              // consistent with the other MDI icons used in this bar.
              return (
                <MaterialCommunityIcons
                  name={focused ? 'account-circle' : 'account-circle-outline'}
                  size={responsiveSize(24)}
                  color={tintColor}
                />
              );

            default:
              return (
                <Ionicons
                  name="ellipse"
                  size={responsiveSize(24)}
                  color={tintColor}
                />
              );
          }
        },
      })}>
      {/* <Tab.Screen
        name="Dashboard"
        component={Dashboard}
      /> */}
       <Tab.Screen
        name="AI"
        component={AIInsightsScreen}
      />

      <Tab.Screen
        name="Clients"
        component={ClientsScreen}
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
