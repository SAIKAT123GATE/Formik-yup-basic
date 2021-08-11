import { Button, Container, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Link } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link as RouterLink } from "react-router-dom";
import { userregister } from "../../redux/Actions/Useractions";
import { useDispatch } from "react-redux";

const useStyle = makeStyles((theme) => ({
  paper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: theme.spacing(10),
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(2),
    textAlign: "center",
  },

  buttonStyle: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    alignSelf: "center",
    width: "10rem",
  },
  link: {
    marginTop: theme.spacing(1),
  },
}));

const initialvalues = {
  name: "",
  email: "",
  password: "",
};

//Login Schema by Yup

const Loginschema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email").required("Required"),
  password: Yup.string().required("Required"),
});



function Signupscreen() {
  const dispatch = useDispatch();

  const onSubmit=(values,props)=>{
    console.log("hi")
    console.log(values);
    dispatch(userregister(values.name,values.email,values.password));
  }
  const classes = useStyle();
  return (
    <Container maxWidth='xs'>
      <div className={classes.paper}>
        <Typography component='h1' variant='h5'>
          SIGN-UP
        </Typography>

        <Formik initialValues={initialvalues} validationSchema={Loginschema} onSubmit={onSubmit}>
          {({ errors, touched }) => (
            <Form className={classes.form}>
              <Field
                as={TextField}
                type='text'
                variant='outlined'
                label='Name'
                name='name'
                fullWidth
                required
                placeholder='Enter Your Name'
                margin='normal'
                error={errors.name && touched.name ? true : false}
                helperText={<ErrorMessage name='name' />}
              />

              <Field
                as={TextField}
                type='email'
                variant='outlined'
                label='Email'
                name='email'
                fullWidth
                required
                placeholder='Enter email'
                margin='normal'
                error={errors.email && touched.email ? true : false}
                helperText={<ErrorMessage name='email' />}
              />

              <Field
                as={TextField}
                type='password'
                variant='outlined'
                label='Password'
                name='password'
                fullWidth
                required
                placeholder='Enter Password'
                margin='normal'
                helperText={<ErrorMessage name='password' />}
                error={errors.password && touched.password ? true : false}
              />

              <Button className={classes.buttonStyle} type="submit">SIGNUP</Button>
            </Form>
          )}
        </Formik>

        <Link
          component={RouterLink}
          to='/'
          variant='body2'
          className={classes.link}>
          ALREADY HAVE AN ACCOUNT? LOGIN
        </Link>
      </div>
    </Container>
  );
}

export default Signupscreen;
