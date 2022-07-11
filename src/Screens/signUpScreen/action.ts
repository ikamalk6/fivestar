import axios from 'axios';
import {SignupValuesModal} from '../../utils/modals';

const SignUpApiCall = (
  values: SignupValuesModal,
  callback: Function,
  ErrorCallback: Function,
) => {
  return (dispatch: any) => {
    axios({
      method: 'post',
      url: 'https://fivestardevapi.appskeeper.in/api/v1/user/signup',
      data: {
        name: values.name,
        email: values.email,
        password: values.password,
        countryCode: '+1',
        phoneNo: values.phoneNo,
      },
    })
      .then(resp => {
        console.log('response', resp);
        callback(resp);
        dispatch({
          type: 'SET_USER',
          payload: resp.data.data,
        });
      })
      .catch(err => {
        ErrorCallback(err);
        console.log('error', err);
      });
  };
};

export default SignUpApiCall;
