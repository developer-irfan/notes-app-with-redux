import React, { useState, useRef } from "react";
import { add_note } from "../action/action";
import { useDispatch } from "react-redux";

function NewNoteForm(props) {
  //dispatch
  const dispatch = useDispatch();

  //nameinputref
  const enteredNoteRef = useRef();
  const enteredNoteDesRef = useRef();

  //state for empty note
  const [isValid, setIsValid] = useState(false);

  //handlesubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    const note = enteredNoteRef.current.value;
    const noteDescriptioin = enteredNoteDesRef.current.value;

    //validation
    if (note.trim("").length === 0) {
      setIsValid(true);
      return;
    }
    dispatch(add_note(note, noteDescriptioin));
    setIsValid(false);
    enteredNoteRef.current.value = "";
    enteredNoteDesRef.current.value = "";
  };

  //return statement
  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-2">
          <label htmlFor="note" className="text-gray-600 dark:text-gray-300">
            Title
          </label>
          <input
            type="text"
            ref={enteredNoteRef}
            name="note"
            id="note"
            autoComplete="username"
            className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
          />
          {isValid && <p className="text-red-800 pt-3">Please Enter note📃</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="notedes" className="text-gray-600 dark:text-gray-300">
            Note Description
          </label>
          <textarea
            type="text"
            ref={enteredNoteDesRef}
            name="note"
            autoComplete="username"
            className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
          />
          {isValid && <p className="text-red-800 pt-3">Please Enter note📃</p>}
        </div>

        <button
          type="submit"
          className="relative bg-purple-700 flex rounded-md h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary- before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
        >
          <span className="relative text-base font-semibold text-white dark:text-dark">
            Add Note
          </span>
        </button>
      </form>
    </>
  );
}

export default NewNoteForm;
