import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React from 'react';

import {normalize} from '../utils/dimensions';

import COLOR from '../utils/colors';
import {IMAGE} from '../utils/images';
import {STRINGNAME} from '../utils/string';

export default function CustomSearchButton() {
  return (
    <View style={styles.body}>
      <Text style={styles.sportTextHeader}>
        {STRINGNAME.WHAT_SPORTS_DO_YOU_LIKE}
      </Text>
      <View style={styles.textInputViewStyle}>
        <Image style={styles.searchImgStyle} source={IMAGE.tick} />
        <TextInput
          style={styles.textInputStyle}
          placeholder={'search sport'}
          placeholderTextColor={COLOR.white}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    marginLeft: normalize(15),
    marginTop: normalize(10),
  },
  textInputViewStyle: {
    borderWidth: 1,
    height: normalize(45),
    width: normalize(350),
    borderRadius: normalize(5),
    marginTop: normalize(5),
    borderColor: COLOR.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: normalize(19),
  },
  searchImgStyle: {
    height: normalize(20),
    width: normalize(20),
    marginLeft: normalize(15),
  },
  textInputStyle: {
    marginHorizontal: normalize(20),
    height: normalize(45),
    fontSize: 14,
    color: COLOR.WHITE,
  },
  sportTextHeader: {
    color: COLOR.WHITE,
    width: normalize(280),
    height: normalize(64),
    fontSize: 24,
    fontWeight: '900',
  },
  //   renderContainer: {
  //     marginHorizontal: normalize(5),
  //     width: normalize(104),
  //     height: normalize(112),
  //     marginTop: normalize(20),
  //     backgroundColor: '#121212',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     borderRadius: 5,
  //   },
  //   sportsImg: {
  //     height: normalize(50),
  //     width: normalize(50),
  //     resizeMode: 'contain',
  //   },
  //   sportText: {
  //     color: COLOR.WHITE,
  //     marginTop: normalize(10),
  //   },
  // });
});
