import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './screens/WelcomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';

const Home = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Home.Navigator screenOptions={{headerShown: false}}>
        <Home.Screen name= 'WelcomeScreen' component= {WelcomeScreen}/>
        <Home.Screen name= 'RegisterScreen' component= {RegisterScreen}/>
        <Home.Screen name= 'HomeScreen' component= {HomeScreen}/>
      </Home.Navigator>
    </NavigationContainer>
  );

}
