const intialState = {
  userContentData: [],
};

const UserActionReducer = (state = intialState, action: any) => {
  const {type, payload} = action;
  switch (type) {
    case 'USER_CONTENT':
      return {...state, userContentData: payload};

    default:
      return state;
  }
};
export default UserActionReducer;
