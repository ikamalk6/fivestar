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
import {TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import ValidateOtpApiCall from './action';

export default function ValidateOtp() {
  const navigation = useNavigation<any>();

  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  const user = useSelector(store => store.SignUpReducer);
  // console.log(userId, phoneNo, countryCode);

  const [otp, setOtp] = useState('');
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
            <TextInput dense={true} onChangeText={txt => setOtp(txt)} />
            {/* <TouchableOpacity
              style={styles.submit}
              onPress={() => {
                // navigation.navigate('LoginScreen'),
                dispatch<any>(ValidateOtpApiCall({user, otp}));
              }}>
                
              <Text style={styles.submittxt}>{'SUBMIT'}</Text>
            </TouchableOpacity> */}
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableOpacity>
            </Modal>
            <TouchableOpacity
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.textStyle}>SUBMIT</Text>
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
    borderRadius: 20,
    padding: 10,
    marginTop: 30,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
