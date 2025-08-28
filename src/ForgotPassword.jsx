import { FaEnvelope, FaUser, FaLock } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "./Input";
import FormikHOC from "./FormicHOC";

const FormikInput = FormikHOC(Input);

function ForgotPassword() {
  const schema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  function handleReset(values) {
    console.log("Reset link sent to:", values.email);
  }

  return (
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Forgot Password</h2>
        <p className="text-center text-gray-600 mb-6">
          Enter your email and we’ll send you reset instructions.
        </p>

        <Formik
          initialValues={{ email: "" }}
          validationSchema={schema}
          onSubmit={handleReset}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit} className="space-y-4">
              <FormikInput
                label="Email"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                Icon={FaEnvelope}
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Send Reset Link
              </button>
            </Form>
          )}
        </Formik>

        <div className="text-center mt-4">
          <p className="text-sm">
            Remember your password?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Back to Login
            </Link>
          </p>
        </div>
      </div>
  );
}

export default ForgotPassword;