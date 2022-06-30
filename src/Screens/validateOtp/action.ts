// import axios from 'axios';


// const ValidateOtpApiCall = (str:string, setModalVisible:any, isModalVisible:boolean )=> {
//   console.log('otpaanenvala',str)
//   return (dispatch, getState:any) => {
//     const{
//       SignUpReducer:{userId,countryCode,phoneNo}
//     }=getState();
//     axios({
//       method: 'post',
//       url: 'https://fivestardevapi.appskeeper.in/api/v1/user/verify-only-otp',
//       data: {
//         userId: userId,
//         otp:str,
//         countryCode: countryCode,
//         phoneNo: phoneNo,
//       },
//     })
//       .then(resp => {
//         dispatch({type: 'SET_USER_DETAIL', payload: resp.data.data});
//         setModalVisible(true)
//         console.log('response', resp);
//       })
//       .catch(err => {
//         console.log('error', err);
//         setModalVisible(false)

//       });
//   };
// };

// export default ValidateOtpApiCall;


import axios from 'axios';

const ValidateOtpApiCall = (userId: any,otp: string,countryCode: any,phoneNo: any)=> {
      return axios({
      method: 'post',
      url: 'https://fivestardevapi.appskeeper.in/api/v1/user/verify-only-otp',
      data: {
        userId,
        otp,
        countryCode,
        phoneNo,
      },
    })
      .then(resp => {
         return resp;        
      })
      .catch(err => {
        console.log('error', err);
      });
};

export default ValidateOtpApiCall;
