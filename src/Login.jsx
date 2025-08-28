import React from "react";
import { Formik, Form, withFormik } from "formik";
import * as Yup from "yup";
import { Input } from "./Input"; // using HOC version
import Button from "./Button";
import { ShoppingCart } from "lucide-react"; // icon library (lucide-react)
import { MdShoppingCartCheckout } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import ForgotPassword from "./ForgotPassword";

function Login({handleSubmit,values,errors,touched, handleChange, handleBlur}) {
  function callLoginApi(values) {
    console.log("Login values:", values);
  }

  const schema = Yup.object().shape({
    email: Yup.string().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format") .required("Required"),
    password: Yup.string().min(8, "Min 8 chars").required("Required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
        
          <Form onSubmit={handleSubmit} className="flex flex-col w-96 p-5 rounded-md shadow-md bg-white">
              <h1 className="text-2xl font-bold self-center mb-4">Login to Cartzy</h1>
            <Input
                values={values.email}
                errors={errors.email}
                touched={touched.email}
                onChange={handleChange}
                onBlur={handleBlur}
                Icon={CiUser}
                label="Username/Email-address"
                id="username"
                type="email"
                name="email"
                required
                placeholder="USERNAME"
                className="mb-2 text-white placeholder-white border border-white bg-transparent"
            />

            <Input
                values={values.password}
                errors={errors.password}
                touched={touched.password}
                onChange={handleChange}
                onBlur={handleBlur}
                Icon={RiLockPasswordLine}
                label="Password"
                id="password"
                type="password"
                name="password"
                required
                placeholder="PASSWORD"
                className="mb-2 text-blue-600 placeholder-white border border-white bg-transparent"
            />

            <Button
              type="submit"
              className="w-full bg-white text-blue-600 hover:bg-gray-200"
            >
              LOGIN
            </Button>
          </Form>
    </div>
  );
}
const myHOC= withFormik({validationSchema:schema,initialValues: initialValues,onSubmit: callLoginApi})
const ImprovedLogin=myHOC(Login);
export default ImprovedLogin;

