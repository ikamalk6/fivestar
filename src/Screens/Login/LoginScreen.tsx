// import {View, Text} from 'react-native';
// import React from 'react';
// import {useSelector} from 'react-redux';
// export default function LoginScreen() {
//   const {name, email} = useSelector(store => store.SignUpReducer);
//   console.log(name);

//   return (
//     <View>
//       <Text>LoginScreen</Text>
//     </View>
//   );
// }

import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React from 'react';
import * as yup from 'yup';
import {Formik} from 'formik';
import styles from './Styles';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import onGoogleButtonPress from '../../Utils/GoogleSignInButtonFn';

export default function LoginScreen() {
  const navigation = useNavigation<any>();
  return (
    <Formik
      initialValues={{
        email: '',
        phoneNo: '',
        password: '',
        toggle: false,
        city: '',
      }}
      onSubmit={(values, {resetForm}) => {
        Alert.alert('Login succesfull');
        console.log('on Submit', values);
        resetForm();
        axios({
          method: 'post',
          url: 'https://fivestardevapi.appskeeper.in/api/v1/user/login',
          data: {
            // email: values.email,
            password: values.password,
            countryCode: '+1',
            phoneNo: values.phoneNo,
          },
        })
          .then(resp => {
            console.log('responseLogin', resp);
          })
          .catch(err => {
            console.log('error', err);
          });
      }}
      validationSchema={yup.object().shape({
        // phoneNo: yup.number().required('Enter 10 digit number'),
        email: yup.string().email().required('Invalid credentials'),
        password: yup
          .string()
          .min(6, 'too short')
          .required('Invalid credentials'),
      })}>
      {({
        values,
        handleChange,
        errors,
        touched,
        handleSubmit,
        isValid,
        setFieldValue,
        setFieldTouched,
      }) => (
        <View style={styles.container}>
          <View style={styles.mainView}>
            <View>
              <Text style={styles.heading}>
                {'Sign In Using Your \nMobile Number / Email'}
              </Text>
            </View>
            <TextInput
              value={values.email}
              style={styles.inputStyle}
              autoCapitalize="none"
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              placeholder="Mobile number / Email"
              placeholderTextColor={'white'}
            />
            {touched.email && errors.email && (
              <Text style={styles.warning}>{errors.email}</Text>
            )}
            {/* <TextInput
              value={values.phoneNo}
              style={styles.inputStyle}
              onChangeText={handleChange('phoneNo')}
              onBlur={() => setFieldTouched('phoneNo')}
              placeholder="Phone Number"
              placeholderTextColor={'#6E8997'}
            />
            {touched.phoneNo && errors.phoneNo && (
              <Text style={styles.warning}>{errors.phoneNo}</Text>
            )} */}

            <View style={styles.passBox}>
              <TextInput
                value={values.password}
                style={styles.inputStyle}
                autoCapitalize="none"
                onChangeText={handleChange('password')}
                placeholder="Password"
                placeholderTextColor={'white'}
                onBlur={() => setFieldTouched('password')}
                secureTextEntry={!values.toggle ? true : false}
              />

              <TouchableOpacity
                onPress={() => {
                  setFieldValue('toggle', !values.toggle);
                }}>
                {values.toggle ? (
                  <Image
                    style={styles.eye}
                    source={require('../../assets/image/eye.png')}
                  />
                ) : (
                  <Image
                    style={styles.eye}
                    source={require('../../assets/image/eyes.png')}
                  />
                )}
              </TouchableOpacity>
              {touched.password && errors.password && (
                <Text style={styles.warning}>{errors.password}</Text>
              )}
            </View>
            <TouchableOpacity>
              <Text style={styles.forgot}>{'Forgot Password?'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={isValid ? styles.buttonValid : styles.buttonInvalid}
              disabled={!isValid}
              onPress={handleSubmit}>
              <Text
                style={isValid ? styles.buttonText : styles.buttonTextInvalid}>
                {'SIGN IN'}
              </Text>
            </TouchableOpacity>
            <View style={styles.orStyle}>
              <View style={styles.line}></View>
              <Text style={styles.orButton}>{' OR '}</Text>
              <View style={styles.line}></View>
            </View>

            <TouchableOpacity
              style={styles.google}
              onPress={() =>
                // axios({
                //   method: 'post',
                //   url: 'https://fivestardevapi.appskeeper.in/api/v1/user/verify-only-otp',
                //   data: {
                //     userId: '62a0942f9ef3a6e0a7d45608',
                //     otp: '1234',
                //     countryCode: '+1',
                //     phoneNo: '9898989898',
                //   },
                // })
                //   .then(resp => {
                //     console.log('response', resp);
                //   })
                //   .catch(err => {
                //     console.log('error', err);
                //   });
                onGoogleButtonPress()
              }>
              <Image
                style={styles.glogo}
                source={require('../../assets/image/google.png')}
              />

              <Text style={styles.gText}>{'Continue With Google'}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.apple}>
              <Image
                style={styles.glogo}
                source={require('../../assets/image/apple.png')}
              />
              <Text style={styles.gText}>{'Continue with Apple'}</Text>
            </TouchableOpacity>

            <View style={styles.newUser}>
              <Text style={styles.newUserT}>{"I'm a new user "}</Text>
              {/* <Button
                title="Sign Up"
                color={'#44C2E3'}
                onPress={() => navigation.navigate('SignUp')}
              /> */}
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SignUp');
                }}>
                <Text style={{color: '#44C2E3'}}>{'Sign Up'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
}
