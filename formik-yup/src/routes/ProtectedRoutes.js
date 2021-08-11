import React from 'react';
import{ Route,Redirect} from "react-router-dom";
import {useSelector} from "react-redux";

function ProtectedRoutes({component:Component,...rest}) {
    const user = useSelector(state => state.userLogin.userInfo);
    return (
        <Route {...rest} render={(props)=>
            user?(<Component {...props} />):(<Redirect to={{pathname:"/login"}}/>)

        }/>
    )
}

export default ProtectedRoutes




