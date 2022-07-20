import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  TextInput,
  Alert,
  Platform,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';

import Modal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';
import ValidateOtpApiCall from './action';
import COLOR from '../../utils/colors';
import {IMAGE} from '../../utils/images';
import {normalize, vh, vw} from '../../utils/dimensions';
import GoBack from '../../components/goBackBtn';
import {ROUTE_NAME} from '../../router/routeNames';
import {STRINGNAME} from '../../utils/string';
export default function ValidateOtp() {
  const digi1 = useRef<any>(null);
  const digi2 = useRef<any>(null);
  const digi3 = useRef<any>(null);
  const digi4 = useRef<any>(null);

  const navigation = useNavigation<any>();
  const dispatch = useDispatch<any>();

  const [otp, setOtp] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const {phoneNo, userId, countryCode} = useSelector(
    (store: any) => store.SignUpReducer,
  );

  return (
    <View style={styles.mainView}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.innerView}>
          <View>
            <GoBack />
            <Text style={styles.heading}>
              {STRINGNAME.ENTER_VERIFICATION_CODE}
            </Text>
            <Text style={styles.message}>{STRINGNAME.KINDLY_ENTER_CODE}</Text>
            <View style={styles.numberEdit}>
              <Text style={styles.message}>{phoneNo}</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate(ROUTE_NAME.SIGNUP)}>
                <Text style={styles.editTxt}>{STRINGNAME.EDIT}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.inpView}>
              <TextInput
                keyboardType="numeric"
                ref={digi1}
                maxLength={1}
                onChangeText={text => {
                  setOtp(otp => otp + text);
                  digi2.current.focus();
                }}
                style={styles.txtinp}
              />
              <TextInput
                keyboardType="numeric"
                ref={digi2}
                maxLength={1}
                onChangeText={text => {
                  setOtp(otp => otp + text);
                  digi3.current.focus();
                }}
                style={styles.txtinp}
              />
              <TextInput
                ref={digi3}
                keyboardType="numeric"
                maxLength={1}
                onChangeText={text => {
                  setOtp(otp => otp + text);
                  digi4.current.focus();
                }}
                style={styles.txtinp}
              />
              <TextInput
                keyboardType="numeric"
                ref={digi4}
                maxLength={1}
                onChangeText={text => {
                  setOtp(otp => otp + text);
                  digi4.current.blur();
                }}
                style={styles.txtinp}
              />
            </View>

            {otp.length == 4 ? (
              <TouchableOpacity
                style={styles.buttonEnabled}
                onPress={() => {
                  dispatch(
                    ValidateOtpApiCall(
                      userId,
                      otp,
                      countryCode,
                      phoneNo,
                      (code: any) => {
                        if (code?.data?.statusCode == 200) {
                          setModalVisible(!isModalVisible);
                        } else Alert.alert(STRINGNAME.WRONG_OTP);
                      },
                    ),
                  );
                }}>
                <Text style={styles.buttonText}>{STRINGNAME.SUBMIT}</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.buttonDisabled}>
                <Text style={styles.buttonTextDisabled}>
                  {STRINGNAME.SUBMIT}
                </Text>
              </TouchableOpacity>
            )}
            <Modal isVisible={isModalVisible}>
              <View style={styles.modal}>
                <Image style={styles.thumb} source={IMAGE.rightThumb} />
                <Text style={styles.congo}>{STRINGNAME.CONGRATULATION}</Text>
                <Text style={styles.modalTextCongo}>
                  {STRINGNAME.YOUR_ACCOUNT_SUCCESSFULL}
                </Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    setModalVisible(false);
                    navigation.navigate(ROUTE_NAME.CHOICE_PAGE);
                  }}>
                  <Text style={styles.textStyle}>{STRINGNAME.CONTINUE}</Text>
                </TouchableOpacity>
              </View>
            </Modal>

            <Text style={styles.otpWarn}>
              {STRINGNAME.DID_NOT_RECEIVE_CODE}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(ROUTE_NAME.SIGNUP)}>
              <Text style={styles.resend}>{STRINGNAME.RESEND_CODE}</Text>
            </TouchableOpacity>
          </View>

          <Image style={styles.bmx} source={IMAGE.bmx} />
          <Image style={styles.footer} source={IMAGE.footer} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLOR.black,
  },
  innerView: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? normalize(44) : normalize(10),
    paddingHorizontal: normalize(20),
  },

  heading: {
    fontSize: 27,
    fontStyle: 'italic',
    color: COLOR.white,
    fontWeight: '900',
    marginVertical: normalize(6),
  },
  message: {
    color: COLOR.white,
  },
  // submit: {
  //   // backgroundColor: COLOR.sky,
  //   // justifyContent: 'center',
  //   // alignItems: 'center',
  //   borderRadius: 5,
  //   // marginVertical: 20,
  // },
  submittxt: {
    fontSize: 20,
    padding: 10,
    fontStyle: 'italic',
    fontWeight: '900',
  },
  bmx: {
    height: vh(354),
    width: vw(333),
    position: 'absolute',
    bottom: 0,
    resizeMode: 'contain',
    opacity: 0.7,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    zIndex: 2,
  },
  scroll: {
    flex: 1,
  },
  // arrow: {
  //   height: 20,
  //   width: 20,
  //   marginBottom: 15,
  // },
  button: {
    borderRadius: 5,
    padding: 15,
    marginTop: 30,
    backgroundColor: COLOR.sky,
  },
  textStyle: {
    color: COLOR.black,
    fontWeight: '900',
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: 16,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  otpWarn: {
    color: COLOR.white,
    textAlign: 'center',
    marginTop: 40,
  },
  resend: {
    color: COLOR.sky,
    fontStyle: 'italic',
    fontWeight: '800',
    textAlign: 'center',
    fontSize: 18,
  },
  modal: {
    borderWidth: 0.3,
    borderTopWidth: 3,
    borderColor: COLOR.sky,
    alignSelf: 'center',
    backgroundColor: COLOR.light_Black2,
    height: normalize(244),
    width: normalize(328),
    justifyContent: 'center',
    padding: 20,
    borderRadius: 5,
  },
  thumb: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  congo: {
    color: 'white',
    fontWeight: '900',
    textAlign: 'center',
  },
  txtinp: {
    height: normalize(48),
    width: normalize(64),
    fontWeight: '900',
    fontSize: 30,
    borderRadius: 5,
    borderColor: COLOR.white,
    borderWidth: 1,
    color: COLOR.sky,
    textAlign: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  inpView: {
    marginVertical: normalize(30),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  // btn: {
  //   height: normalize(80),
  //   width: '100%',
  //   backgroundColor: COLOR.sky,
  //   justifyContent: 'center',
  //   alignSelf: 'center',
  //   marginTop: 30,
  // },
  // btnx: {
  //   height: 80,
  //   width: 80,
  //   // textAlign: 'center',
  //   backgroundColor: 'white',
  //   justifyContent: 'center',
  //   alignSelf: 'center',
  //   marginTop: 30,
  // },
  buttonEnabled: {
    backgroundColor: COLOR.sky,
    borderRadius: 5,
    height: normalize(48),
    width: normalize(328),
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: normalize(15),
  },
  buttonDisabled: {
    backgroundColor: COLOR.mud,
    borderRadius: 5,
    height: normalize(48),
    width: normalize(328),
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: normalize(15),
  },
  buttonTextDisabled: {
    fontSize: 16,
    textAlign: 'center',
    color: COLOR.grey,
    fontWeight: '900',
    fontStyle: 'italic',
    textTransform: 'uppercase',
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    fontWeight: '900',
    fontStyle: 'italic',
    textTransform: 'uppercase',
  },
  numberEdit: {
    flexDirection: 'row',
    marginTop: 5,
  },
  editTxt: {
    color: COLOR.sky,
    fontWeight: '800',
  },
  modalTextCongo: {color: 'white', textAlign: 'center'},
});
