import UserCard from "../components/Users/UserCard";
import { useEffect, useState } from "react";
import { User } from "../typings";

export default function LandingPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://panorbit.in/api/users.json");
      const data = await response.json();
      console.log(data);
      setUsers(data.users);
    };
    fetchUsers();
  }, []);

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
