import UserCard from "../components/Users/UserCard";
import { useEffect } from "react";
import { User } from "../typings";
import { useDispatch, useSelector } from "react-redux";
import { addUsers } from "../app/features/userSlice";
import { RootState } from "../app/store";

export default function LandingPage() {
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
    <div className="w-screen h-screen overflow-y-scroll bg-green-300 flex items-center justify-center relative">
      <div className="w-[40vw] h-[65vh] rounded-3xl bg-white overflow-clip shadow-2xl">
        <div className="bg-gray-100 flex justify-center items-center h-[20%]">
          <h1 className="text-xl font-medium text-text-primary text-center">
            Select an account
          </h1>
        </div>
        <div className="overflow-y-scroll px-10 h-[80%]">
          {users.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              image={user.profilepicture}
              id={user.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
