import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import COLOR from '../../utils/colors';
import {IMAGE} from '../../utils/images';
import GoBack from '../../components/goBackBtn';
import {STRINGNAME} from '../../utils/string';

export default function ChoicePage() {
  const [optedOption, setOptedOption] = useState('');

  console.log('optedOption', optedOption);

  const navigation = useNavigation<any>();
  const diss = (choice: any) => {
    if (setOptedOption != choice) setOptedOption(choice);
  };

  return (
    <View style={styles.container}>
      <GoBack />

      <Text style={styles.question}>{STRINGNAME.WHO_ARE_YOU}</Text>
      <TouchableOpacity
        onPress={() => {
          diss('Fan');
        }}
        style={styles.fanView}>
        <Image
          style={optedOption === 'Fan' ? styles.fan : styles.fanDis}
          source={IMAGE.fan}
        />
      </TouchableOpacity>
      <Text style={styles.fanTxt}>{STRINGNAME.FAN}</Text>
      <TouchableOpacity
        onPress={() => {
          diss('Athelete');
        }}
        style={styles.fanView}>
        {optedOption == 'Athelete' ? (
          <Image style={styles.fan} source={IMAGE.athlete} />
        ) : (
          <Image style={styles.fanDis} source={IMAGE.athlete} />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        disabled={optedOption != 'Fan' && optedOption != 'Athelete'}
        onPress={() => {
          navigation.navigate(STRINGNAME.COMPLETE_PROFILE);
        }}
        style={styles.btnView}>
        <Image
          style={styles.button}
          source={
            optedOption == 'Fan' || optedOption == 'Athelete'
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
    padding: 10,
    paddingTop: 60,
  },
  arrow: {
    height: 18,
    width: 18,
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
    bottom: 85,
    left: 208,
  },
  fanView: {
    marginVertical: 20,
    height: 100,
    width: '100%',
  },
  btnView: {
    marginTop: 330,
  },
});
