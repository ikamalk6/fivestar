import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';

export default function OtpInput(props: any) {
  const [text, setText] = useState('');
  const {callBack} = props;
  return (
    // <View style={{flexDirection: 'row', borderWidth: 2, borderColor: 'red'}}>
    <TextInput
      style={styles.txtInput}
      maxLength={1}
      keyboardType="numeric"
      onChangeText={text => {
        setText(callBack(text));
      }}></TextInput>
    // </View>
  );
}

const styles = StyleSheet.create({
  txtInput: {
    backgroundColor: '#000000',
    height: 48,
    width: 64,

    fontSize: 20,
    borderRadius: 5,
    borderColor: '#ffffff',
    borderWidth: 1,
    color: '#44C2E3',
    textAlign: 'center',
  },
});
