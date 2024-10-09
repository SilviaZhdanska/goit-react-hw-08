import React from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { toast } from "react-hot-toast";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={(values, { resetForm }) => {
        dispatch(register(values));
        toast.success("Registration successful!");
        resetForm();
      }}
    >
      <Form>
        <Field name="name" placeholder="Name" required />
        <Field name="email" placeholder="Email" type="email" required />
        <Field
          name="password"
          placeholder="Password"
          type="password"
          required
        />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
