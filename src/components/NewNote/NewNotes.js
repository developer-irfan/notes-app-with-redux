import React from "react";
import NewNoteForm from "./NewNoteForm";
import { showAddNotesForm } from "../action/action";
import { useDispatch, useSelector } from "react-redux";

function NewNotes() {
  //
  const hasShow = useSelector((state) => state.showOrHideNewNoteForm);

  //dispatch
  const dispatch = useDispatch();

  //showNoteForm
  const showNoteForm = () => {
    dispatch(showAddNotesForm());
  };

  //return statement
  return (
    <div className="relative pt-[120px] pb-[20px]">
      <div className="container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto space-y-8 md:w-8/12 lg:w-6/12 xl:w-6/12">
          {!hasShow && (
            <button
              onClick={showNoteForm}
              className="relative bg-purple-700 flex rounded-md h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary- before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
            >
              <span className="relative text-base font-semibold text-white dark:text-dark">
                Click To Add Note📃
              </span>
            </button>
          )}

          {hasShow && (
            <div className="rounded-3xl border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 backdrop-blur-2xl">
              <div className="p-8 py-8 sm:p-16">
                <h2 className="mb-8 text-2xl font-bold text-center text-gray-800 dark:text-white">
                  Add Note!
                </h2>
                <NewNoteForm />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewNotes;
