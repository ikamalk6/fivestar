import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {normalize} from '../utils/dimensions';
import COLOR from '../utils/colors';
import {IMAGE} from '../utils/images';

export default function CustomSportSelection({img, imgText, helper}: any) {
  const [choose, setChoose] = useState<any>(false);

  const selectedItems = () => {
    helper(imgText);
    setChoose(!choose);
  };

  return (
    <TouchableOpacity style={[styles.renderContainer]} onPress={selectedItems}>
      <View
        style={[
          styles.gridView,
          {backgroundColor: choose ? COLOR.sky : '#121212'},
        ]}>
        {choose && <Image style={styles.rightCheck} source={IMAGE.tick} />}
        <Image source={{uri: img}} style={styles.gridimg} />
        <Text
          style={[
            styles.imgTextStyle,
            {
              color: choose ? COLOR.black : COLOR.white,
              fontWeight: choose ? '900' : '400',
            },
          ]}>
          {imgText}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  gridimg: {
    height: 70,
    width: 60,
    resizeMode: 'contain',
  },
  gridView: {
    height: normalize(120),
    width: normalize(108),
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(6),
  },
  imgTextStyle: {
    fontFamily: 'helvetica-Oblique',
    fontSize: 15,
    marginTop: normalize(5),
  },
  rightCheck: {
    height: normalize(10),
    width: normalize(10),
    // bottom: normalize(95),
    resizeMode: 'contain',
    left: normalize(40),
    backgroundColor: 'black',
  },
  renderContainer: {
    marginHorizontal: normalize(5),
    width: normalize(104),
    height: normalize(112),
    marginTop: normalize(20),
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: normalize(15),
  },
});
