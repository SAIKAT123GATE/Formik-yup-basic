import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Loginscreen from "./Screens/Loginscreen/Loginscreen";
import Header from "./Components/Header/Header";
import { Container } from "@material-ui/core";
import Signupscreen from "./Screens/Signupscreen/Signupscreen";
import Homescreen from "./Screens/Homescreen/Homescreen";
import {useSelector} from "react-redux";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import PublicRoutes from "./routes/PublicRoutes";

function App() {
  const user = useSelector(state => state.userLogin.userInfo)

  return (
    <Container>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to={user?"/home":"/login"}/>
          </Route>
          <PublicRoutes exact path='/login' component={Loginscreen} />
          <PublicRoutes exact path='/signup' component={Signupscreen} />
         <ProtectedRoutes exact path='/home' component={Homescreen}/>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
