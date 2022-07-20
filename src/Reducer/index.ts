import {combineReducers} from 'redux';
import ProfileReducer from '../screens/completeProfile/reducer';
import UserActionReducer from '../screens/home/reducer';
import SignUpReducer from '../screens/signUpScreen/reducer';
import ValidateOtpReducer from '../screens/validateOtp/reducer';

const rootReducer = combineReducers({
  SignUpReducer,
  ValidateOtpReducer,
  ProfileReducer,
  UserActionReducer,
});
export default rootReducer;
