import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';

import COLOR from '../../utils/colors';
import {IMAGE} from '../../utils/images';
import CustomTextInput from '../../components/customTextInput';
import {STRINGNAME} from '../../utils/string';
import {normalize, vh, vw} from '../../utils/dimensions';
import SelectIdentity from '../../components/selectIdentity';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {SportAction} from './action';
import {DisableButton} from '../../components/customButton';

export default function CompleteProfile() {
  const dispatch = useDispatch<any>();
  const [cover, setCover] = useState(null);
  const [profile, setProfile] = useState(null);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [chooseDate, setChooseDate] = useState('Date of Birth');
  const [identity, setIdentity] = useState('Select your identity');
  const [modalVisible, setModalVisible] = useState(false);
  const [zipcode, setZipCode] = useState('');
  const openModal = () => {
    setModalVisible(!modalVisible);
  };
  const [selectedSports, setSelectedSports] = useState([]);
  const {userdata} = useSelector((Store: any) => Store.ValidateOtpReducer);
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.head}>{STRINGNAME.HI_JOHN}</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.innerView}>
          <TouchableOpacity
            style={styles.coverView}
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
          <CustomTextInput
            label={STRINGNAME.CHNAGE_YOUR_USERNAME}
            value={userdata?.username}
          />

          <Modal isVisible={modalVisible}>
            <SelectIdentity
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              identity={identity}
              setIdentity={setIdentity}></SelectIdentity>
          </Modal>

          <TouchableOpacity onPress={openModal} style={styles.identityView}>
            <Text style={styles.identityTxt}>{identity}</Text>
          </TouchableOpacity>

          <CustomTextInput
            label={'DOB'}
            value={chooseDate}
            right={() => (
              <TouchableOpacity
                style={styles.dobView}
                onPress={() => setOpen(true)}>
                <Image source={IMAGE.calender} style={styles.dobLogo} />
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

          <TouchableOpacity
            style={styles.identityView}
            onPress={() => {
              navigation.navigate('ZipCode', {zipcode: setZipCode});
            }}>
            <Text style={styles.identityTxt}>
              {zipcode.length < 0 ? 'Zipcode' : zipcode}
            </Text>
          </TouchableOpacity>
          <CustomTextInput label={'Bio'} multiline={true} />
          <CustomTextInput label={'Referral Code'} />

          <TouchableOpacity
            style={styles.identityView}
            onPress={() => {
              dispatch(SportAction(userdata?.authToken));
              // navigation.navigate(STRINGNAME.SPORTSLOGOSCR);
              navigation.navigate('SportsLogoScr', {
                callback: (par: any) => {
                  setSelectedSports(par);
                },
              });
            }}>
            <Text style={styles.identityTxt}>
              {selectedSports.length < 0
                ? 'Sports I Watch'
                : JSON.stringify(selectedSports)}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* <TouchableOpacity
        onPress={() => {
          navigation.navigate('LoginScreen');
        }}
        style={{borderRadius: 7, marginBottom: normalize(15)}}>
        <Image style={{width: '100%', height: 40}} source={IMAGE.saveDisable} />
      </TouchableOpacity> */}
      <DisableButton label={'SUBMIT'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalize(20),
    backgroundColor: COLOR.black,
    flex: 1,
  },
  head: {
    color: COLOR.white,
    fontSize: 26,
    fontStyle: 'italic',
    fontWeight: '900',
    paddingBottom: normalize(20),
    paddingTop: Platform.OS === 'ios' ? normalize(40) : normalize(10),
  },
  innerView: {
    marginBottom: normalize(50),
  },
  coverView: {
    height: normalize(200),
    width: normalize(328),
  },
  coverStyl: {
    height: normalize(200),
    width: normalize(328),
    borderWidth: 1,
    borderColor: COLOR.white,
    borderRadius: 5,
    backgroundColor: COLOR.light_Black,
    // resizeMode: 'contain',
  },
  miniC: {
    height: normalize(24),
    width: normalize(24),
    alignSelf: 'center',
    bottom: normalize(120),
    opacity: 0.6,
  },
  profStyl: {
    height: normalize(98),
    width: normalize(97.6),
    borderWidth: 1,
    borderColor: COLOR.white,
    left: normalize(20),
    borderRadius: 5,
    top: normalize(20),
    backgroundColor: COLOR.light_Black,
  },
  miniCp: {
    height: normalize(20),
    width: normalize(20),
    left: normalize(60),
    bottom: normalize(38),
    opacity: 0.6,
  },
  profileView: {
    zIndex: 1,
    height: normalize(98),
    width: normalize(97.6),
    top: normalize(130),
    position: 'absolute',
  },
  identityView: {
    height: normalize(48),
    width: normalize(328),
    borderWidth: 1,
    borderRadius: normalize(5),
    marginVertical: normalize(10),
    borderColor: COLOR.white,
    padding: normalize(15),
    alignSelf: 'center',
  },
  identityTxt: {
    color: COLOR.white,
    fontSize: 14,
    textTransform: 'uppercase',
  },
  dobView: {
    left: normalize(290),
    position: 'absolute',
    top: normalize(180),
    zIndex: 2,
  },
  dobLogo: {
    height: normalize(24),
    width: normalize(24),
    resizeMode: 'contain',
  },
});
