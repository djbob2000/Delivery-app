import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCartGoodsByShopId } from "../../redux/selectors";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Box } from "@mui/material";
import { addOrder } from "../../redux/orders/orders.operations";
import { resetCart } from "../../redux/cart/cart.slice";
import { toast } from "react-toastify";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  address: Yup.string().required("Address is required"),
});

export const OrderForm = () => {
  const cartGoodsByShopId = useSelector(selectCartGoodsByShopId);
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const payload = {
      order: [...cartGoodsByShopId],
      name: values.name,
      email: values.email,
      phone: values.phone,
      address: values.address,
    };

    dispatch(addOrder(payload));

    dispatch(resetCart());
    toast.success("Order added successfully");
  };

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
        onSubmit={(values) => handleSubmit(values)}
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
