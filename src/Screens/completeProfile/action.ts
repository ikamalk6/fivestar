import axios from 'axios';

export const SportAction = (data: string) => {
  //  {data =auth token}

  return (dispatch: any) => {
    const $https = axios.create({
      baseURL: 'https://fivestardevapi.appskeeper.in/api/v1',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    $https.defaults.headers.common.Authorization = `Bearer ${data}`;
    $https
      .get('/user/sports')
      .then(resp => {
        console.log('========>', resp.data.data);
        dispatch({type: 'SPORTS_SET', payload: resp.data.data});
      })
      .catch(error => {
        console.log('sports', error);
      });
  };
};
