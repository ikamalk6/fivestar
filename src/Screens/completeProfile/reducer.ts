const initialState = {
  sports: [],
};

const ComProfReducer = (state = initialState, action: any) => {
  const {type, payload} = action;

  switch (type) {
    case 'SET_SPORTS':
      return {...state, sports: payload};

    default:
      return {state};
  }
};
export default ComProfReducer;
