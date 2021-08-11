import {
    User_Register_Request,
    User_Register_Fail,
    User_Register_Success,
    User_Login_Request,
    User_Login_Success,
    User_Login_Fail,
    User_Logout
  } from "../constants/Constants";
  import axios from "axios";

  export const userregister=(name,email,password)=>async(dispath)=>{
      try{
          dispath({
              type:User_Register_Request
          });
          
          var data=await axios.post("/signup",{
              name:name,
              email:email,
              password:password
          });
          var userdata=data.data;
          console.log(userdata);

          dispath({
              type:User_Register_Success,
              payload:userdata
          });

          dispath({
              type:User_Login_Success,
              payload:userdata
          })
          localStorage.setItem("userInfo",JSON.stringify(userdata));

      }catch(error){
                console.log(error.response.data.status);
                dispath({
                    type:User_Register_Fail,
                    payload:error.response.data.status
                })
      }
  }

  //User Login action

  export const userlogin=(email,password)=>async(dispath)=>{
      try{
          dispath({
              type:User_Login_Request
          });
          var userlogin=await axios.post("/login",{
              email:email,
              password:password
          });
          dispath({
              type:User_Login_Success,
              payload:userlogin.data
          })

      }catch(error){
          console.log(error);
          dispath({
              type:User_Login_Fail,
              payload:error.response.data.status
          })
          
      }
  }

  export const userlogout=()=>async (dispatch)=>{
    localStorage.removeItem("userInfo");
    dispatch({type:User_Logout});
  }