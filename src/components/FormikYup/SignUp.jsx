import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Formik, Form } from "formik";
import * as yup from "yup";

const SignUp = () => {
  const useStyles = makeStyles((theme) => ({
    "@global": {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    // avatar: {
    //   margin: theme.spacing(1),
    //   backgroundColor: theme.palette.secondary.main,
    // },
    form: {
      width: "100%",
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  let SignupSchema = yup.object().shape({
    firstName: yup.string().required("First name is required."),
    lastName: yup.string().required("Last name is required."),
    email: yup.string().email().required("Email is required."),
    bio: yup
      .string()
      .min(6, "Bio is too short! Min 6 character long.")
      .max(25, "Bio is too long! Max 25 character long.")
      .required("Bio is required."),
    password: yup
      .string()
      .min(6, "Password is too short! Min 6 character long.")
      .max(20, "Password is too long! Max 20 character long.")
      .required("Password is required."),
  });

  const classes = useStyles();
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h3' variant='h4'>
          Sign up
        </Typography>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            bio: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            //   Add data to your database
            console.log(values);
          }}>
          {({ errors, handleChange, touched }) => (
            <Form className={classes.form}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    error={errors.firstName && touched.firstName}
                    autoComplete='fname'
                    name='firstName'
                    variant='outlined'
                    fullWidth
                    onChange={handleChange}
                    id='firstName'
                    label='First Name'
                    autoFocus
                    helperText={
                      errors.firstName && touched.firstName
                        ? errors.firstName
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    error={errors.lastName && touched.lastName}
                    autoComplete='lname'
                    name='lastName'
                    variant='outlined'
                    fullWidth
                    onChange={handleChange}
                    id='lastName'
                    label='Last Name'
                    autoFocus
                    helperText={
                      errors.lastName && touched.lastName
                        ? errors.lastName
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={errors.bio && touched.bio}
                    autoComplete='bio'
                    name='bio'
                    variant='outlined'
                    fullWidth
                    onChange={handleChange}
                    id='bio'
                    label='Bio'
                    autoFocus
                    helperText={errors.bio && touched.bio ? errors.bio : null}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={errors.email && touched.email}
                    autoComplete='email'
                    name='email'
                    variant='outlined'
                    fullWidth
                    onChange={handleChange}
                    id='email'
                    label='Email Address'
                    autoFocus
                    helperText={
                      errors.email && touched.email ? errors.email : null
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error={errors.password && touched.password}
                    autoComplete='current-password'
                    name='password'
                    variant='outlined'
                    fullWidth
                    onChange={handleChange}
                    id='password'
                    label='Password'
                    type='password'
                    autoFocus
                    helperText={
                      errors.password && touched.password
                        ? errors.password
                        : null
                    }
                  />
                </Grid>
              </Grid>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}>
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
};

export default SignUp;
