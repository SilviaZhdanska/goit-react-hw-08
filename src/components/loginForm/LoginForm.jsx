import React from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register, login } from "../../redux/auth/operations";
import { toast } from "react-hot-toast";

const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { resetForm }) => {
        dispatch(login(values));
        toast.success("Login successful!");
        resetForm();
      }}
    >
      <Form>
        <Field name="email" placeholder="Email" type="email" required />
        <Field
          name="password"
          placeholder="Password"
          type="password"
          required
        />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
