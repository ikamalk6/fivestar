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
          <Text
            style={{
              color: 'white',
              position: 'absolute',
              zIndex: 2,
              left: normalize(210),
              bottom: normalize(45),
              fontSize: 24,
              fontWeight: '900',
            }}>
            {STRINGNAME.FAN}
          </Text>
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
    width: normalize(375),
    height: normalize(377),
    borderTopWidth: normalize(4),
    borderColor: COLOR.sky,
    backgroundColor: COLOR.light_Black2,
    paddingHorizontal: normalize(10),
    alignSelf: 'center',
  },
  cancelBtn: {
    height: normalize(24),
    width: normalize(24),
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    right: normalize(10),
    marginVertical: normalize(18),
  },
  heading: {
    fontWeight: '900',
    fontStyle: 'italic',
    fontSize: 24,
    color: COLOR.white,
    marginBottom: normalize(10),
  },
  imageActive: {
    height: normalize(104),
    width: '100%',
    marginVertical: normalize(10),
    borderRadius: normalize(5),
  },
  images: {
    height: normalize(104),
    width: '100%',
    marginVertical: normalize(10),
    borderWidth: 1,
    borderColor: COLOR.sky,
    borderRadius: normalize(5),
  },
  fantxt: {
    color: COLOR.white,
    fontWeight: '900',
    fontSize: 24,
    top: normalize(130),
  },
});
