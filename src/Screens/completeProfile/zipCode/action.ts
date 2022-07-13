import axios from 'axios';
import React from 'react';
export const zipcodeAction = (text: string) => {
  console.log(text);
  return (dispatch: any) => {
    const $https = axios.create({
      baseURL: 'https://fivestardevapi.appskeeper.in/api/v1',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    $https
      .get(`/zipcode-list?&search=${text}&page=1`)
      .then(resp => {
        console.log('========>', resp);
        dispatch({type: 'ZIPCODE_SET', payload: resp.data.data});
      })
      .catch(error => {
        console.log('ZIPCODEERRRORRR', error);
      });
  };
};
