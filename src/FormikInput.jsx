// import { useField } from 'formik';
// import React from 'react';
// import Input from './Input';

// function FormikInput({name,...rest}){

//     const field=useField(name);
//     const [data, meta]=field;
//     const {value,onBlur,onChange}=data;
//     const {error,touched}=meta;

//     let borderClass="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500";
//     if(error && touched){
//         borderClass="border-red-500 focus:border-red-500 focus:ring-red-500";
//     }
//     return(
//         <Input 
//             value={value} 
//             onBlur={onBlur} 
//             onChange={onChange} 
//             error={error} 
//             touched={touched} 
//             name={name} 
//             className="w-full"
//             {...rest}>
//         </Input>
//     )
// }
// export default FormikInput;


// import React, { useState } from "react";
// import Button from "./Button";
// import { Formik, useFormik,Form } from "formik";
// import * as Yup from "yup";
// import { FormikInput } from "./Input";

// function Login(){
    
//     function callLoginApi(values){
//         console.log(values.email , values.password)
//     }

//     const schema=Yup.object().shape({
//         email : Yup.string().email().required(),
//         password : Yup.string().min(8).required(),
//     })

//     const initialValues={
//         email:"",
//         password:"", 
//     }

//     return(
        
//         <div className="flex items-center justify-center w-full h-screen bg-gray-100">
//             <Formik initialValues={initialValues} onSubmit={callLoginApi} validationSchema={schema} validateOnMount>
//                 <Form  className="flex flex-col w-96 p-5 rounded-md shadow-md bg-white">
                    
//                     <h1 className="text-2xl font-bold self-center mb-4">
//                         Login to CartZy
//                     </h1>

//                     <FormikInput 
//                     label="Email address" 
//                     id="email-addresss" 
//                     type="email" 
//                     autoComplete="email"
//                     name="email" 
//                     required 
//                     placeholder="Email address"
//                     className="rounded-b-none">
//                     </FormikInput>

//                     <FormikInput 
//                     label="Password" 
//                     id="password"  
//                     type="password" 
//                     autoComplete="current-password"
//                     name="password" 
//                     required 
//                     placeholder="Password"
//                     className="rounded-t-none">
//                     </FormikInput>

//                     <div className="flex self-end gap-2">
//                         {/* <Button type="button" onClick={resetForm} className="w-24">Reset</Button> */}
//                         <Button type="submit"  className="w-24">Login</Button> 
//                         {/* disabled={!isValid} */}
//                     </div>

//                 </Form>
//             </Formik>
//         </div>
//     )
// }

// export default Login;

// import React, { useEffect, useState } from "react";
// import { GetProductData } from "./api";

// function CartPage({ cart }) {
//   const [products, setProducts] = useState([]);
//   const productIds = Object.keys(cart);

//   useEffect(() => {
//     if (productIds.length === 0) {
//       setProducts([]);
//       return;
//     }

//     Promise.all(
//       productIds.map((id) =>
//         GetProductData(id).then((product) => ({
//           ...product,
//           qty: cart[id],
//         }))
//       )
//     )
//       .then((results) => {
//         setProducts(results);
//       })
//       .catch((err) => console.error("Error fetching cart products:", err));
//   }, [productIds, cart]);

//   return (
//     <div>
//       {products.map((p) => (
//         <div key={p.id}>
//           {p.title} — <b>Qty:</b> {p.qty}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default CartPage;


// import React, { use, useEffect, useState } from "react";
// import { GetProductData } from "./api";
// import { ImCross } from "react-icons/im";
// import Loading from "./Loading";
// import { HiArrowNarrowLeft } from "react-icons/hi";
// import { Link } from "react-router";

// function CartPage({ cart ,updateCart}) {
//     const [loading, setLoading] = useState(true);
//     const [products, setProducts] = useState([]);
//     const [localCart, setLocalCart] = useState(cart || {});
//     const cartObj=cart || {};
//     const productIds = Object.keys(cartObj);
//     console.log("Product IDs in Cart:",cart, productIds);

//     useEffect(() => {
//         setLocalCart(cart);
//     }, [cart]);

//     useEffect(() => {
//         setLoading(true);
//         const myProductPromises = productIds.map(function(id){
//             return GetProductData(id);
//         });
//         Promise.all(myProductPromises).then(function(products){
//             setProducts(products);
//             setLoading(false);
//         })
//      },[cart])
//      function handleRemove(productId) {
//         console.log("Removing product with ID:", productId);
//         const newCart = { ...cart };
//         delete newCart[productId];
//         updateCart(newCart);
//      }

//      function handleCart(){
//         updateCart(localCart);
//      }

//      function handleChange(newValue, productId) {
//         console.log("Updating product with ID:", productId, "to new value:", newValue);
//         const newLocalCart = { ...localCart, [productId]: parseInt(newValue) || 0 };
//         setLocalCart(newLocalCart);
//      }

//      if (loading) {
//         return <Loading></Loading>;
//      }

//     return (
//         <> 
//         <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-black transition px-6 py-4 w-fit">
//             <HiArrowNarrowLeft className="text-2xl" />
//             <span className="text-lg font-medium">Back</span>
//         </Link>
    
//         {products.map(function(p){
            
//             return (
//             <div key={p.id}>
//                         {p.title}{" "} 
//                             <input 
//                                 type="number" 
//                                 className="w-10 border-2 rounded-md border-white mx-2 m-2" 
//                                 value={localCart[p.id]}
//                                 onChange={function (event){
//                                             handleChange(+event.target.value, p.id);
//                                         }}>
//                             </input>
//                             <button onClick={function(){
//                                 handleRemove(p.id);    
//                             }} productid={p.id}><ImCross className="text-sm text-red-500"/></button>
//                     </div>
//                 )})}
//                 <button className="bg-indigo-500 rounded-md m-2 p-2" onClick={handleCart}>Update Cart</button>
//         </>)
// }
// export default CartPage;    