import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Dimensions,
  Animated,
  StatusBar,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';

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
    setTimeout(() => navigation.replace('LoginScreen'), 3000);
  });
  const navigation = useNavigation<any>();

  return (
    <View>
      <StatusBar hidden={true} />
      <ImageBackground
        style={styles.background}
        source={require('../../assets/image/Tut.png')}
      />
      <Image
        style={styles.splash}
        source={require('../../assets/image/Splash.png')}
      />
      <Image
        style={styles.five}
        source={require('../../assets/image/Union.png')}
      />

      <Animated.View
        style={{
          transform: [
            {
              scale: fadeAnim,
            },
          ],
          position: 'absolute',
        }}>
        <Image
          style={styles.star}
          source={require('../../assets/image/star.png')}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    height: 70,
    width: 310,
    zIndex: 2,
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 70,
  },
  star: {
    height: 72,
    width: 99,
    zIndex: 3,
    top: 65,
    marginLeft: 206,
    marginTop: 4,
    position: 'absolute',
  },
});
