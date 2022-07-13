import React from 'react';
import {StatusBar} from 'react-native';
import {STRINGNAME} from '../utils/string';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/splashScreen';
import LoginScreen from '../screens/loginScreen';
import SignUp from '../screens/signUpScreen';
import Terms from '../screens/termScreen';
import ValidateOtp from '../screens/validateOtp';
import ChoicePage from '../screens/choicePage';
import CompleteProfile from '../screens/completeProfile';
import ZipCode from '../screens/completeProfile/zipCode';
import SportsLogoScr from '../screens/completeProfile/sportsLogo';

export default function NavigationScreen() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
      <Stack.Navigator>
        <Stack.Screen
          name={STRINGNAME.SPLASH_SCREEN}
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={STRINGNAME.LOGIN_SCREEN}
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={STRINGNAME.SIGNUP}
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={STRINGNAME.TERMS}
          component={Terms}
          options={{headerShown: false}}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={STRINGNAME.VALIDATEOTP}
          component={ValidateOtp}
        />
        <Stack.Screen
          name={STRINGNAME.CHOICE_PAGE}
          component={ChoicePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={STRINGNAME.COMPLETE_PROFILE}
          component={CompleteProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={STRINGNAME.SPORTSLOGOSCR}
          component={SportsLogoScr}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ZipCode"
          component={ZipCode}
          options={{headerShown: false, presentation: 'transparentModal'}}
        />
        {/* <Stack.Screen name="FindAccount" component={FindAccount} /> */}
        {/* <Stack.Screen name="FindMobileAccount" component={FindMobileAccount} /> */}
        {/* <Stack.Screen name="FindEmailAccount" component={FindEmailAccount} /> */}
        {/* <Stack.Screen name="SportsScreen" component={SportsScreen} /> */}
        {/* <Stack.Screen name="Reset" component={ResetPassword} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
