import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native-paper';
import * as yup from 'yup';
import {Formik} from 'formik';
import styles from './Styles';
import {useSelector, useDispatch} from 'react-redux';
import SingUpApiCall from './action';

export default function SignUp() {
  const dispatch = useDispatch<any>();
  const {name, phoneNo, email, password, countryCode} = useSelector<any>(
    store => store.SignUpReducer,
  );
  const navigation = useNavigation<any>();

  return (
    <Formik
      initialValues={{
        name,
        phoneNo,
        email,
        password,
        checkToggle: false,
        eyeToggle: true,
        countryCode,
      }}
      // onSubmit={(values, {resetForm}) => {
      //   // Alert.alert('SignUp successfull');
      //   console.log('on Submit ', values);
      //   dispatch(SingUpApiCall(values));
      //   navigation.navigate('ValidateOtp');

      //   resetForm();
      // }}
      onSubmit={values => {
        dispatch(SingUpApiCall(values));
        navigation.navigate('ValidateOtp');
      }}
      validationSchema={yup.object().shape({
        name: yup.string().min(2, 'too short').max(30, 'too long').required(),
        phoneNo: yup.number().min(10).required(),
        email: yup.string().email().required(),
        password: yup.string().min(6, 'too short').required(),
        checkToggle: yup.boolean().equals([true], 'must agree'),
      })}>
      {({
        values,
        handleChange,
        errors,
        touched,
        handleSubmit,
        isValid,
        setFieldValue,
      }) => (
        <View style={styles.main}>
          {/* {console.log('valid', isValid)} */}
          <ScrollView>
            <View style={styles.inner}>
              <TouchableOpacity
                style={{width: 20}}
                onPress={() => {
                  navigation.navigate('LoginScreen');
                }}>
                <Image
                  style={styles.arrow}
                  source={require('../../assets/image/lefta.png')}
                />
              </TouchableOpacity>

              <View>
                <Text style={styles.create}>{'Create Account'}</Text>
                <Text style={styles.started}>{'Signup to get started'}</Text>
              </View>

              <TextInput
                style={styles.inputText}
                label={'Full Name*'}
                outlineColor={'#ffffff'}
                activeOutlineColor={'#ffffff'}
                value={values.name}
                mode="outlined"
                selectionColor="#ffffff"
                dense={true}
                onChangeText={handleChange('name')}
                theme={{
                  colors: {
                    placeholder: 'white',
                    text: '#44C2E3',
                    primary: 'white',
                    background: '#000000',
                  },
                }}
              />

              {touched.name && errors.name && (
                <Text style={styles.warning}>{errors.name}</Text>
              )}
              <TextInput
                label={'Mobile Number*'}
                style={styles.inputText}
                outlineColor={'#ffffff'}
                activeOutlineColor={'#ffffff'}
                value={values.phoneNo}
                dense={true}
                keyboardType="numeric"
                mode="outlined"
                selectionColor="#ffffff"
                onChangeText={handleChange('phoneNo')}
                theme={{
                  colors: {
                    placeholder: 'white',
                    text: '#44C2E3',
                    primary: 'white',
                    background: '#000000',
                  },
                }}
              />

              {touched.phoneNo && errors.phoneNo && (
                <Text style={styles.warning}>{errors.phoneNo} </Text>
              )}
              <TextInput
                label={'Email*'}
                style={styles.inputText}
                outlineColor={'#ffffff'}
                activeOutlineColor={'#ffffff'}
                value={values.email}
                dense={true}
                mode="outlined"
                selectionColor="#ffffff"
                onChangeText={handleChange('email')}
                theme={{
                  colors: {
                    placeholder: 'white',
                    text: '#44C2E3',
                    primary: 'white',
                    background: '#000000',
                  },
                }}
              />
              {touched.email && errors.email && (
                <Text style={styles.warning}>{errors.email}</Text>
              )}
              <View style={styles.passBox}>
                <TextInput
                  label={'Password*'}
                  style={styles.inputText}
                  secureTextEntry={values.eyeToggle ? true : false}
                  dense={true}
                  outlineColor={'#ffffff'}
                  activeOutlineColor={'#ffffff'}
                  value={values.password}
                  mode="outlined"
                  selectionColor="#ffffff"
                  onChangeText={handleChange('password')}
                  theme={{
                    colors: {
                      placeholder: 'white',
                      text: '#44C2E3',
                      primary: 'white',
                      background: '#000000',
                    },
                  }}
                />

                <TouchableOpacity
                  onPress={() => {
                    setFieldValue('eyeToggle', !values.eyeToggle);
                  }}>
                  {values.eyeToggle ? (
                    <Image
                      style={styles.eye}
                      source={require('../../assets/image/eyes.png')}
                    />
                  ) : (
                    <Image
                      style={styles.eye}
                      source={require('../../assets/image/eye.png')}
                    />
                  )}
                </TouchableOpacity>
              </View>
              {touched.password && errors.password && (
                <Text style={styles.warning}>{errors.password}</Text>
              )}
              <View style={[styles.terms]}>
                <TouchableOpacity
                  value={values.checkToggle}
                  onChange={handleChange('checkToggle')}
                  onPress={() => {
                    setFieldValue('checkToggle', !values.checkToggle);
                  }}>
                  {values.checkToggle ? (
                    <Image
                      source={require('../../assets/image/checkbox1.png')}
                      style={styles.box}
                    />
                  ) : (
                    <Image
                      source={require('../../assets/image/check1.png')}
                      style={styles.box}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.termText}>{'I agree to the '}</Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Terms');
                  }}>
                  <Text style={styles.toe}>{'Terms of Use*'}</Text>
                </TouchableOpacity>
              </View>
              {touched.checkToggle && errors.checkToggle && (
                <Text style={styles.warning}>{errors.checkToggle}</Text>
              )}
              <TouchableOpacity
                style={isValid ? styles.button : styles.buttonDisabled}
                disabled={!isValid}
                onPress={handleSubmit}
                //
              >
                <Text
                  style={
                    isValid ? styles.buttonText : styles.buttonTextDisabled
                  }>
                  {'CREATE ACCOUNT'}
                </Text>
              </TouchableOpacity>
              <View style={styles.orStyle}>
                <View style={styles.line}></View>
                <Text style={styles.orButton}>{' OR '}</Text>
                <View style={styles.line}></View>
              </View>

              <TouchableOpacity style={styles.google}>
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
              <View style={styles.signIn}>
                <Text style={styles.already}>{'Already a user '}</Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('LoginScreen');
                  }}>
                  <Text style={styles.sign}>{'Sign In'}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </Formik>
  );
}
