import {Text, View, TouchableOpacity, Image, Alert} from 'react-native';
import React from 'react';
import * as yup from 'yup';
import {Formik} from 'formik';
import styles from '../loginScreen/style';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import OnGoogleButtonPress from '../../utils/googleButton';
import CustomTextInput from '../../components/customTextInput';
import {STRINGNAME} from '../../utils/string';
import {IMAGE} from '../../utils/images';
import {ROUTE_NAME} from '../../router/routeNames';
import {LoginValuesModal} from '../../utils/modals';

export default function LoginScreen() {
  const navigation = useNavigation<any>();
  return (
    <Formik
      initialValues={new LoginValuesModal()}
      onSubmit={(values, {resetForm}) => {
        Alert.alert('Login succesfull');
        console.log('on Submit LOGIN values', values);
        resetForm();
      }}
      validationSchema={yup.object().shape({
        email: yup.string().email().required(STRINGNAME.INVALID_CRED),
        password: yup
          .string()
          .min(8, STRINGNAME.TOO_SHORT)
          .required(STRINGNAME.INVALID_CRED),
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
                {STRINGNAME.SIGNIN_USING_MOBILE_EMAIL}
              </Text>
            </View>
            <CustomTextInput
              value={values.email}
              autoCapitalize="none"
              style={styles.txtinp}
              label={STRINGNAME.MOBILE_EMAIL}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
            />
            {touched.email && errors.email && (
              <Text style={styles.warning}>{errors.email}</Text>
            )}

            <View style={styles.passBox}>
              <CustomTextInput
                autoCapitalize="none"
                style={styles.passInp}
                value={values.password}
                numberOfLines={1}
                label={STRINGNAME.PASSWORD}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                secureTextEntry={!values.toggle ? true : false}
              />

              <TouchableOpacity
                style={styles.eyeBttn}
                onPress={() => {
                  setFieldValue('toggle', !values.toggle);
                }}>
                {values.toggle ? (
                  <Image style={styles.eye} source={IMAGE.eyeEnable} />
                ) : (
                  <Image style={styles.eye} source={IMAGE.eyeDisable} />
                )}
              </TouchableOpacity>
              {touched.password && errors.password && (
                <Text style={styles.warning}>{errors.password}</Text>
              )}
            </View>
            <TouchableOpacity>
              <Text style={styles.forgot}>{STRINGNAME.FORGOT_PASSWORD}</Text>
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
                style={
                  isValid && values.email != '' && values.password != ''
                    ? styles.buttonText
                    : styles.buttonTextInvalid
                }>
                {STRINGNAME.SIGNIN}
              </Text>
            </TouchableOpacity>
            <View style={styles.orStyle}>
              <View style={styles.line} />
              <Text style={styles.orButton}>{' ' + STRINGNAME.OR + ' '}</Text>
              <View style={styles.line} />
            </View>

            <TouchableOpacity
              style={styles.google}
              onPress={() => OnGoogleButtonPress()}>
              <Image style={styles.glogo} source={IMAGE.googleLogo} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.apple}
              onPress={() => {
                navigation.navigate(ROUTE_NAME.VALIDATEOTP);
              }}>
              <Image style={styles.glogo} source={IMAGE.appleLogo} />
            </TouchableOpacity>

            <View style={styles.newUser}>
              <Text style={styles.newUserT}>{STRINGNAME.I_AM_NEW_USER}</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(ROUTE_NAME.SIGNUP);
                }}>
                <Text style={styles.signUptxt}>{STRINGNAME.SIGNUP1}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
}
