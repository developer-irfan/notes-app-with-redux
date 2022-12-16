import React from "react";
import { useDispatch } from "react-redux";
import { delete_note } from "../action/action";

function NoteItem(props) {
  //dispatch
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(delete_note(props.item.id));
  };

  //return
  return (
    <div className="bg-purple-700 my-3 py-3 flex items-center justify-between">
      <div>
        <h1 className="text-white pl-10">Title: {props.item.note}</h1>
        <p className="text-white pl-10 pt-1">
          Description: {props.item.noteDescription}
        </p>
      </div>
      <div className="px-10">
        <svg
          onClick={deleteItem}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white hover:text-red-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </div>
  );
}

export default NoteItem;
