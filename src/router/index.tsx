import React from 'react';
import {StatusBar} from 'react-native';
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
import {ROUTE_NAME} from './routeNames';
import BottomStack from './bottomStack';
import SuggestionPage from '../screens/suggetionPage';

export default function NavigationScreen() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
      <Stack.Navigator>
        <Stack.Screen
          name={ROUTE_NAME.SPLASH_SCREEN}
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={ROUTE_NAME.LOGIN_SCREEN}
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ROUTE_NAME.SIGNUP}
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ROUTE_NAME.TERMS}
          component={Terms}
          options={{headerShown: false, presentation: 'modal'}}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={ROUTE_NAME.VALIDATEOTP}
          component={ValidateOtp}
        />
        <Stack.Screen
          name={ROUTE_NAME.CHOICE_PAGE}
          component={ChoicePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ROUTE_NAME.COMPLETE_PROFILE}
          component={CompleteProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ROUTE_NAME.SPORTSLOGOSCR}
          component={SportsLogoScr}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ROUTE_NAME.ZIP_CODE}
          component={ZipCode}
          options={{headerShown: false, presentation: 'transparentModal'}}
        />
        <Stack.Screen
          name={ROUTE_NAME.SUGGESTION_PAGE}
          component={SuggestionPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ROUTE_NAME.BOTTOM_STACK}
          component={BottomStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
