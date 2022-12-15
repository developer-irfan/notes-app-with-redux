import React from "react";

function ErrorModel(props) {
  return (
    <div>
      <div className="w-[400px] shadow-2xl border-2 mx-auto">
        <div className="bg-purple-700  border-gray-100 ">
          <h1 className="text-white py-3 px-5 font-semibold">{props.title}</h1>
        </div>
        <div className="bg-white py-[50px] px-5">
          <p>{props.msg}</p>
        </div>
        <button
          onClick={props.onConfirm}
          className="bg-indigo-800 text-white mx-[30px] py-1 px-5 my-5"
        >
          {props.btnText}
        </button>
      </div>
    </div>
  );
}

export default ErrorModel;
