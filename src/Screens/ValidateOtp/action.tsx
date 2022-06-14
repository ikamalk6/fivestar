import axios from 'axios';

const ValidateOtpApiCall = values => {
  console.log(values);

  const {
    user: {userId, countryCode, phoneNo},
    otp,
  } = values;

  return (dispatch, getState) => {
    axios({
      method: 'post',
      url: 'https://fivestardevapi.appskeeper.in/api/v1/user/verify-only-otp',
      data: {
        userId: userId,
        otp: otp,
        countryCode: countryCode,
        phoneNo: phoneNo,
      },
    })
      .then(resp => {
        dispatch({type: 'SET_USER_DETAIL', payload: resp.data.data});
        console.log('response', resp);
      })
      .catch(err => {
        console.log('error', err);
      });
  };
};

export default ValidateOtpApiCall;
