import React from 'react';
import { StatusBar } from 'expo-status-bar';

import{ NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import AuthProvider from './src/contexts/auth';

export default function App(){
  return(
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor='#410404' barStyle="dark-content" />
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  )
}
