import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input, { FormikInput } from "./Input";
import Button from "./Button";
import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdShoppingCartCheckout } from "react-icons/md";

function Signup() {
    const schema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email")
        .required("Email is required"),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm Password is required"),
    });

  function handleSignup(values) {
    console.log("Sign Up:", values);
  }

  return (
    <div className="w-full max-w-sm mx-auto bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-center text-2xl font-bold mb-4 text-blue-600">
        Sign Up To Cartzy
      </h2>
      <div className="flex justify-center">
        <MdShoppingCartCheckout className="w-16 h-16 text-black mb-6" />
      </div>
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        validationSchema={schema}
        onSubmit={handleSignup}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="space-y-4">
            <FormikInput
                Icon={CiUser}
                label="Email"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
            />

            <FormikInput
                Icon={RiLockPasswordLine}
                label="Password"
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
            />

            <FormikInput
                Icon={RiLockPasswordLine}
                label="Confirm Password"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
            />

            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>

      <p className="text-center mt-4">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 font-bold hover:underline">
          Login
        </Link>
      </p>
      <Link
        to="/"
        className="text-gray-600 font-bold underline flex justify-center"
      >
        Back Home
      </Link>
    </div>
  );
}

export default Signup;
