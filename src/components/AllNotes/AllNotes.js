import React from "react";
import NoteItem from "./NoteItem";
import { useSelector } from "react-redux";

function AllNotes() {
  const list = useSelector((state) => state.noteReducer.list);
  console.log(list);

  //return
  return (
    <div className="py-8 mx-[40px] xl:mx-[350px] pt-[100px] xl:pt-[120px]">
      {list.map((item, index) => (
        <NoteItem item={item} key={index} />
      ))}
    </div>
  );
}

export default AllNotes;
