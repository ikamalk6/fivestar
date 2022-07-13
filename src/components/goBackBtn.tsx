import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {IMAGE} from '../utils/images';

export default function GoBack(props: any) {
  const {style} = props;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Image style={[styles.arrow, style]} source={IMAGE.arrow} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  arrow: {
    height: 20,
    width: 20,
    marginBottom: 15,
  },
});
