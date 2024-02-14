import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Please enter your email"),
  password: Yup.string()
    .required("Please enter your password")
    .min(8, "Password must be at least 8 characters")
    .max(16, "Password must be at most 16 characters"),
});

export const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Please enter your email"),
  password: Yup.string()
    .required("Please enter your password")
    .min(8, "Password must be at least 8 characters")
    .max(16, "Password must be at most 16 characters"),
  userName: Yup.string()
    .required("Please enter your userName")
    .min(3, "userName must be at least 8 characters")
    .max(16, "userName must be at most 16 characters"),
});
