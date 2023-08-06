import { useDispatch, useSelector } from "react-redux";
import ChatBox from "../components/Dashboard/ChatBox";
import ChatSelector from "../components/Dashboard/ChatSelector";
import { User } from "../typings";
import { RootState } from "../app/store";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { addUsers, setIsDropdownOpen } from "../app/features/userSlice";
import ProfileScreen from "../components/Screens/ProfileScreen";
import PostScreen from "../components/Screens/PostScreen";
import GalleryScreen from "../components/Screens/GalleryScreen";
import TodoScreen from "../components/Screens/TodoScreen";
import ProfileDropdown from "../components/Dashboard/ProfileDropdown";

export default function UserPage() {
  const { id, page } = useParams();
  const linkStyle =
    "text-white border-b cursor-pointer border-white py-4 w-full relative";

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

  const isChatOpen = useSelector(
    (state: RootState) => state.user?.isChatOpen
  ) as boolean;

  const user = users.filter((user) => user.id === parseInt(id!.toString()))[0];

  const pages: {
    [key: string]: JSX.Element;
  } = {
    profile: (
      <ProfileScreen user={user} />
    ),
    posts: <PostScreen />,
    gallery: <GalleryScreen />,
    todo: <TodoScreen />,
  };

  const navigate = useNavigate();
  const isDropdownOpen = useSelector(
    (state: RootState) => state.user.isDropdownOpen
  ) as boolean;

  return (
    <div className="flex gap-x-5 h-screen overflow-hidden p-10 relative">
      <ChatSelector />
      {isChatOpen && <ChatBox />}
      {
        isDropdownOpen && <ProfileDropdown />
      }
      <div className=" w-[19%] flex flex-col justify-center items-start px-10 bg-gradient-to-r from-indigo-500 to-indigo-700 rounded-3xl relative">
        <p
          onClick={() => navigate(`/user/${id}/profile`)}
          className={
            linkStyle + (page == "profile" ? " opacity-100" : " opacity-50")
          }
        >
          Profile
          {page == "profile" && <SideNotch />}
        </p>
        <p
          onClick={() => navigate(`/user/${id}/posts`)}
          className={
            linkStyle + (page == "posts" ? " opacity-100" : " opacity-50")
          }
        >
          Posts
          {page == "posts" && <SideNotch />}
        </p>
        <p
          onClick={() => navigate(`/user/${id}/gallery`)}
          className={
            linkStyle + (page == "gallery" ? " opacity-100" : " opacity-50")
          }
        >
          Gallery
          {page == "gallery" && <SideNotch />}
        </p>
        <p
          onClick={() => navigate(`/user/${id}/todo`)}
          className={
            "text-white py-3 cursor-pointer w-full relative" +
            (page == "todo" ? " opacity-100" : " opacity-50")
          }
        >
          ToDo
          {page == "todo" && <SideNotch />}
        </p>
      </div>
      {/* <ProfileScreen user={user} /> */}
      <div className=" w-4/5 col-span-10 p-5 overflow-y-scroll">
        <div className="flex justify-between pb-5 border-b border-gray-300">
          <h1 className="text-xl font-medium text-text-primary">Profile</h1>
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => dispatch(setIsDropdownOpen(true))}>
            <div className="w-8 h-8 rounded-full bg-gray-300">
              <img
                src={user?.profilepicture}
                alt={"Profile Picture of " + user?.name}
                className="w-full h-full rounded-full"
              />
            </div>
            <h1 className="text-text-primary ">{user?.name}</h1>
          </div>
        </div>
        {pages[page!.toString()]}
      </div>
      
    </div>
  );
}

const SideNotch = () => {
  return (
    <div className="absolute -right-[2.5rem] w-5 h-14 bg-indigo-700 top-0">
      <div className=" rounded-br-full w-5 h-4 z-10 bg-indigo-700"></div>
      <div className="rounded-full relative overflow-visible rounded-r-none w-5 h-6 flex items-center pl-1 bg-white">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          height="1em"
          width="1em"
          className=" text-text-primary"
        >
          <path d="M10.061 19.061L17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z" />
        </svg>
        {/* <div className=" absolute right-0 h-10 bg-white w-2 z-0"></div> */}
      </div>
      <div className=" rounded-tr-full w-5 h-4 z-10 bg-indigo-700"></div>
    </div>
  );
};
