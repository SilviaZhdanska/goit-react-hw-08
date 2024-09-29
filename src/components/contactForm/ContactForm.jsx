import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addContact } from "../../redux/contacts/operations"; // Імпорт з operations
import styles from "./ContactForm.module.css";

const UserSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  usernumber: Yup.string()
    .min(10, "Too short!")
    .max(13, "Too long!")
    .required("Required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.username,
      number: values.usernumber,
    };

    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ username: "", usernumber: "" }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <div>
          <Field
            className={styles.input}
            type="text"
            name="username"
            placeholder="Name"
          />
          <ErrorMessage name="username" component="div" />
        </div>
        <div>
          <Field
            className={styles.input}
            type="text"
            name="usernumber"
            placeholder="Number"
          />
          <ErrorMessage name="usernumber" component="div" />
        </div>
        <button className={styles.button} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
}
