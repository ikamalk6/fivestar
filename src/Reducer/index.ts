import {combineReducers} from 'redux';
import ProfileReducer from '../screens/completeProfile/reducer';
import SignUpReducer from '../screens/signUpScreen/reducer';
import ValidateOtpReducer from '../screens/validateOtp/reducer';

const rootReducer = combineReducers({
  SignUpReducer,
  ValidateOtpReducer,
  ProfileReducer,
});
export default rootReducer;
