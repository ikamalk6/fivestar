import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Dimensions,
  Animated,
  StatusBar,
  Platform,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {normalize, vh, vw} from '../../utils/dimensions';
import {IMAGE} from '../../utils/images';
import {STRINGNAME} from '../../utils/string';

const {height, width} = Dimensions.get('window');

export default function SplashScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(fadeAnim, {
      toValue: 1,
      // duration: 2000,
      bounciness: 20,
      speed: 2,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  useEffect(() => {
    setTimeout(() => navigation.replace(STRINGNAME.LOGIN_SCREEN), 3000);
  });
  const navigation = useNavigation<any>();

  return (
    <View style={styles.mainView}>
      <StatusBar hidden={true} />
      <ImageBackground style={styles.background} source={IMAGE.background} />
      <Image style={styles.splash} source={IMAGE.splash} />
      <Image style={styles.five} source={IMAGE.fiveLogo} />

      <Animated.View
        style={{
          transform: [
            {
              scale: fadeAnim,
            },
          ],
          position: 'absolute',
        }}>
        <Image style={styles.star} source={IMAGE.starLogo} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    height: vh(812),
    width: vw(375),
  },
  background: {
    height: height,
    resizeMode: 'contain',
    width: width,
  },
  splash: {
    position: 'absolute',
    zIndex: 1,
    height: height,
    width: width,
  },
  five: {
    height: vh(79.78),
    width: vw(317),
    zIndex: 2,
    position: 'absolute',
    alignSelf: 'center',
    top: Platform.OS === 'ios' ? normalize(83) : normalize(40),
  },
  star: {
    height: vh(79.78),
    width: vw(97),
    zIndex: 3,
    position: 'absolute',
    marginLeft: normalize(200),
    // marginBottom: 50,
    // top: 65,
    top: Platform.OS === 'ios' ? normalize(83) : normalize(40),
  },
});
