import { Link } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import Footer from "./Footer";

const SigninBtn = () => {
  console.log('Working!');
};

export default function Signin() {
  const { register, formState: { errors } , handleSubmit } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
  <div id="primaryContainer" className="container-fluid formContainer">
    <div
      id=""
      className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
    ></div>
    <div className="SigninForm">
      <form id="SigninForm" onSubmit={handleSubmit(onSubmit)}>
      <span id="welcome2" className="">
        <p
          id="hello"
          className="animate__animated animate__zoomIn animate__delay-2s 	2s"
        >
          Sign-in
        </p>
        </span>

        <input class = "formInput animate__animated animate__slideInLeft animate__delay-2s 	2s"
          placeholder="Username"
          type="string"
          {...register('username', {
            required: 'this is a required',
            maxLength: {
              value: 15,
              message: 'Max length is 15',
            },
            minLength: {
              value: 6,
              message: 'Min length is 6',
            },
          })}
        />
        <br />
        {errors.username && errors.username.message}
        <br />


        <input class = "formInput animate__animated animate__slideInRight animate__delay-2s 	2s"
          placeholder="Password"
          type="password"
          {...register('password', {
            required: 'this is required',
            minLength: {
              value: 8,
              message: 'Min length is 8',
            },
          })}
        />
        <br />
        {errors.password && errors.password.message}
        <br />
        <button
        className="welcomeButtons hvr-grow animate__animated animate__slideInDown animate__delay-2s 	2s"
        name="button"
        id="SigninBtn" type="submit">Sign-in</button>
        <br />
        <br />
        <p className="accountLinksText animate__animated animate__zoomIn animate__delay-2s 	2s">
          Don't Have An Account?{" "}
          <Link className="accountLinks" to="/Signup">
            Sign Up
          </Link>
          {" "}instead.
        </p>
      </form>
    </div>
    </div>
  );
}
