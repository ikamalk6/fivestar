import {StyleSheet, Text, View, TextInput, Image, FlatList} from 'react-native';
import React, {useState} from 'react';
import COLOR from '../../utils/colors';
import {useDispatch, useSelector} from 'react-redux';
import {normalize, vh, vw} from '../../utils/dimensions';
import {zipcodeAction} from '../../screens/completeProfile/zipCode/action';

export default function SearchTextinput() {
  const dispacth = useDispatch<any>();

  return (
    <View>
      <Text style={styles.seachTextStyle}>{'zipcode'}</Text>
      <TextInput
        style={styles.containerView}
        onChangeText={text => dispacth(zipcodeAction(text))}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  seachTextStyle: {
    color: COLOR.white,
    fontStyle: 'italic',
    fontSize: 24,
  },
  containerView: {
    height: vh(40),
    width: '100%',
    borderRadius: normalize(5),
    backgroundColor: COLOR.black,
    borderWidth: 1,
    borderColor: COLOR.white,
    color: COLOR.white,
  },
});
