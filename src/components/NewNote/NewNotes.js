import React from "react";
import NewNoteForm from "./NewNoteForm";

function NewNotes() {
  //return statement
  return (
    <div className="relative pt-[120px] pb-[20px]">
      <div className="container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto space-y-8 md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-3xl border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 backdrop-blur-2xl">
            <div className="p-8 py-8 sm:p-16">
              <h2 className="mb-8 text-2xl font-bold text-center text-gray-800 dark:text-white">
                Add Note!
              </h2>
              <NewNoteForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewNotes;
