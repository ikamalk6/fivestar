const initialState = {
  name: '',
};

const ValidateOtpReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case 'SET_NAME':
      return {...state, ...payload};
    default:
      return {...state};
  }
};
export default ValidateOtpReducer;
