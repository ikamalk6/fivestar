import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import OtpInput from '../../components/otpInput';

export default function ValidateOtp() {
  const arr = [2, 3, 4, 5];
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const user = useSelector(store => store.SignUpReducer);
  const [str, setStr] = useState('');

  return (
    <View style={styles.mainView}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.innerView}>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignUp');
              }}>
              <Image
                style={styles.arrow}
                source={require('../../assets/image/lefta.png')}
              />
            </TouchableOpacity>
            <Text style={styles.heading}>{'Enter Verification code'}</Text>
            <Text style={styles.message}>
              {'Kindly enter the 4 digit code sent to your number'}
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              {arr.map(item => {
                return (
                  <OtpInput
                    callBack={(txt: string) => {
                      let text = str + txt;
                      setStr(text);
                    }}
                  />
                );
              })}
            </View>
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.modal}>
                <Image
                  style={styles.thumb}
                  source={require('../../assets/image/rithumb.png')}
                />
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '900',
                    textAlign: 'center',
                  }}>
                  {'\nCONGRATULATIONS\n'}
                </Text>
                <Text style={{color: 'white', textAlign: 'center'}}>
                  {'Your account has been successfully \nregistered'}
                </Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    navigation.navigate('CompleteProfile'),
                      setModalVisible(!modalVisible);
                  }}>
                  <Text style={styles.textStyle}>CONTINUE</Text>
                </TouchableOpacity>
              </View>
            </Modal>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.textStyle}>SUBMIT</Text>
            </TouchableOpacity>
            <Text style={styles.otpWarn}>
              {"Didn't received the code yet?"}
            </Text>
            <TouchableOpacity>
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

    backgroundColor: '#000000',
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
  },
  message: {
    color: '#ffffff',
    marginVertical: 10,
    marginBottom: 20,
  },
  submit: {
    backgroundColor: '#44C2E3',
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
    // elevation: 2,
    backgroundColor: '#44C2E3',
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
    color: '#44C2E3',
    fontStyle: 'italic',
    fontWeight: '800',
    textAlign: 'center',
    fontSize: 18,
  },
  modal: {
    borderWidth: 0.5,
    borderTopWidth: 2,
    borderColor: '#44C2E3',
    alignSelf: 'center',
    marginVertical: '50%',
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
});
