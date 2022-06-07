import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../components/accounts/login';
import SignupScreen from '../components/accounts/signup';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Stack = createStackNavigator();

const AuthStack = () => {
  GoogleSignin.configure({
    webClientId: '853565198170-pu45f15ndrm5idalqai7iuh4fmfi2qns.apps.googleusercontent.com',
  });
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Login"
        component={SignInScreen}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;