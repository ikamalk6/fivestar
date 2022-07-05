import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import COLOR from '../../utils/colors';
import {IMAGE} from '../../utils/images';
import GoBack from '../../components/goBackBtn';
import {STRINGNAME} from '../../utils/string';
import {normalize} from '../../utils/dimensions';

export default function ChoicePage() {
  const [optedOption, setOptedOption] = useState('');

  console.log('optedOption', optedOption);

  const navigation = useNavigation<any>();
  const diss = (choice: any) => {
    if (setOptedOption != choice) setOptedOption(choice);
  };

  return (
    <View style={styles.container}>
      <View>
        <GoBack />

        <Text style={styles.question}>{STRINGNAME.WHO_ARE_YOU}</Text>

        <TouchableOpacity
          onPress={() => {
            diss(STRINGNAME.FAN);
          }}
          style={styles.fanView}>
          <Image
            style={optedOption === STRINGNAME.FAN ? styles.fan : styles.fanDis}
            source={IMAGE.fan}
          />
          {/*  */}
          <Text
            style={
              optedOption === STRINGNAME.FAN ? styles.fanTxt1 : styles.fanTxt
            }>
            {STRINGNAME.FAN}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            diss(STRINGNAME.ATHLETE);
          }}
          style={styles.fanView}>
          <Image
            style={
              optedOption === STRINGNAME.ATHLETE ? styles.fan : styles.fanDis
            }
            source={IMAGE.athlete}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        disabled={
          optedOption != STRINGNAME.FAN && optedOption != STRINGNAME.ATHLETE
        }
        onPress={() => {
          navigation.navigate(STRINGNAME.COMPLETE_PROFILE);
        }}
        style={styles.btnView}>
        <Image
          style={styles.button}
          source={
            optedOption == STRINGNAME.FAN || optedOption == STRINGNAME.ATHLETE
              ? IMAGE.nxtBtnEnable
              : IMAGE.nxtBtnDisable
          }
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.black,
    flex: 1,
    padding: normalize(10),
    paddingTop: Platform.OS === 'ios' ? normalize(60) : normalize(10),
  },

  question: {
    color: COLOR.white,
    fontSize: 26,
    fontStyle: 'italic',
    fontWeight: '900',
    marginTop: 10,
  },
  fan: {
    height: 100,
    width: '100%',
    borderColor: COLOR.sky,
    borderWidth: 2,
    borderRadius: 5,
  },
  fanDis: {
    height: 100,
    width: '100%',
    borderWidth: 2,
    borderColor: COLOR.dark_grey,
    borderRadius: 5,
  },
  button: {
    height: 50,
    width: '96%',
    alignSelf: 'center',
  },
  fanTxt: {
    fontWeight: '900',
    fontStyle: 'italic',
    color: COLOR.white,
    fontSize: 27,
    bottom: 65,
    left: 208,
  },
  fanTxt1: {
    fontWeight: '900',
    fontStyle: 'italic',
    color: COLOR.sky,
    fontSize: 27,
    bottom: 65,
    left: 208,
  },
  fanView: {
    marginVertical: 20,
    height: 100,
    width: '100%',
  },
  btnView: {
    flexDirection: 'column-reverse',
    flex: 1,
    marginBottom: normalize(10),
  },
});
