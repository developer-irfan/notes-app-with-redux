import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../action/action";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  //dispatch
  const dispatch = useDispatch();

  //navigate to main
  const navigate = useNavigate();

  //nameinputref
  const enteredEmail = useRef();
  const enteredPassword = useRef();

  //state for empty note
  const [isValid, setIsValid] = useState(false);

  //handlesubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = enteredEmail.current.value;
    const password = enteredPassword.current.value;

    //validation
    if (email.trim("").length === 0 && password.trim("").length === 0) {
      setIsValid(true);
      return;
    }

    const getUser = JSON.parse(localStorage.getItem("user"));
    const userDBEmail = getUser.email;
    const userDBPassword = getUser.password;

    if (email === userDBEmail && password === userDBPassword) {
      dispatch(userLogin());
      navigate("/addnotes");
    } else {
      alert("Please enter correct data👽");
    }
    console.log(getUser);

    setIsValid(false);
    enteredEmail.current.value = "";
    enteredPassword.current.value = "";
  };

  //return statement
  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-2">
          <label htmlFor="email" className="text-gray-600 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            ref={enteredEmail}
            name="note"
            id="email"
            autoComplete="username"
            className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
          />
          {isValid && <p className="text-red-800 pt-3">Please Enter Email</p>}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="text-gray-600 dark:text-gray-300"
          >
            Password
          </label>
          <input
            type="password"
            ref={enteredPassword}
            name="password"
            id="note"
            autoComplete="username"
            className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
          />
          {isValid && (
            <p className="text-red-800 pt-3">Please Enter Password</p>
          )}
        </div>

        <button
          type="submit"
          className="relative bg-purple-700 flex rounded-md h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary- before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
        >
          <span className="relative text-base font-semibold text-white dark:text-dark">
            Login
          </span>
        </button>
      </form>
    </>
  );
}

export default LoginForm;
