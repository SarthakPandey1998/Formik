import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Signup.css";
import {
  Button,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Switch,
} from "@mui/material";
import Component from "./Component";

const Signup = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [dob, setDob] = useState("");
  // const [email, setEmail] = useState("");//instead of usestate and writing code in input tag in value and onChange we can use formik.

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dob: new Date(),
      email: "",
      gender: "",
      maths: false,
      physics: false,
      biology: false,
      geography: false,
      darkmode: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(10, "Must be 10 characters or less")
        .required("Required"),
      dob: Yup.string().required("DOB is Required"),
      email: Yup.string()
        .email("Must be a valid Email")
        .max(255)
        .required("Required"),
      maths: Yup.boolean(),
      physics: Yup.boolean(),
      biology: Yup.boolean(),
      geography: Yup.boolean(),
      gender: Yup.string().required("Select atleast oneRadio option"),
      darkmode: Yup.boolean(),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const arr = [
    {
      label: "First Name",
      type: "text",
      name: "firstName",
      value: formik.values.firstName,
    },
    {
      label: "Last Name",
      type: "text",
      name: "lastName",
      value: formik.values.lastName,
    },
    {
      label: "DOB",
      type: "date",
      name: "dob",
      value: formik.values.dob,
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      value: formik.values.email,
    },

    {
      label: "Gender",
      type: "radio",
      name: "gender",
      value: formik.values.gender,
      options: ["Male", "Female", "Others"],
    },
  ];
  const arr2 = [
    {
      label: "Maths",
      type: "checkbox",
      name: "maths",
      value: formik.values.maths,
    },
    {
      label: "Physics",
      type: "checkbox",
      name: "physics",
      value: formik.values.physics,
    },
    {
      label: "Biology",
      type: "checkbox",
      name: "biology",
      value: formik.values.biology,
    },
    {
      label: "Geography",
      type: "checkbox",
      name: "geography",
      value: formik.values.geography,
    },
  ];

  const label = ["First Name", "Last Name", "DOB", "Email"];
  // const type = ["text", "date", "email"];
  // const name = ["firstName", "lastName", "dob", "email"];// write these in form of array of objects as done above.
  //We can do this to see all the errors.
  return (
    <form onSubmit={formik.handleSubmit}>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={formik.values.darkmode}
                name="darkmode"
                onChange={formik.handleChange}
                color="secondary"
              />
            }
            label="Dark Mode"
          />
        </FormGroup>
      </div>
      <div style={{ margin: "0 auto", width: "15%" }}>
        {arr.map((item, index) => (
          <Component
            key={index}
            label={item.label}
            type={item.type}
            onChange={formik.handleChange}
            value={item.value}
            onBlur={formik.handleBlur}
            name={item.name}
            formik={formik}
            option={item.options}
          />
        ))}

        <FormLabel>Subject</FormLabel>
        {arr2.map((item, index) => (
          <Component
            key={index}
            label={item.label}
            type={item.type}
            onChange={formik.handleChange}
            value={item.value}
            onBlur={formik.handleBlur}
            name={item.name}
            formik={formik}
            option={item.options}
          />
        ))}

        <div className="button">
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};
export default Signup;
