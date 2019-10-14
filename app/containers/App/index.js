/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import AppNavigator from '../Navigation';
import { ThemeProvider,Text} from 'react-native-elements';
const theme = {
  Text:{
    style:{
      
      fontSize:16,
    },
    
  },
};
const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <AppNavigator></AppNavigator>
    </ThemeProvider>
  );
};

export default App;
