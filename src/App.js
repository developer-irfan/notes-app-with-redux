import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Main from "./Main";
import AllNotes from "./components/AllNotes/AllNotes";

//funciton
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/notes" element={<AllNotes />} />
      </Routes>
    </div>
  );
}

export default App;
