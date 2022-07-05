import {Text, View, TouchableOpacity, Image, Alert} from 'react-native';
import React from 'react';
import * as yup from 'yup';
import {Formik} from 'formik';
import styles from '../loginScreen/style';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import OnGoogleButtonPress from '../../utils/googleButton';
import CustomTextInput from '../../components/customTextInput';
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
            email: values.email,
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
        email: yup.string().email().required('Invalid credentials'),
        password: yup
          .string()
          .min(8, 'too short')
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
            <CustomTextInput
              label={'Mobile number / Email'}
              value={values.email}
              autoCapitalize="none"
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
            />
            {touched.email && errors.email && (
              <Text style={styles.warning}>{errors.email}</Text>
            )}

            <View style={styles.passBox}>
              <CustomTextInput
                label={'Password'}
                value={values.password}
                autoCapitalize="none"
                onChangeText={handleChange('password')}
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
              style={
                isValid && values.email != '' && values.password != ''
                  ? styles.buttonValid
                  : styles.buttonInvalid
              }
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
              onPress={() => OnGoogleButtonPress()}>
              <Image
                style={styles.glogo}
                source={require('../../assets/image/google.png')}
              />

              <Text style={styles.gText}>{'Continue With Google'}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.apple}
              onPress={() => {
                navigation.navigate('ValidateOtp');
              }}>
              <Image
                style={styles.glogo}
                source={require('../../assets/image/apple.png')}
              />
              <Text style={styles.gText}>{'Continue with Apple'}</Text>
            </TouchableOpacity>

            <View style={styles.newUser}>
              <Text style={styles.newUserT}>{"I'm a new user "}</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SignUp');
                }}>
                <Text style={styles.signUptxt}>{'Sign Up'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
}
