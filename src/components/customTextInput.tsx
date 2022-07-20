import {StyleSheet} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import COLOR from '../utils/colors';
import {vw, vh} from '../utils/dimensions';

export default function CustomTextInput(props: any) {
  let {right, style} = props;
  return (
    <>
      <TextInput
        {...props}
        right={null}
        outlineColor={COLOR.white}
        style={[styles.inputText, style]}
        activeOutlineColor={COLOR.white}
        mode="outlined"
        selectionColor={COLOR.white}
        // dense={true}
        theme={{
          colors: {
            placeholder: COLOR.white,
            text: COLOR.sky,
            primary: COLOR.white,
            background: COLOR.black,
          },
        }}
      />
      {right !== undefined ? right() : null}
    </>
  );
}

const styles = StyleSheet.create({
  inputText: {
    marginVertical: 10,
    borderRadius: 5,
    // height: vh(48),
    width: vw(328),
    alignSelf: 'center',
  },
});
