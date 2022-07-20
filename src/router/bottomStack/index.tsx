import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SearchTab from '../../screens/home/searchScreen';
import UploadTab from '../../screens/home/uploadScreen';
import ActivityTab from '../../screens/home/activityScreen';
import AccountTab from '../../screens/home/accountScreen';
import TAB_NAME from './tabNames';
import {vh, vw} from '../../utils/dimensions';
import {IMAGE} from '../../utils/images';
import Home from '../../screens/home/homeScreen';
import COLOR from '../../utils/colors';

export default function BottomStack() {
  const TabBar = createBottomTabNavigator();
  return (
    <TabBar.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLOR.black,
        },
        tabBarActiveTintColor: COLOR.sky,
      }}>
      <TabBar.Screen
        name={TAB_NAME.HOME}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={
                  focused
                    ? [styles.bottomIcon, {tintColor: COLOR.sky}]
                    : styles.bottomIcon
                }
                source={IMAGE.homeDisable}
              />
            );
          },
        }}
      />
      <TabBar.Screen
        name={TAB_NAME.SEARCH}
        component={SearchTab}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={
                  focused
                    ? [styles.bottomIcon, {tintColor: COLOR.sky}]
                    : styles.bottomIcon
                }
                source={IMAGE.search2}
              />
            );
          },
        }}
      />
      <TabBar.Screen
        name={TAB_NAME.UPLOAD}
        component={UploadTab}
        options={{
          tabBarIcon: () => {
            return <Image style={styles.bottomIcon} source={IMAGE.upload} />;
          },
        }}
      />
      <TabBar.Screen
        name={TAB_NAME.ACTIVITY}
        component={ActivityTab}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={
                  focused
                    ? [styles.bottomIcon, {tintColor: COLOR.sky}]
                    : styles.bottomIcon
                }
                source={IMAGE.activity}
              />
            );
          },
        }}
      />
      <TabBar.Screen
        name={TAB_NAME.ACCOUNT}
        component={AccountTab}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={
                  focused
                    ? [styles.bottomIcon, {tintColor: COLOR.sky}]
                    : styles.bottomIcon
                }
                source={IMAGE.account}
              />
            );
          },
        }}
      />
    </TabBar.Navigator>
  );
}

const styles = StyleSheet.create({
  bottomIcon: {
    height: vh(20),
    width: vw(20),
  },
});
