import axios from 'axios';
import URL_LINKS from '../../utils/url';
export const UserContentAction = (
  authToken: string,
  callback: Function,
  ErrorCallback: Function,
) => {
  console.log('----------->', authToken);
  return (dispatch: any) => {
    const $https = axios.create({
      baseURL: URL_LINKS.BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    $https.defaults.headers.common.Authorization = `Bearer ${authToken}`;
    $https
      .get('/user/contents?page=1')
      .then(resp => {
        console.log('----^^^->', resp.data.data.result);
        dispatch({type: 'USER_CONTENT', payload: resp?.data?.data?.result});
        callback(resp);
      })
      .catch(error => {
        console.log('----------->', error);
        ErrorCallback(error);
      });
  };
};
