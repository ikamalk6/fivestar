import axios from 'axios';
import URL_LINKS from '../../utils/url';

export const SportAction = (data: string) => {
  //  {data =auth token}

  return (dispatch: any) => {
    const $https = axios.create({
      baseURL: URL_LINKS.BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    $https.defaults.headers.common.Authorization = `Bearer ${data}`;
    $https
      .get(`${URL_LINKS.SPORTS}`)
      .then(resp => {
        console.log('resp', resp.data.data);
        dispatch({type: 'SPORTS_SET', payload: resp.data.data});
      })
      .catch(error => {
        console.log('sports', error);
      });
  };
};

export const checkUsername = (data: any) => {
  return () => {
    const $https = axios.create({
      baseURL: URL_LINKS.BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    $https.defaults.headers.common.Authorization = `Bearer ${data}`;
    $https
      .get(`${URL_LINKS.CHECK_USERNAME}`)
      .then(resp => {
        console.log('resp', resp);
      })
      .catch(error => {
        console.log('error', error);
      });
  };
};

export const completeProfileAction = (
  authToken: string,
  username: string,
  id: string,
  zipcode: string,
  name: string,
  userType: string,
) => {
  console.log(username, id, zipcode, name, userType);
  return () => {
    const $https = axios.create({
      baseURL: URL_LINKS.BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    $https.defaults.headers.common.Authorization = `Bearer ${authToken}`;
    $https
      .post(`${URL_LINKS.COMPLETE_PROFILE}`, {
        username,
        id,
        zipcode,
        name,
        userType: 1,
        personalDetails: {},
      })
      .then(response => {
        console.log('^^^^ === ', response);
      })
      .catch(error => {
        console.log('*****', error);
      });
  };
};
