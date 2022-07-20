import {
  Text,
  View,
  Alert,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import * as yup from 'yup';
import {Formik} from 'formik';
import SignUpApiCall from './action';
import React, {useState} from 'react';
import COLOR from '../../utils/colors';
import styles from '../signUpScreen/style';
import GoBack from '../../components/goBackBtn';
import {SignupValuesModal} from '../../utils/modals';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import CustomTextInput from '../../components/customTextInput';
import {DisableButton, EnableButton} from '../../components/customButton';
import {STRINGNAME} from '../../utils/string';
import {ROUTE_NAME} from '../../router/routeNames';
import {IMAGE} from '../../utils/images';
export default function SignUp() {
  const dispatch = useDispatch<any>();
  const navigation = useNavigation<any>();
  const [isLoading, setIsLoading] = useState(false);

  const toLogin = () => {
    navigation.navigate(ROUTE_NAME.LOGIN_SCREEN);
  };
  const toTerms = () => {
    navigation.navigate(ROUTE_NAME.TERMS);
  };
  const toOTP = () => {
    navigation.navigate(ROUTE_NAME.VALIDATEOTP);
  };

  return (
    <Formik
      initialValues={new SignupValuesModal()}
      onSubmit={(values, {resetForm}) => {
        setIsLoading(true);
        console.log('on Submit', values);

        dispatch(
          SignUpApiCall(
            values,
            (resp: any) => {
              if (resp?.status === 200) {
                setIsLoading(false);
                toOTP();
              }
            },
            (error: any) => {
              setIsLoading(false);
              console.log('ERROR', error);
            },
          ),
        );
        resetForm();
      }}
      validationSchema={yup.object().shape({
        name: yup.string().min(3, 'too short').max(30, 'too long').required(),
        phoneNo: yup
          .number()
          .min(1000000000, 'enter valid phone number')
          .max(9999999999, 'enter valid phone number')
          .required(),
        email: yup.string().email('enter valid email').required(),
        password: yup
          .string()
          .min(6, 'minimunm 8 characters are required')
          .max(15, 'too long')
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          )
          .required(),
        checkToggle: yup.boolean().equals([true], 'must agree'),
      })}>
      {({
        values,
        errors,
        touched,
        isValid,
        handleChange,
        handleSubmit,
        setFieldValue,
        handleBlur,
      }) => (
        <View style={styles.main}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <GoBack />
            <View style={styles.inner}>
              <View>
                <Text style={styles.create}>{STRINGNAME.CREATE_ACCOUNT}</Text>
                <Text style={styles.started}>
                  {STRINGNAME.SIGN_UP_TO_GET_STARTED}
                </Text>
              </View>

              <CustomTextInput
                value={values.name}
                label={'Full Name*'}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
              />

              {touched.name && errors.name && (
                <Text style={styles.warning}>{errors.name}</Text>
              )}
              <CustomTextInput
                label={'Mobile Number'}
                value={values.phoneNo}
                keyboardType="numeric"
                onBlur={handleBlur('phoneNo')}
                onChangeText={handleChange('phoneNo')}
                maxLength={10}
              />

              {touched.phoneNo && errors.phoneNo && (
                <Text style={styles.warning}>{errors.phoneNo} </Text>
              )}

              <CustomTextInput
                value={values.email}
                label={'Email*'}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
              />
              {touched.email && errors.email && (
                <Text style={styles.warning}>{errors.email}</Text>
              )}
              <View style={styles.passBox}>
                <CustomTextInput
                  label={'Password*'}
                  value={values.password}
                  secureTextEntry={values.eyeToggle ? true : false}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  style={styles.passInp}
                />

                <TouchableOpacity
                  style={styles.eyeBttn}
                  onPress={() => {
                    setFieldValue('eyeToggle', !values.eyeToggle);
                  }}>
                  {values.eyeToggle ? (
                    <Image style={styles.eye} source={IMAGE.eyeDisable} />
                  ) : (
                    <Image style={styles.eye} source={IMAGE.eyeEnable} />
                  )}
                </TouchableOpacity>
              </View>
              {touched.password && errors.password && (
                <Text style={styles.warning}>{errors.password}</Text>
              )}
              <View style={[styles.terms]}>
                <TouchableOpacity
                  onPress={() => {
                    setFieldValue('checkToggle', !values.checkToggle);
                  }}>
                  {values.checkToggle ? (
                    <Image source={IMAGE.checkBox} style={styles.box} />
                  ) : (
                    <Image source={IMAGE.checkBox2} style={styles.box} />
                  )}
                </TouchableOpacity>
                <Text style={styles.termText}>{STRINGNAME.I_AGREE}</Text>
                <TouchableOpacity onPress={toTerms}>
                  <Text style={styles.toe}>{STRINGNAME.TERMS_OF_USE}</Text>
                </TouchableOpacity>
              </View>
              {touched.checkToggle && errors.checkToggle && (
                <Text style={styles.warning}>{errors.checkToggle}</Text>
              )}

              <View>
                {isValid && values.name != '' ? (
                  <EnableButton
                    label={STRINGNAME.CREATE_ACCOUNT}
                    onPress={handleSubmit}
                  />
                ) : (
                  <DisableButton label={STRINGNAME.CREATE_ACCOUNT} />
                )}
              </View>
              <View style={styles.orStyle}>
                <View style={styles.line}></View>
                <Text style={styles.orButton}>{' ' + STRINGNAME.OR + ' '}</Text>
                <View style={styles.line}></View>
              </View>

              <TouchableOpacity style={styles.google}>
                <Image style={styles.glogo} source={IMAGE.google} />
                <Text style={styles.gText}>
                  {STRINGNAME.CONTINUE_WITH_GOOGLE}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.apple}>
                <Image style={styles.glogo} source={IMAGE.apple} />
                <Text style={styles.gText}>
                  {STRINGNAME.CONTINUE_WITH_APPLE}
                </Text>
              </TouchableOpacity>
              <View style={styles.signIn}>
                <Text style={styles.already}>{STRINGNAME.ALREADY}</Text>
                <TouchableOpacity onPress={toLogin}>
                  <Text style={styles.sign}>{STRINGNAME.SIGNIN}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
          {isLoading && (
            <View style={styles.activiyIndicator}>
              <ActivityIndicator size="large" color={COLOR.sky} />
            </View>
          )}
        </View>
      )}
    </Formik>
  );
}
