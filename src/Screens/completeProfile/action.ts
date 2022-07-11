import axios from 'axios';

// export default function completeProfileaction() {
//   return (dispatch: any, getState: any) => {
//     console.log('asdfghjk');
//     axios
//       .get('https://fivestardevapi.appskeeper.in/api/v1/user/sports')
//       .then(resp => {
//         console.log('resp', resp);
//         dispatch({type: 'SET_SPORTS', payload: resp.data});
//       })
//       .catch(err => {
//         console.log('error', err);
//       });
//   };
// }

export const sportsAction = (authToken: string) => {
  return (dispatch: any) => {
    const $https = axios.create({
      baseURL: 'https://fivestardevapi.appskeeper.in/api/v1',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    $https.defaults.headers.common.Authorization = `Bearer ${authToken}`;
    $https
      .get('/user/sports')
      .then(response => {
        console.log('hjkl------------------>', response.data.data);
        dispatch({type: 'SET_SPORTS', payload: response.data.data});
      })
      .catch(error => {
        console.log('sports', error);
      });
  };
};
