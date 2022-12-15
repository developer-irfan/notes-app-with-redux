import { useEffect, useState } from "react";
import NewNotes from "./components/NewNote/NewNotes";

function Main() {
  const [allNotes, setAllNotes] = useState([]);

  //storing our all notes to localstorage

  const handleNewNote = (note) => {
    allNotes.push(note);
    localStorage.setItem("notes", JSON.stringify(allNotes));
  };

  //return statement
  return (
    <div className="bg-white dark:bg-darker">
      <NewNotes newNote={handleNewNote} />
    </div>
  );
}

export default Main;
