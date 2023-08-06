import { useDispatch, useSelector } from "react-redux";
import ChatBox from "../components/Dashboard/ChatBox";
import ChatSelector from "../components/Dashboard/ChatSelector";
import { User } from "../typings";
import { RootState } from "../app/store";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { addUsers, setIsDropdownOpen } from "../app/features/userSlice";
import ProfileScreen from "../components/Screens/ProfileScreen";
import PostScreen from "../components/Screens/PostScreen";
import GalleryScreen from "../components/Screens/GalleryScreen";
import TodoScreen from "../components/Screens/TodoScreen";
import ProfileDropdown from "../components/Dashboard/ProfileDropdown";
import Sidebar from "../components/Layout/Sidebar";

export default function UserPage() {
  const { id, page } = useParams();

  const [dropdownOpen, setDropdownOpen] = useState<boolean>(true);

  const handleDropdownClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setDropdownOpen(true);
    console.log(dropdownOpen);
  };


  // in case allUsers is empty, fetch users from API
  const dispatch = useDispatch();
  const users = useSelector(
    (state: RootState) => state.user.allUsers
  ) as User[];

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://panorbit.in/api/users.json");
      const data = await response.json();
      dispatch(addUsers(data.users as User[]));
    };
    if (users.length < 1) fetchUsers();
  }, [users]);

  // is the chatbox open?
  const isChatOpen = useSelector(
    (state: RootState) => state.user?.isChatOpen
  ) as boolean;

  // get the user from the store
  const user = users.filter((user) => user.id === parseInt(id!.toString()))[0];

  const pages: {
    [key: string]: JSX.Element;
  } = {
    profile: <ProfileScreen user={user} />,
    posts: <PostScreen />,
    gallery: <GalleryScreen />,
    todo: <TodoScreen />,
  };

  return (
    <div
      className="flex gap-x-5 h-screen overflow-hidden p-10 relative"
      onClick={() => {
        setDropdownOpen(false);
      }}
    >
      <ChatSelector />
      {isChatOpen && <ChatBox />}
      {true && (
        <ProfileDropdown
          setDropdownOpen={setDropdownOpen}
          dropdownOpen={dropdownOpen}
        />
      )}
      <Sidebar id={parseInt(id!)} page={page!} />
      {/* <ProfileScreen user={user} /> */}
      <div className=" w-4/5 col-span-10 p-5 overflow-y-scroll">
        <header className="flex justify-between pb-5 border-b border-gray-300">
          <h1 className="text-xl font-medium text-text-primary">Profile</h1>
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={(e) => {
              handleDropdownClick(e);
            }}
          >
            <div className="w-8 h-8 rounded-full bg-gray-300">
              <img
                src={user?.profilepicture}
                alt={"Profile Picture of " + user?.name}
                className="w-full h-full rounded-full"
              />
            </div>
            <h1 className="text-text-primary ">{user?.name}</h1>
          </div>
        </header>
        {pages[page!.toString()]}
      </div>
    </div>
  );
}
