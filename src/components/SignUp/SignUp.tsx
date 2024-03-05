import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const signUpHandler = () => {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setError("Some input fields are empty");
      setTimeout(() => {
        setError("");
      }, 3000);
    } else if (password !== confirmPassword) {
      setError("Password and confirm password does not match");
      setTimeout(() => {
        setError("");
      }, 3000);
    } else {
      Axios.post("http://localhost:3001/user/signup", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      })
        .then((result) => {
          console.log(result);
          setError("Account Created Successfully");
          setTimeout(() => {
            setError("");
            navigate("/login");
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <div className="w-[100%] h-[150px] bg-white border-b-[2px] dark:border-gray-700">
        <h1 className="text-[40px] font-bold pl-[60px] py-[45px]">
          Cleaning Service LLC
        </h1>
      </div>
      <div className="h-[810px] flex flex-col items-center pt-[50px]">
        <p className="text-[24px] font-medium text-center mb-[50px]">
          Welcome to Cleaning Service LLC
        </p>
        <p className="my-[10px] text-[#ff0000]">{error}</p>
        <div className="flex flex-row mb-[30px]">
          <div className="mr-[10px]">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-[290px] h-[60px]  border-2 dark:border-gray-700 rounded-[15px] pl-[20px] focus:outline-none pl-[15px]"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-[290px] h-[60px]  border-2 dark:border-gray-700 rounded-[15px] pl-[20px] focus:outline-none pl-[15px]"
            />
          </div>
        </div>
        <div className="mb-[30px]">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[590px] h-[60px]  border-2 dark:border-gray-700 rounded-[15px] pl-[20px] focus:outline-none pl-[15px]"
          />
        </div>
        <div className="flex flex-row mb-[30px]">
          <div className="mr-[10px]">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-[290px] h-[60px]  border-2 dark:border-gray-700 rounded-[15px] pl-[20px] focus:outline-none pl-[15px]"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-[290px] h-[60px]  border-2 dark:border-gray-700 rounded-[15px] pl-[20px] focus:outline-none pl-[15px]"
            />
          </div>
        </div>
        <button
          className="w-[300px] h-[60px] bg-black text-white font-bold rounded-[15px] mt-[20px]"
          onClick={signUpHandler}
        >
          Sign Up
        </button>
        <div className="flex flex-row mt-[15px]">
          <p className="text-[#636D84] mr-[5px]">Already have an account?</p>
          <Link to="/login" className="underline">
            LogIn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
