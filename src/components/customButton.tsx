import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import COLOR from '../utils/colors';
import {normalize, vh} from '../utils/dimensions';

export function EnableButton(props: any) {
  const {label, onPress} = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}

export function DisableButton(props: any) {
  const {label} = props;
  return (
    <TouchableOpacity style={styles.buttonDisabled}>
      <Text style={styles.buttonTextDisabled}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLOR.sky,
    borderRadius: 5,
    height: vh(48),
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: normalize(30),
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    fontWeight: '900',
    fontStyle: 'italic',
    textTransform: 'uppercase',
  },
  buttonDisabled: {
    backgroundColor: COLOR.mud,
    borderRadius: 5,
    height: vh(48),
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: normalize(30),
  },
  buttonTextDisabled: {
    fontSize: 16,
    textAlign: 'center',
    color: COLOR.grey,
    fontWeight: '900',
    fontStyle: 'italic',
    textTransform: 'uppercase',
  },
});
