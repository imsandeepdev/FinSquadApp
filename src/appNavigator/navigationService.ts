import * as React from 'react';
import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef<any>();

export const navigate = (
  routeName: string,
  params?: Record<string, any>,
) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(routeName, params);
  }
};

export const reset = (
  routeName: string,
  params?: Record<string, any>,
) => {
  if (navigationRef.isReady()) {
    navigationRef.reset({
      index: 0,
      routes: [{name: routeName, params}],
    });
  }
};

export const push = (
  routeName: string,
  params?: Record<string, any>,
) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(routeName, params));
  }
};

export default {
  navigate,
  reset,
  push,
};