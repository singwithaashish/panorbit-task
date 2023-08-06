import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UserPage from "./pages/UserPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUsers } from "./app/features/userSlice";
import { RootState } from "./app/store";
import { User } from "./typings";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.user.allUsers) as User[];

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://panorbit.in/api/users.json");
      const data = await response.json();
      dispatch(addUsers(data.users as User[]));
    };
    if (users.length < 1) fetchUsers();
  }, [users]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <LandingPage />
        } />
        <Route path="/user/:id/:page" element={
          <UserPage />
        } />
      </Routes>
    </Router>
  );
}

export default App;
