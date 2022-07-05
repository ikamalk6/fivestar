import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';

import COLOR from '../../utils/colors';
import {IMAGE} from '../../utils/images';
import CustomTextInput from '../../components/customTextInput';
import {STRINGNAME} from '../../utils/string';
import {normalize} from '../../utils/dimensions';
import SelectIdentity from '../../components/selectIdentity';

export default function CompleteProfile() {
  const [cover, setCover] = useState('');
  const [profile, setProfile] = useState('');
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [chooseDate, setChooseDate] = useState('Date of Birth');
  const [identity, setIdentity] = useState('Select your identity');
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.head}>{STRINGNAME.HI_JOHN}</Text>

      <Modal isVisible={modalVisible}>
        <SelectIdentity
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          identity={identity}
          setIdentity={setIdentity}></SelectIdentity>
      </Modal>

      <ScrollView>
        <View style={styles.innerView}>
          <TouchableOpacity
            style={{height: normalize(200), width: normalize(335)}}
            onPress={() =>
              ImagePicker.openPicker({
                cropping: true,
              })
                .then(image => {
                  setCover(image.path);
                  console.log('image path', image.path);
                })
                .catch(err => {
                  console.log('ImageErr', err);
                })
            }>
            <Image style={styles.coverStyl} source={{uri: cover}} />
            <Image style={styles.miniC} source={IMAGE.cam} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.profileView}
            onPress={() =>
              ImagePicker.openPicker({
                cropping: true,
              })
                .then(image => {
                  console.log('image path', image.path);
                  setProfile(image.path);
                })
                .catch(err => {
                  console.log('ImageErr', err);
                })
            }>
            <Image style={styles.profStyl} source={{uri: profile}} />
            <Image style={styles.miniCp} source={IMAGE.cam} />
          </TouchableOpacity>
        </View>
        <View>
          <CustomTextInput label={'Change your Username'} />
          <TouchableOpacity
            onPress={openModal}
            style={{
              height: 40,
              width: 355,
              borderWidth: 1,
              borderColor: COLOR.white,
            }}>
            <Text style={{color: COLOR.white}}>{identity}</Text>
          </TouchableOpacity>
          {/* <CustomTextInput
            label={'Select your Identity'}
            value={identity}
            right={() => (
              <TouchableOpacity onPress={openModal}>
                <Image
                  source={IMAGE.calender}
                  style={{height: 20, width: 20, bottom: 30}}
                />
              </TouchableOpacity>
            )}
          /> */}
          <CustomTextInput
            label={'DOB'}
            value={chooseDate}
            right={() => (
              <TouchableOpacity
                style={{left: 320, position: 'absolute', top: 160}}
                onPress={() => setOpen(true)}>
                <Image
                  source={IMAGE.calender}
                  style={{height: 20, width: 20}}
                />
                <DatePicker
                  modal
                  open={open}
                  date={date}
                  mode="date"
                  onConfirm={date => {
                    setOpen(false);
                    setDate(date);
                    setChooseDate(
                      [
                        date.getMonth() + 1,
                        '/',
                        date.getDate(),
                        '/',
                        date.getFullYear(),
                      ].join(''),
                    );
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />
              </TouchableOpacity>
            )}
          />
          <CustomTextInput label={'ZipCode*'} />
          <CustomTextInput label={'Bio'} />
          <CustomTextInput label={'Referral Code'} />
          <CustomTextInput label={'Sports I Watch'} />
        </View>
      </ScrollView>
      <TouchableOpacity style={{borderRadius: 7}} onPress={openModal}>
        <Image style={{width: '100%', height: 40}} source={IMAGE.saveDisable} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalize(15),
    backgroundColor: COLOR.black,
    flex: 1,
  },
  head: {
    color: COLOR.white,
    fontSize: 26,
    fontStyle: 'italic',
    fontWeight: '900',
    paddingBottom: 20,
    paddingTop: 40,
  },
  innerView: {
    marginBottom: normalize(35),
  },
  coverStyl: {
    height: normalize(200),
    width: normalize(335),
    borderWidth: 1,
    borderColor: COLOR.white,
    borderRadius: 5,
    backgroundColor: COLOR.light_Black,
  },
  miniC: {
    height: 24,
    width: 24,
    alignSelf: 'center',
    bottom: 120,
    opacity: 0.6,
  },
  profStyl: {
    height: normalize(98),
    width: normalize(97.6),
    borderWidth: 1,
    borderColor: COLOR.white,
    left: 20,
    borderRadius: 5,
    top: 20,
    backgroundColor: COLOR.light_Black,
  },
  miniCp: {
    height: 20,
    width: 20,
    left: 60,
    bottom: 38,
    opacity: 0.6,
  },
  profileView: {
    zIndex: 1,
    height: normalize(98),
    width: normalize(97.6),
    top: 130,
    position: 'absolute',
  },
});
