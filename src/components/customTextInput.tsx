import {StyleSheet} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import COLOR from '../utils/colors';

export default function CustomTextInput(props: any) {
  const {rightComponent} = props;
  return (
    <>
      <TextInput
        {...props}
        outlineColor={COLOR.white}
        style={styles.inputText}
        activeOutlineColor={COLOR.white}
        mode="outlined"
        selectionColor={COLOR.white}
        dense={true}
        theme={{
          colors: {
            placeholder: COLOR.white,
            text: COLOR.sky,
            primary: COLOR.white,
            background: COLOR.black,
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
