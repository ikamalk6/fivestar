import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../Screens/Login/LoginScreen';
import SignUp from '../Screens/SignUp/SignUp';
import SplashScreen from '../Screens/SplashScreen/SplashScreen';
import Terms from '../Screens/TermScreen/Terms';
import ValidateOtp from '../Screens/ValidateOtp/ValidateOtp';
import ChoicePage from '../Screens/choicePage';
import CompleteProfile from '../Screens/completeProfile';

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Terms"
          component={Terms}
          options={{headerShown: false}}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ValidateOtp"
          component={ValidateOtp}
        />
        <Stack.Screen name="ChoicePage" component={ChoicePage} />
        <Stack.Screen
          name="CompleteProfile"
          component={CompleteProfile}
          // options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
