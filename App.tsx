/**
 * (React Native)
 * Sandeep Dev
 * sandeepdev00@gmail.com
 *
 * @format
 */


import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';

// @ts-ignore
import { ThemeProvider } from './src/utils/provider/themeProvider';
import { Login } from './src/screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// @ts-ignore

import Dashboard from './src/screens/Dashboard';
import AppNavigator from './src/appNavigator';
function App() {
  const isDarkMode = useColorScheme() === 'dark';
  
  

  return (
    <SafeAreaProvider>
    <ThemeProvider>
      
      <AppNavigator/>
    
    </ThemeProvider>
    </SafeAreaProvider>
  );
}
export default App;
