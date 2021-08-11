import React from 'react';
import{ Route,Redirect} from "react-router-dom";
import {useSelector} from "react-redux";


function PublicRoutes({component:Component,...rest}) {
    
    const user = useSelector(state => state.userLogin.userInfo);
     
    //const[currentuser,setCurrentuser]=useState(true);
    return (
        <Route {...rest} render={(props)=>
            !user?(<Component {...props} />):(<Redirect to={{pathname:"/home"}}/>)

        }/>
            
        
    )
}

export default PublicRoutes;
