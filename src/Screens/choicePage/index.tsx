import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

export default function ChoicePage() {
  const [isDisabled, SetisDisabled] = useState(true);

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
        onPress={() => {
          SetisDisabled(!isDisabled);
        }}
        style={{
          marginVertical: 20,
          borderWidth: 2,
          borderColor: '#1A1A1B',
          borderRadius: 5,
        }}>
        {isDisabled ? (
          <ImageBackground
            style={styles.fan}
            source={require('../../assets/image/fan.png')}
          />
        ) : (
          <ImageBackground
            style={styles.fan}
            source={require('../../assets/image/athl.png')}
          />
        )}
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
        disabled={isDisabled}
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
    paddingTop: 60,
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
    marginTop: 10,
  },
  fan: {
    height: 104,
    width: '100%',
  },
  button: {
    height: 40,
    width: '96%',
    borderRadius: 5,
    alignSelf: 'center',
  },
});
