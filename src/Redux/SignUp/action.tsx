import axios from 'axios';

const SingUpApiCall = values => {
  // console.log(values);

  return (dispatch, getState) => {
    axios({
      method: 'post',
      url: 'https://fivestardevapi.appskeeper.in/api/v1/user/signup',
      data: {
        name: values.name,
        phoneNo: values.phoneNo,
        email: values.email,
        password: values.password,
        countryCode: '+1',
      },
    })
      .then(resp => {
        dispatch({
          type: 'SET_USERID',
          payload: {userId: resp.data.data.userId},
        });
        dispatch({
          type: 'SET_PHONE',
          payload: {phoneNo: resp.data.data.phoneNo},
        });
        dispatch({
          type: 'SET_COUNTRYCODE',
          payload: {countryCode: resp.data.data.countryCode},
        });
        console.log('response', resp);
      })
      .catch(err => {
        console.log('error', err);
      });
  };
};

export default SingUpApiCall;
