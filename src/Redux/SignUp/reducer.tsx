const initialState = {
  countryCode: '',
  phoneNo: '',
  userId: '',
};

const SignUpReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case 'SET_USERID':
      return {...state, ...payload};
    case 'SET_PHONE':
      return {...state, ...payload};
    case 'SET_EMAIL':
      return {...state, ...payload};
    case 'SET_PASSWORD':
      return {...state, ...payload};
    case 'SET_COUNTRYCODE':
      return {...state, ...payload};
    default:
      return {...state};
  }
};
export default SignUpReducer;
