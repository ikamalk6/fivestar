import { combineReducers } from "redux";
import SignUpReducer from "../SignUp/reducer";
import ValidateOtpReducer from "../ValidateOtp/reducer";
const rootReducer=combineReducers({
    SignUpReducer,
    ValidateOtpReducer,

})
export default rootReducer;