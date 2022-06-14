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
          type: 'SET_USER',
          payload: resp.data.data,
        });
        // console.log('check',userId)
       
      })
      .catch(err => {
        console.log('error', err);
      });
  };
};

export default SingUpApiCall;
