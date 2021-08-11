import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {userlogout} from "../../redux/Actions/Useractions";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


function Header() {
  const classes = useStyles();
  const user = useSelector((state) => state.userLogin.userInfo);
  const dispatch=useDispatch();
  const logouthandler=()=>{
    dispatch(userlogout());
  }

  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton
          edge='start'
          className={classes.menuButton}
          color='inherit'
          aria-label='menu'>
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' className={classes.title}>
          WELCOME
        </Typography>
        {user ? (
          <Button color='inherit' onClick={logouthandler}>
            Logout
          </Button>
        ) : (
          <Button color='inherit'>
            <Link to='/'>Login</Link>
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
