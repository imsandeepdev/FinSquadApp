import React, { ReactNode, useEffect } from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  View,
  ViewStyle,
  StatusBarStyle,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { showNavigationBar } from 'react-native-navigation-bar-color';

import { Styles } from './styles';
import { AppColor } from '../../res';
import { AppLoader } from '../AppLoader';

interface StoryScreenProps {
  children?: ReactNode;
  statusBarStyle?: StatusBarStyle;
  statusBarBackgroundColor?: string;
  statusBarIosStyle?: ViewStyle;
  loading?: boolean;
  bottomBarIosStyle?: ViewStyle;
  androidBottomIntense?: boolean;
}

export const StoryScreen: React.FC<StoryScreenProps> = ({
  children,
  statusBarStyle = 'light-content',
  statusBarBackgroundColor,
  statusBarIosStyle,
  loading = false,
  bottomBarIosStyle,
  androidBottomIntense = true,
}) => {
  const insets = useSafeAreaInsets();

  useEffect(() => {
    showNavigationBar();
  }, []);

  return (
    <>
      {/* STATUS BAR */}
      <StatusBar
        barStyle={statusBarStyle}
        backgroundColor={statusBarBackgroundColor}
        translucent={false}
      />

      {/* TOP SAFE AREA (iOS notch / Android status bar) */}
      <SafeAreaView
        edges={['top']}
        style={[Styles.statusBar, statusBarIosStyle]}
      />

      {/* MAIN CONTENT AREA */}
      <SafeAreaView
        edges={['left', 'right']}
        style={[
          Styles.mainContainer,
          Platform.OS === 'android' && androidBottomIntense
            ? { paddingBottom: insets.bottom }
            : null,
        ]}
      >
        {/* iOS → KeyboardAvoidingView | Android → Normal View */}
        {Platform.OS === 'ios' ? (
          <KeyboardAvoidingView
            style={Styles.root}
            behavior="padding"
            keyboardVerticalOffset={insets.top}
          >
            {children}
          </KeyboardAvoidingView>
        ) : (
          <View style={Styles.root}>{children}</View>
        )}
      </SafeAreaView>

      {/* LOADING OVERLAY */}
      {loading && (
        <AppLoader
          visible
          heading="Loading..."
          topTitle="Please wait"
          activityIndicator
        />
      )}

      {/* iOS BOTTOM SAFE AREA (home indicator) */}
      {Platform.OS === 'ios' && bottomBarIosStyle && (
        <SafeAreaView
          edges={['bottom']}
          style={[Styles.bottomBar, bottomBarIosStyle]}
        />
      )}
    </>
  );
};
