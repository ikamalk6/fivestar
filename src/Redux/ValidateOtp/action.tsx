import axios from 'axios';

const ValidateOtpApiCall = values => {
  console.log(values);

  return (dispatch, getState) => {
    axios({
      method: 'post',
      url: 'https://fivestardevapi.appskeeper.in/api/v1/user/verify-only-otp',
      data: {
        userId: values.userId,
        otp: values.otp,
        countryCode: values.countryCode,
        phoneNo: values.phoneNo,
      },
    })
      .then(resp => {
        dispatch({type: 'SET_NAME', payload: {...resp.data.data.name}});
        console.log('response', resp);
      })
      .catch(err => {
        console.log('error', err);
      });
  };
};

export default ValidateOtpApiCall;
