import {combineReducers} from 'redux';
import SignUpReducer from '../screens/signUpScreen/reducer';
import ValidateOtpReducer from '../screens/validateOtp/reducer';
import ComProfReducer from '../screens/completeProfile/reducer';

const rootReducer = combineReducers({
  SignUpReducer,
  ValidateOtpReducer,
  ComProfReducer,
});
export default rootReducer;
