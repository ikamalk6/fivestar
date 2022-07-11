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
export default function SignUp() {
  const dispatch = useDispatch<any>();
  // const {name, email, password, countryCode, phoneNo} = useSelector(
  //   (store: any) => store.SignUpReducer,
  // );
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation<any>();

  return (
    <Formik
      initialValues={new SignupValuesModal()}
      onSubmit={values => {
        setIsLoading(true);
        console.log('on Submit', values);
        dispatch(
          SignUpApiCall(
            values,
            (resp: any) => {
              if (resp?.status === 200) {
                setIsLoading(false);
                navigation.navigate('ValidateOtp');
              }
            },
            (error: any) => {
              setIsLoading(false);
              Alert.alert('error', error);
            },
          ),
        );
      }}
      validationSchema={yup.object().shape({
        name: yup.string().min(3, 'too short').max(30, 'too long').required(),
        phoneNo: yup
          .number()
          .min(1000000000, 'ENTER_VALID_PHONE_NUMBER')
          .max(9999999999, 'ENTER_VALID_PHONE_NUMBER')
          .required(),
        email: yup.string().email('enter valid email').required(),
        password: yup
          .string()
          .min(6, 'too short')
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
          {/* <TouchableOpacity
            style={{width: 20}}
            onPress={() => {
              navigation.navigate('LoginScreen');
            }}>
            <Image
              style={styles.arrow}
              source={require('../../assets/image/lefta.png')}
            />
          </TouchableOpacity> */}
          <ScrollView showsVerticalScrollIndicator={false}>
            <GoBack />
            <View style={styles.inner}>
              <View>
                <Text style={styles.create}>{'Create Account'}</Text>
                <Text style={styles.started}>{'Signup to get started'}</Text>
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
                maxLength={10}
                onChangeText={handleChange('phoneNo')}
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
                />

                <TouchableOpacity
                  style={styles.eyeBttn}
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
          {isLoading && <ActivityIndicator size="large" color={COLOR.sky} />}
        </View>
      )}
    </Formik>
  );
}
