import { combineReducers } from "redux";
import SignUpReducer from "../screens/signUpScreen/reducer";
import ValidateOtpReducer from "../screens/validateOtp/reducer";

const rootReducer=combineReducers({
    SignUpReducer,
    ValidateOtpReducer,

})
export default rootReducer;