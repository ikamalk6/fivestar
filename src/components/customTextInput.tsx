import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';

export default function CustomTextInput(props) {
  const {rightComponent} = props;
  return (
    <>
      <TextInput
        {...props}
        outlineColor={'#ffffff'}
        style={styles.inputText}
        activeOutlineColor={'#ffffff'}
        mode="outlined"
        selectionColor="#ffffff"
        dense={true}
        theme={{
          colors: {
            placeholder: 'white',
            text: '#44C2E3',
            primary: 'white',
            background: '#000000',
          },
        }}
      />
      {rightComponent && rightComponent()}
    </>
  );
}

const styles = StyleSheet.create({
  inputText: {
    marginVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
  },
});
