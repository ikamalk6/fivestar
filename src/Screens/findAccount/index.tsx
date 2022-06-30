import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {IMAGE} from '../../utils/images';
import COLOR from '../../utils/colors';
import {STRINGNAME} from '../../utils/string';
import GoBack from '../../components/goBackBtn';

export default function FindAccount() {
  return (
    <View style={styles.mainContainer}>
      <GoBack />
      <Text style={styles.heading}>{STRINGNAME.FIND_ACCOUNT}</Text>
      <Text style={styles.optionTxt}>{STRINGNAME.SELECT_OPTION}</Text>
      <Image style={styles.withNum} source={IMAGE.withNumber} />
      <Image style={styles.withUser} source={IMAGE.withUsername} />
      <Image style={styles.buttonDisable} source={IMAGE.nxtBtnDisable} />
      <Image style={styles.boxerImg} source={IMAGE.boxer} />
      <Image style={styles.footerImg} source={IMAGE.footer} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLOR.black,
    flex: 1,
    paddingHorizontal: 8,
  },
  heading: {
    fontSize: 26,
    color: COLOR.white,
    fontStyle: 'italic',
    fontWeight: '900',
  },
  optionTxt: {
    color: COLOR.white,
  },
  withNum: {
    width: '100%',
    height: 85,
    resizeMode: 'contain',
  },
  withUser: {
    width: '100%',
    height: 85,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  boxerImg: {
    height: 354,
    width: '100%',
    marginTop: 'auto',

    bottom: 0,
    resizeMode: 'contain',
  },
  footerImg: {
    resizeMode: 'contain',

    zIndex: 2,
    bottom: 0,
    position: 'absolute',
  },
  buttonDisable: {
    width: '100%',
    resizeMode: 'contain',
    height: 70,
  },
});
