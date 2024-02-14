import {
  Box,
  Button,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import { LoginSchema } from "../../validation/schema";
import AuthSagaActions from "../../redux/authsaga/action";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const { loginSaga } = AuthSagaActions;

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitForm = (values) => {
    dispatch(loginSaga(values, navigate));
  };
  return (
    <>
      <Box className="admin-login-main-flex">
        <Box className="admin-login-right-main">
          <Box className="admin-login-box">
            <Box className="admin-login-main">
              <Formik
                validationSchema={LoginSchema}
                initialValues={{
                  email: "",
                  password: "",
                }}
                onSubmit={submitForm}
              >
                {({
                  values,
                  errors,
                  handleChange,
                  handleSubmit,
                  touched,
                  handleBlur,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <Box className="admin-login-inner">
                      <Typography
                        component="h2"
                        variant="h2"
                        className="admin-wel-text"
                      >
                        Login!
                      </Typography>
                      <Typography
                        component="p"
                        variant="p"
                        className="admin-sign-para common-para"
                      >
                        Please enter your credentials to sign in!
                      </Typography>
                      <Box className="input-box">
                        <FormHelperText className="form-lable">
                          Email
                        </FormHelperText>
                        <Box className="form-group">
                          <TextField
                            placeholder="Enter the email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.email && errors.email}
                            error={Boolean(errors.email && touched.email)}
                            fullWidth
                            name="email"
                            id="fullWidth"
                            className="form-control"
                            type="text"
                            autocomplete="off"
                          />
                        </Box>
                      </Box>
                      <Box className="input-box">
                        <FormHelperText className="form-lable">
                          Password
                        </FormHelperText>
                        <Box className="form-group">
                          <TextField
                            placeholder="Enter the password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={touched.password && errors.password}
                            error={Boolean(errors.password && touched.password)}
                            fullWidth
                            name="password"
                            id="fullWidth"
                            className="form-control"
                            type="password"
                            autocomplete="off"
                          />
                        </Box>
                      </Box>

                      <Box className="btn-main-primary login-btn-main">
                        <Button type="submit" className="btn-primary login-btn">
                          Sign In
                        </Button>
                      </Box>
                      <Link to='/register'>Register</Link>
                    </Box>
                  </form>
                )}
              </Formik>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Login;
