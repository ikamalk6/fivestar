import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function ChoicePage() {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ValidateOtp');
        }}>
        <Image
          style={styles.arrow}
          source={require('../../assets/image/lefta.png')}
        />
      </TouchableOpacity>
      <Text style={styles.question}>{'Who are You?'}</Text>
      <TouchableOpacity
        style={{
          marginVertical: 20,
          borderWidth: 2,
          borderColor: '#1A1A1B',
          borderRadius: 5,
        }}>
        <ImageBackground
          style={styles.fan}
          source={require('../../assets/image/fan.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginVertical: 20,
          borderWidth: 2,
          borderColor: '#1A1A1B',
          borderRadius: 5,
        }}>
        <ImageBackground
          style={styles.fan}
          source={require('../../assets/image/athl.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('CompleteProfile');
        }}
        style={{marginTop: 330}}>
        <Image
          style={styles.button}
          source={require('../../assets/image/ButtonOn.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    padding: 10,
  },
  arrow: {
    height: 18,
    width: 18,
  },
  question: {
    color: '#ffffff',
    fontSize: 26,
    fontStyle: 'italic',
    fontWeight: '900',
  },
  fan: {
    height: 104,
    width: '100%',
  },
  button: {
    height: 40,
    width: '96%',
    borderRadius: 5,
    // bottom: 0,
    // marginTop: 330,
    alignSelf: 'center',
  },
});
