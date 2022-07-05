import {StyleSheet, Text, SafeAreaView, TextInput} from 'react-native';
import React from 'react';
import {vh, vw} from '../../utils/dimensions';
import COLOR from '../../utils/colors';
import {OutlinedTextField} from 'react-native-material-textfield';

export default function TextInp() {
  return (
    <SafeAreaView style={styles.main}>
      {/* <TextInput
        // caretHidden={true}
        placeholder="Name"
        placeholderTextColor={COLOR.white}
        style={styles.textinp}
      /> */}

      {/* <OutlinedTextField /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textinp: {
    height: vh(40),
    width: vw(330),
    borderWidth: 1,
    borderColor: COLOR.sky,
    backgroundColor: COLOR.grey,
    paddingHorizontal: 20,
    color: COLOR.sky,
    // fontWeight: '700',
  },
});

// import React from 'react';
// import {StyleSheet, View} from 'react-native';
// import {
//   TextField,
//   FilledTextField,
//   OutlinedTextField,
// } from 'react-native-material-textfield';
// import COLOR from '../../utils/colors';
// import {vh, vw} from '../../utils/dimensions';

// export default function TextInp() {
//   // const formatText = (text: string) => {
//   //   return text.replace(/[^+\d]/g, '');
//   // };

//   return (
//     <View style={styles.main}>
//       <OutlinedTextField
//         label="Phone number"
//         // formatText={formatText}
//       />
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   textinp: {
//     height: vh(40),
//     width: vw(330),
//     borderWidth: 1,
//     borderColor: COLOR.sky,
//     backgroundColor: COLOR.grey,
//     paddingHorizontal: 20,
//     color: COLOR.sky,
//     // fontWeight: '700',
//   },
// });
