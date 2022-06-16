const initialState = {
  countryCode: '',
  phoneNo: '',
  userId: '',
};

const SignUpReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case 'SET_USER':
      return {...payload};

    default:
      return {...state};
  }
};
export default SignUpReducer;
