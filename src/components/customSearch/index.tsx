import {StyleSheet, Text, View, TextInput, Image, FlatList} from 'react-native';
import React, {useState} from 'react';
import COLOR from '../../utils/colors';
import {useDispatch, useSelector} from 'react-redux';
import {normalize, vh, vw} from '../../utils/dimensions';
import {zipcodeAction} from '../../screens/completeProfile/zipCode/action';
import {STRINGNAME} from '../../utils/string';

export default function SearchTextinput(props: any) {
  const {style} = props;
  const dispacth = useDispatch<any>();

  return (
    <View style={style}>
      <Text style={styles.seachTextStyle}>{STRINGNAME.SEARCH_FOR_ZIPCODE}</Text>
      <TextInput
        style={[styles.containerView]}
        placeholder={STRINGNAME.SEARCH_FOR_ZIPCODE}
        placeholderTextColor={COLOR.white}
        onChangeText={text => dispacth(zipcodeAction(text))}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  seachTextStyle: {
    color: COLOR.white,
    fontStyle: 'italic',
    fontSize: 24,
    fontWeight: '800',
    marginVertical: 10,
  },
  containerView: {
    height: vh(40),
    width: '100%',
    borderRadius: normalize(5),
    backgroundColor: COLOR.black,
    borderWidth: 1,
    borderColor: COLOR.white,
    color: COLOR.white,
    fontWeight: '900',
    padding: 10,
    fontSize: 16,
  },
});
