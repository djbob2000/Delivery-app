import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box } from "@mui/material";

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
    <Box sx={{ maxWidth: "350px", mt: "1rem" }}>
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
        <Form autoComplete="off" id="formOrder">
          <Field
            name="name"
            type="text"
            as={TextField}
            label="Name"
            variant="outlined"
            fullWidth
            style={{ marginBottom: "1rem" }}
          />
          <ErrorMessage name="name" component={Box} sx={{ color: "red" }} />

          <Field
            name="email"
            type="email"
            as={TextField}
            label="Email"
            variant="outlined"
            fullWidth
            style={{ marginBottom: "1rem" }}
          />
          <ErrorMessage name="email" component={Box} sx={{ color: "red" }} />

          <Field
            name="phone"
            type="number"
            as={TextField}
            label="Phone"
            variant="outlined"
            fullWidth
            style={{ marginBottom: "1rem" }}
          />
          <ErrorMessage name="phone" component={Box} sx={{ color: "red" }} />

          <Field
            name="address"
            type="text"
            as={TextField}
            label="Address"
            variant="outlined"
            fullWidth
            style={{ marginBottom: "1rem" }}
          />
          <ErrorMessage name="address" component={Box} sx={{ color: "red" }} />
        </Form>
      </Formik>
    </Box>
  );
};
