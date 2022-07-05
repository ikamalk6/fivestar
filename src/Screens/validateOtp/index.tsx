import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';

import Modal from 'react-native-modal';
import {useSelector} from 'react-redux';
import ValidateOtpApiCall from './action';
import COLOR from '../../utils/colors';
import {IMAGE} from '../../utils/images';
export default function ValidateOtp() {
  const digi1 = useRef<any>(null);
  const digi2 = useRef<any>(null);
  const digi3 = useRef<any>(null);
  const digi4 = useRef<any>(null);

  const navigation = useNavigation<any>();

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
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignUp');
              }}>
              <Image style={styles.arrow} source={IMAGE.arrow} />
            </TouchableOpacity>
            <Text style={styles.heading}>{'Enter Verification code'}</Text>
            <Text style={styles.message}>
              {`Kindly enter the 4 digit verification code sent to`}
            </Text>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Text style={styles.message}>{phoneNo}</Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={{color: COLOR.sky, fontWeight: '800'}}>
                  {'   Edit'}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.inpView}>
              <TextInput
                ref={digi1}
                maxLength={1}
                onChangeText={text => {
                  setOtp(otp => otp + text);
                  digi2.current.focus();
                }}
                style={styles.txtinp}
              />
              <TextInput
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
                maxLength={1}
                onChangeText={text => {
                  setOtp(otp => otp + text);
                  digi4.current.focus();
                }}
                style={styles.txtinp}
              />
              <TextInput
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
                style={styles.button1}
                onPress={() => {
                  console.log(
                    ValidateOtpApiCall(userId, otp, countryCode, phoneNo)
                      .then((res: any) => {
                        res.status == 200 && setModalVisible(!isModalVisible);
                      })
                      .catch(err => {
                        Alert.alert('invalid otp');
                      }),
                  );
                }}>
                <Text style={styles.buttonText}>{'Submit'}</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.buttonDisabled}>
                <Text style={styles.buttonTextDisabled}>{'Submit'}</Text>
              </TouchableOpacity>
            )}
            <Modal isVisible={isModalVisible}>
              <View style={styles.modal}>
                <Image
                  style={styles.thumb}
                  source={require('../../assets/image/rithumb.png')}
                />
                <Text style={styles.congo}>{'\nCONGRATULATIONS\n'}</Text>
                <Text style={{color: 'white', textAlign: 'center'}}>
                  {'Your account has been successfully \nregistered'}
                </Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    setModalVisible(false);
                    navigation.navigate('ChoicePage');
                  }}>
                  <Text style={styles.textStyle}>CONTINUE</Text>
                </TouchableOpacity>
              </View>
            </Modal>

            <Text style={styles.otpWarn}>
              {"Didn't received the code yet?"}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.resend}>{'Resend Verification Code'}</Text>
            </TouchableOpacity>
          </View>

          <Image
            style={styles.bmx}
            source={require('../../assets/image/BMX.png')}
          />
          <Image
            style={styles.footer}
            source={require('../../assets/image/Footer.png')}
          />
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
    marginTop: 44,
    padding: 20,
  },

  heading: {
    fontSize: 27,
    fontStyle: 'italic',
    color: '#ffffff',
    fontWeight: '900',
    marginVertical: 10,
  },
  message: {
    color: '#ffffff',
  },
  submit: {
    backgroundColor: COLOR.sky,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 20,
  },
  submittxt: {
    fontSize: 20,
    padding: 10,
    fontStyle: 'italic',
    fontWeight: '900',
  },
  bmx: {
    height: 354,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    resizeMode: 'contain',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    zIndex: 2,
  },
  scroll: {
    flex: 1,
  },
  arrow: {
    height: 20,
    width: 20,
    marginBottom: 15,
  },
  button: {
    borderRadius: 5,
    padding: 15,
    marginTop: 30,
    backgroundColor: COLOR.sky,
  },
  textStyle: {
    color: '#000000',
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
    color: '#ffffff',
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
    backgroundColor: '#000000',
    height: 300,
    width: 350,
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
    backgroundColor: '#000000',
    height: 50,
    width: 65,
    fontWeight: '900',
    fontSize: 30,
    borderRadius: 5,
    borderColor: '#ffffff',
    borderWidth: 1,
    color: COLOR.sky,
    textAlign: 'center',
  },
  inpView: {
    marginVertical: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  btn: {
    height: 80,
    width: '100%',
    backgroundColor: COLOR.sky,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  btnx: {
    height: 80,
    width: 80,
    // textAlign: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  button1: {
    backgroundColor: COLOR.sky,
    borderRadius: 5,
    height: 48,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  buttonDisabled: {
    backgroundColor: COLOR.mud,
    borderRadius: 5,
    height: 48,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  buttonTextDisabled: {
    fontSize: 16,
    textAlign: 'center',
    color: COLOR.grey,
    fontWeight: '900',
    fontStyle: 'italic',
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    fontWeight: '900',
    fontStyle: 'italic',
  },
});
