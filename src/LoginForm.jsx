import { Link, Navigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import Input, { FormikInput } from "./Input";
import Button from "./Button";
import { MdShoppingCartCheckout } from "react-icons/md";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "./App";

function Login() {
  const {user,setUser}=useContext(UserContext);
  if(user){
    return <Navigate to="/dashboard"/>
  }

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email (must include @ and .)")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email must contain a dot")
      .required("Required"),
    password: Yup.string().min(6, "Min 6 chars").required("Required"),
  });

  function handleLogin(values) {
    axios.post("https://myeasykart.codeyogi.io/login",
      {email: values.email, password: values.password}).then((response) => {
        const {user,token}= response.data;
        localStorage.setItem("token", token); 
        setUser(user);
    }).catch(() => {
        console.log("Invalid credentials")});
    }

  return (
    <div className="w-full max-w-sm mx-auto bg-white p-6 rounded-2xl shadow-md m-2">
      <h2 className="text-center text-2xl font-bold mb-4 text-blue-600">
        Login To Cartzy
      </h2>
      <div className="flex justify-center">
        <MdShoppingCartCheckout className="w-16 h-16 text-black mb-6" />
      </div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={schema}
        onSubmit={handleLogin}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="space-y-4">
            <FormikInput
              label="Email"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              Icon={CiUser}
            />

            <FormikInput
              label="Password"
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              Icon={RiLockPasswordLine}
            />

            <Link
              to="/forgot-password"
              className="w-full block text-right text-sm text-blue-600 cursor-pointer hover:underline"
            >
              Forgot Password?
            </Link>

            <Button type="submit" className="w-full">
              Login
            </Button>

            <p className="text-center mt-4">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-600 font-bold underline">
                Sign Up
              </Link>
            </p>
            <div className="flex justify-center">
            <Link
              to="/"
              className="text-gray-600 font-bold hover:underline"
            >
              Back Home
            </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
