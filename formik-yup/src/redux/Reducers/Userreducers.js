import {
    User_Register_Request,
    User_Register_Fail,
    User_Register_Success,
    User_Login_Request,
    User_Login_Success,
    User_Login_Fail,
    User_Logout
  } from "../constants/Constants";
  
  export const userRegisterReducer=(state={},action)=>{
      switch(action.type){
          case User_Register_Request:
              return {isloading:true}
          case User_Register_Success:
              return {
                  isloading:false,
                  userInfo:action.payload
              }
          case User_Register_Fail:
              return{
                  isloading:false,
                  error:action.payload
              }
          default:
              return state
      }
  }
  
  export const userLoginReducer=(state={},action)=>{
      switch(action.type){
          case User_Login_Request:
              return{isloading:true}
          case User_Login_Success:
              return{
                  isloading:false,
                  userInfo:action.payload
              }
          case User_Login_Fail:
              return{
                  isloading:false,
                  error:action.payload
              }
            case User_Logout:
                return {}
          default:
              return state;
      }
  }
  