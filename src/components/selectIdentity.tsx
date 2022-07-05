import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {normalize, vh, vw} from '../utils/dimensions';
import COLOR from '../utils/colors';
import {IMAGE} from '../utils/images';
import {STRINGNAME} from '../utils/string';

export default function SelectIdentity(props: any) {
  const {modalVisible, setModalVisible, identity, setIdentity} = props;

  const handleCancel = () => {
    setModalVisible(!modalVisible);
  };
  const handleFan = () => {
    setIdentity('Fan');
    setTimeout(() => {
      setModalVisible(!modalVisible);
    }, 500);
  };
  const handleAth = () => {
    setIdentity('Athlete');
    setTimeout(() => {
      setModalVisible(!modalVisible);
    }, 500);
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.modalView}>
        <TouchableOpacity onPress={handleCancel}>
          <ImageBackground
            style={styles.cancelBtn}
            source={IMAGE.cancelButton}
          />
        </TouchableOpacity>
        <Text style={styles.heading}>{STRINGNAME.SELECT_YOUR_IDENTITY}</Text>

        <TouchableOpacity onPress={handleFan}>
          <Image
            style={identity === 'Fan' ? styles.images : styles.imageActive}
            source={IMAGE.fan}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleAth}>
          <Image
            style={identity === 'Athlete' ? styles.images : styles.imageActive}
            source={IMAGE.athlete}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  modalView: {
    width: normalize(374),
    height: normalize(374),
    borderTopWidth: normalize(4),
    borderColor: COLOR.sky,
    backgroundColor: COLOR.black,
    paddingHorizontal: normalize(10),
    paddingVertical: normalize(20),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  cancelBtn: {
    height: vh(24),
    width: vw(24),
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    right: normalize(10),
  },
  heading: {
    fontWeight: '900',
    fontStyle: 'italic',
    fontSize: 24,
    color: COLOR.white,
    marginVertical: normalize(10),
  },
  imageActive: {
    height: vh(104),
    // width: vw(327),
    width: '100%',
    marginVertical: normalize(10),
    resizeMode: 'contain',
  },
  images: {
    height: vh(104),
    // width: vw(327),
    width: '100%',
    marginVertical: normalize(10),
    resizeMode: 'contain',
    borderWidth: 1,
    borderColor: COLOR.sky,
  },
  fantxt: {
    color: COLOR.white,
    fontWeight: '900',
    fontSize: 24,
    top: normalize(130),
    // position: 'absolute',
    // zIndex: 2,
  },
});
