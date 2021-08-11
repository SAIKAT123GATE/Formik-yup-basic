import {combineReducers} from "redux";
import { userRegisterReducer,userLoginReducer } from "./Userreducers";
export default combineReducers({
    userRegister:userRegisterReducer,
    userLogin:userLoginReducer
})