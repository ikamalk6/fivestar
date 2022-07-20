import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React from 'react';
import {normalize} from '../utils/dimensions';
import COLOR from '../utils/colors';
import {IMAGE} from '../utils/images';

export default function CustomSearchBar(props: any) {
  const {heading, placeholder, style} = props;
  return (
    <View style={[styles.mainView, style]}>
      <Text style={styles.sportTextHeader}>{heading}</Text>
      <View style={styles.textInputViewStyle}>
        <Image style={styles.searchImgStyle} source={IMAGE.search} />
        <TextInput
          style={styles.textInputStyle}
          placeholder={placeholder}
          placeholderTextColor={COLOR.white}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    marginLeft: normalize(15),
  },
  textInputViewStyle: {
    borderWidth: 1,
    height: normalize(45),
    width: normalize(350),
    borderRadius: normalize(5),
    marginTop: normalize(5),
    borderColor: COLOR.white,
    flexDirection: 'row',
    alignItems: 'center',
    // marginRight: normalize(19),
  },
  searchImgStyle: {
    height: normalize(20),
    width: normalize(20),
    marginLeft: normalize(15),
    resizeMode: 'contain',
  },
  textInputStyle: {
    marginHorizontal: normalize(20),
    height: normalize(45),
    fontSize: 14,
    color: COLOR.white,
  },
  sportTextHeader: {
    color: COLOR.white,
    width: normalize(280),
    height: normalize(64),
    fontSize: 24,
    fontWeight: '900',
    fontStyle: 'italic',
  },
});
