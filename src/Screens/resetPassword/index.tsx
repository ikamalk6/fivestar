import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {IMAGE} from '../../utils/images';
import COLOR from '../../utils/colors';
import {STRINGNAME} from '../../utils/string';
import CustomTextInput from '../../components/customTextInput';
import GoBack from '../../components/goBackBtn';
import {vh, vw} from '../../utils/dimensions';

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <GoBack />
      <Text style={styles.heading}>{STRINGNAME.RESET_PASSWORD}</Text>
      <Text style={styles.optionTxt}>
        {STRINGNAME.PLEASE_CREATE_A_NEW_PASSWORD}
      </Text>
      <CustomTextInput
        label={STRINGNAME.ENTER_NEW_PASSWORD}
        onChangeText={(text: string) => {
          setPassword(text);
        }}
      />
      <CustomTextInput
        label={STRINGNAME.CONFIRM_NEW_PASSWORD}
        onChangeText={(text: string) => {
          setPassword(text);
        }}
      />
      <Image
        style={styles.button}
        source={password.length > 5 ? IMAGE.saveEnable : IMAGE.saveDisable}
      />

      <Image style={styles.biker} source={IMAGE.biker2} />
      <Image style={styles.footer} source={IMAGE.footer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.black,
    paddingHorizontal: 12,
  },
  heading: {
    fontSize: 26,
    color: COLOR.white,
    fontStyle: 'italic',
    fontWeight: '900',
    marginBottom: 10,
  },
  optionTxt: {
    color: COLOR.white,
    marginBottom: 20,
  },
  biker: {
    height: vh(354),
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
  button: {
    width: '100%',
    height: vh(57),
    zIndex: 1,
    resizeMode: 'contain',
    marginTop: 40,
  },
});
