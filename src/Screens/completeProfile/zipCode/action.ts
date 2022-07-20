import axios from 'axios';
import URL_LINKS from '../../../utils/url';
export const zipcodeAction = (text: string, page: number) => {
  console.log(text);
  return (dispatch: any, getState: any) => {
    const {
      ProfileReducer: {zipCodeData},
    } = getState();

    const $https = axios.create({
      baseURL: URL_LINKS.BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    $https
      .get(`/zipcode-list?&search=${text}&limit=15&page=${page}`)
      .then(resp => {
        console.log('========>', resp);
        if (page > 1 && zipCodeData.length > 0) {
          dispatch({
            type: 'ZIPCODE_SET',
            payload: [...zipCodeData, ...resp.data.data.result],
          });
        } else {
          dispatch({type: 'ZIPCODE_SET', payload: resp.data.data.result});
        }
      })
      .catch(error => {
        console.log('ZIPCODEERRRORRR', error);
      });
  };
};
