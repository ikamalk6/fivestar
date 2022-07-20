import axios from 'axios';

import {LoginValuesModal} from '../../utils/modals';
const LoginAction = (values: LoginValuesModal) => {
  return (_: any) => {
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
  };
};
export default LoginAction;
