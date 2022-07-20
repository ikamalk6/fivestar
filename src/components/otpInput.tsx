import {StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';

export default function OtpInput(props: any) {
  const [text, setText] = useState('');
  const {callBack} = props;
  return (
    <TextInput
      style={styles.txtInput}
      maxLength={1}
      keyboardType="numeric"
      onChangeText={text => {
        setText(callBack(text));
      }}></TextInput>
  );
}

const styles = StyleSheet.create({
  txtInput: {
    backgroundColor: '#000000',
    height: 50,
    width: 65,
    fontWeight: '900',
    fontSize: 30,
    borderRadius: 5,
    borderColor: '#ffffff',
    borderWidth: 1,
    color: '#44C2E3',
    textAlign: 'center',
  },
});
