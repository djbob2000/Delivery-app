import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  address: Yup.string().required("Address is required"),
});

const handleSubmit = (values) => {
  // Handle form submission logic
  console.log(values);
};

export const OrderForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        address: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <Field
          name="name"
          type="text"
          as={TextField}
          label="Name"
          variant="outlined"
          fullWidth
        />
        <ErrorMessage name="name" component="div" />

        <Field
          name="email"
          type="email"
          as={TextField}
          label="Email"
          variant="outlined"
          fullWidth
        />
        <ErrorMessage name="email" component="div" />

        <Field
          name="phone"
          type="number"
          as={TextField}
          label="Phone"
          variant="outlined"
          fullWidth
        />
        <ErrorMessage name="phone" component="div" />

        <Field
          name="address"
          type="text"
          as={TextField}
          label="Address"
          variant="outlined"
          fullWidth
        />
        <ErrorMessage name="address" component="div" />

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Form>
    </Formik>
  );
};
