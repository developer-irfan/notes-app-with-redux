import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Main from "./Main";
import AllNotes from "./components/AllNotes/AllNotes";
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";

//funciton
function App() {
  const hasLogin = useSelector((state) => state.loginReducer);

  const login = (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );

  //login routes
  const loginedUserRoutes = (
    <>
      <Navbar />
      <Routes>
        <Route path="/addnotes" element={<Main />} />
        <Route path="/notes" element={<AllNotes />} />
      </Routes>
    </>
  );

  //return
  return (
    <div>
      {!hasLogin && login}
      {hasLogin && loginedUserRoutes}
    </div>
  );
}

export default App;
