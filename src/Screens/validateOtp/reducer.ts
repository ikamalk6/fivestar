const initialState = {};

const ValidateOtpReducer = (state = initialState, action: any) => {
  const {type, payload} = action;

  switch (type) {
    case 'SET_USER_DETAIL':
      return {...state, ...payload};
    default:
      return {...state};
  }
};
export default ValidateOtpReducer;
