import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import errorImg from "../assets/images/icon-error.svg";

// import css
import "./SignUp.css";

const initialValues = {
  firstName: "",
  lastName: "",
  emailAddress: "",
  password: "",
};

const onSubmit = (values, submitProps) => {
  console.log(values);
  submitProps.resetForm();
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name cannot be empty"),
  lastName: Yup.string().required("Last Name cannot be empty"),
  emailAddress: Yup.string()
    .email("Looks like this is not an email")
    .required("Email cannot be empty"),
  password: Yup.string().required("Password cannot be empty"),
});

const SignUp = () => {
  return (
    <div className="form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-control">
            <Field name="firstName">
              {(props) => {
                const { field, form, meta } = props;

                return (
                  <div>
                    <div
                      className={
                        meta.touched && meta.error
                          ? "input error-input"
                          : "input"
                      }
                    >
                      <input
                        placeholder="First Name"
                        type="text"
                        id="firstName"
                        autoComplete="off"
                        {...field}
                      />
                      {meta.touched && meta.error ? (
                        <img src={errorImg} alt="error" />
                      ) : null}
                    </div>
                    {meta.touched && meta.error ? (
                      <div className="error">{meta.error}</div>
                    ) : null}
                  </div>
                );
              }}
            </Field>
          </div>
          <div className="form-control">
            <Field name="lastName">
              {(props) => {
                const { field, meta } = props;
                return (
                  <div>
                    <div
                      className={
                        meta.touched && meta.error
                          ? "input error-input"
                          : "input"
                      }
                    >
                      <input
                        placeholder="Last Name"
                        type="text"
                        id="lastName"
                        autoComplete="off"
                        {...field}
                      />
                      {meta.touched && meta.error ? (
                        <img src={errorImg} alt="error" />
                      ) : null}
                    </div>
                    {meta.touched && meta.error ? (
                      <div className="error">{meta.error}</div>
                    ) : null}
                  </div>
                );
              }}
            </Field>
          </div>
          <div className="form-control">
            <Field name="emailAddress">
              {(props) => {
                const { field, form, meta } = props;

                return (
                  <div>
                    <div
                      className={
                        meta.touched && meta.error
                          ? "input error-input"
                          : "input"
                      }
                    >
                      <input
                        placeholder="Email Address"
                        type="text"
                        id="emailAddress"
                        autoComplete="off"
                        {...field}
                      />
                      {meta.touched && meta.error ? (
                        <img src={errorImg} alt="error" />
                      ) : null}
                    </div>
                    {meta.touched && meta.error ? (
                      <div className="error">{meta.error}</div>
                    ) : null}
                  </div>
                );
              }}
            </Field>
          </div>
          <div className="form-control">
            <Field name="password">
              {(props) => {
                const { field, form, meta } = props;

                return (
                  <div>
                    <div
                      className={
                        meta.touched && meta.error
                          ? "input error-input"
                          : "input"
                      }
                    >
                      <input
                        placeholder="Password"
                        type="password"
                        id="password"
                        {...field}
                      />
                      {meta.touched && meta.error ? (
                        <img src={errorImg} alt="error" />
                      ) : null}
                    </div>
                    {meta.touched && meta.error ? (
                      <div className="error">{meta.error}</div>
                    ) : null}
                  </div>
                );
              }}
            </Field>
          </div>
          <button type="submit" className="submitButton">
            CLAIM YOUR FREE TRIAL
          </button>
          <p className="smallText">
            By clicking the button, you are agreeing to our
            <span> Terms and Services</span>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUp;
