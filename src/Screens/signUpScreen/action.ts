import axios from 'axios';

const SignUpApiCall = values => {
  console.log('SignUpApiCall')

  return (dispatch) => {
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
        console.log('response',resp);
        
        dispatch({
          type: 'SET_USER',
          payload: resp.data.data,
        
        });
      })
      .catch(err => {
        console.log('error', err);
      });

    };
};

export default SignUpApiCall;
