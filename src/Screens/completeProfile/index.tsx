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
import {useNavigation, useRoute} from '@react-navigation/native';
import {checkUsername, completeProfileAction, SportAction} from './action';
import {DisableButton, EnableButton} from '../../components/customButton';
import {ROUTE_NAME} from '../../router/routeNames';

export default function CompleteProfile({route}: any) {
  const dispatch = useDispatch<any>();
  const [cover, setCover] = useState('');
  const [profile, setProfile] = useState('');
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [chooseDate, setChooseDate] = useState('Date of Birth');
  const [identity, setIdentity] = useState(route.params.optedOption);
  const [modalVisible, setModalVisible] = useState(false);
  const [zipcode, setZipCode] = useState('');
  const [selectedSports, setSelectedSports] = useState([]);
  const {userdata} = useSelector((Store: any) => Store.ValidateOtpReducer);
  const name = userdata?.name;
  const username = userdata?.username;
  const token = userdata?.authToken;
  const id = userdata?.id;
  const navigation = useNavigation<any>();
  const openModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleChange = (index: any) => {
    selectedSports.splice(index, 1);
    setSelectedSports([...selectedSports]);
  };
  const onPressCheck = () => {
    dispatch(checkUsername(token));
  };
  const onpressBtn = () => {
    dispatch(
      completeProfileAction(token, username, id, zipcode, name, identity),
      navigation.navigate(ROUTE_NAME.SUGGESTION_PAGE),
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.head}>{STRINGNAME.HI_JOHN}</Text>

      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View style={styles.innerView}>
          <TouchableOpacity
            style={styles.coverView}
            onPress={() =>
              ImagePicker.openPicker({
                cropping: true,
              })
                .then(image => {
                  setCover(image.path);
                })
                .catch(err => {
                  console.log('ImageError', err);
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
            right={() => (
              <TouchableOpacity
                style={styles.pencilView}
                onPress={onPressCheck}>
                <Image source={IMAGE.pencil} style={styles.pencil} />
              </TouchableOpacity>
            )}
          />

          <Modal isVisible={modalVisible}>
            <SelectIdentity
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              identity={identity}
              setIdentity={setIdentity}></SelectIdentity>
          </Modal>

          <TouchableOpacity
            activeOpacity={0.4}
            onPress={openModal}
            style={styles.identityView}>
            <Text style={styles.identityTxt}>
              {identity ? identity : STRINGNAME.SELECT_YOUR_IDENTITY}
            </Text>

            <Image source={IMAGE.rightArrow} style={styles.rightArrow} />
            {identity.length > 0 && (
              <Text style={styles.labelStyl}>
                {STRINGNAME.SELECT_YOUR_IDENTITY}
              </Text>
            )}
          </TouchableOpacity>

          <CustomTextInput
            label={'DOB'}
            value={chooseDate}
            // careHidden={true}
            right={() => (
              <TouchableOpacity
                activeOpacity={0.4}
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
            activeOpacity={0.4}
            style={styles.identityView}
            onPress={() => {
              navigation.navigate(ROUTE_NAME.ZIP_CODE, {zipcode: setZipCode});
            }}>
            <Text
              style={
                zipcode.length <= 0 ? styles.identityTxtNew : styles.identityTxt
              }>
              {zipcode.length == 0 ? 'Zipcode' : zipcode}
            </Text>
            {zipcode.length > 0 && (
              <Text style={styles.labelStyl}>{'ZIPCODE'}</Text>
            )}
          </TouchableOpacity>
          <CustomTextInput label={'Bio'} multiline={true} />
          <CustomTextInput label={'Referral Code'} />

          <TouchableOpacity
            style={styles.sportsView}
            onPress={() => {
              dispatch(SportAction(userdata?.authToken));
              navigation.navigate(ROUTE_NAME.SPORTSLOGOSCR, {
                callback: (par: any) => {
                  setSelectedSports(par);
                },
              });
            }}>
            {selectedSports.length < 1 ? (
              <Text
                style={
                  selectedSports.length <= 0
                    ? styles.identityTxtNew
                    : styles.identityTxt
                }>
                {STRINGNAME.SPORT_I_WATCH}
              </Text>
            ) : (
              selectedSports.map((element: any, index: number) => {
                return (
                  <View style={styles.mapView}>
                    <Text style={{color: COLOR.white, fontWeight: '800'}}>
                      {element}
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        handleChange(index);
                      }}>
                      <Image style={styles.cross} source={IMAGE.blueCross} />
                    </TouchableOpacity>
                  </View>
                );
              })
            )}
            {selectedSports.length > 0 && (
              <Text style={styles.labelStyl}>{STRINGNAME.SPORT_I_WATCH}</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>

      <EnableButton label={'NEXT'} style={styles.button} onPress={onpressBtn} />
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
    color: COLOR.sky,
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  identityTxtNew: {
    color: COLOR.white,
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  rightArrow: {
    height: normalize(8),
    width: normalize(8),
    resizeMode: 'contain',
    left: 290,
    bottom: 12,
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
  labelStyl: {
    color: COLOR.white,
    backgroundColor: COLOR.black,
    fontSize: 12,
    top: -12,
    left: 10,
    position: 'absolute',
    paddingHorizontal: 5,
    paddingVertical: 4,
  },
  pencil: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  pencilView: {
    left: normalize(290),
    position: 'absolute',
    top: normalize(35),
    zIndex: 2,
  },
  mapView: {
    flexDirection: 'row',
    //backgroundColor: COLOR.dark_grey,
    marginHorizontal: normalize(15),
    marginVertical: normalize(8),
    alignItems: 'center',
    paddingHorizontal: normalize(5),
    paddingVertical: normalize(2),
    justifyContent: 'space-around',
    borderRadius: normalize(5),
  },
  cross: {
    height: 10,
    width: 10,

    // marginLeft: 10,
    // padding: 10,
    margin: 10,
    // backgroundColor: COLOR.sky,
    resizeMode: 'contain',
  },
  sportsView: {
    // height: normalize(48),
    width: normalize(328),
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: COLOR.white,
    borderRadius: 5,
    minHeight: normalize(55),
    marginTop: normalize(18),
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    flexWrap: 'wrap',
  },
  button: {
    marginBottom: 20,
    marginTop: 2,
  },
});
