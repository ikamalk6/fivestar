const intialState = {
  sportsdata: [],
  zipCodeData: [],
};

const ProfileReducer = (state = intialState, action: any) => {
  const {type, payload} = action;
  switch (type) {
    case 'SPORTS_SET':
      return {...state, sportsdata: payload};
    case 'ZIPCODE_SET':
      return {...state, zipCodeData: payload};
    default:
      return state;
  }
};
export default ProfileReducer;
