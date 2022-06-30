import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/loginScreen';
import SignUp from '../screens/signUpScreen';
import SplashScreen from '../screens/splashScreen';
import Terms from '../screens/termScreen';
import ValidateOtp from '../screens/validateOtp';
import ChoicePage from '../screens/choicePage';
import CompleteProfile from '../screens/completeProfile';
import {StatusBar} from 'react-native';
import FindAccount from '../screens/findAccount';
import FindMobileAccount from '../screens/findAccount/withNumber';
import FindEmailAccount from '../screens/findAccount/withEmail';

export default function NavigationScreen() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
      <Stack.Navigator>
        {/* <Stack.Screen
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
        /> */}
        <Stack.Screen
          name="ChoicePage"
          component={ChoicePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CompleteProfile"
          component={CompleteProfile}
          // options={{headerShown: false}}
        />
        <Stack.Screen name="FindAccount" component={FindAccount} />
        {/* <Stack.Screen name="FindMobileAccount" component={FindMobileAccount} /> */}
        <Stack.Screen name="FindEmailAccount" component={FindEmailAccount} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
