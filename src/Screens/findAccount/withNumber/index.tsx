import {StyleSheet, Text, TextInput, View, Image} from 'react-native';
import React, {useState} from 'react';
import {STRINGNAME} from '../../../utils/string';
import {IMAGE} from '../../../utils/images';
import COLOR from '../../../utils/colors';
import GoBack from '../../../components/goBackBtn';

export default function FindMobileAccount() {
  const [number, setNumber] = useState('');
  return (
    <View style={styles.container}>
      <GoBack />
      <Text style={styles.heading}>{STRINGNAME.FIND_ACCOUNT}</Text>
      <Text style={styles.optionTxt}>{STRINGNAME.CORRECT_NUMBER_MSG}</Text>
      <TextInput
        onChangeText={text => {
          setNumber(text);
        }}
        style={styles.txtinpt}
        placeholder={'MOBILE NO'}
        placeholderTextColor={COLOR.white}
      />
      <Image
        style={styles.button}
        source={number.length > 9 ? IMAGE.getCodeEnable : IMAGE.getCodeDisable}
      />

      <Image style={styles.biker} source={IMAGE.biker1} />
      <Image style={styles.footer} source={IMAGE.footer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.black,
  },
  heading: {
    fontSize: 26,
    color: COLOR.white,
    fontStyle: 'italic',
    fontWeight: '900',
    marginBottom: 20,
  },
  optionTxt: {
    color: COLOR.white,
  },
  button: {
    width: '100%',
    height: 57,
    zIndex: 1,
    resizeMode: 'contain',
  },
  txtinpt: {
    color: COLOR.white,
    padding: 10,
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: COLOR.white,
    marginBottom: 40,
    borderRadius: 5,
  },
  biker: {
    height: 354,
    width: '100%',
    marginTop: 'auto',
    bottom: 0,
    resizeMode: 'contain',
  },
  footer: {
    resizeMode: 'contain',
    zIndex: 2,
    bottom: 0,
    position: 'absolute',
  },
});
