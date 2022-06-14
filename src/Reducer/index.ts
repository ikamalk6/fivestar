import { combineReducers } from "redux";
import SignUpReducer from "../Screens/SignUp/reducer";
import ValidateOtpReducer from "../Screens/ValidateOtp/reducer";

const rootReducer=combineReducers({
    SignUpReducer,
    ValidateOtpReducer,

})
export default rootReducer;