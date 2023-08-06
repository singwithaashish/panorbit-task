import { useDispatch, useSelector } from "react-redux";
import ChatBox from "../components/Dashboard/ChatBox";
import ChatSelector from "../components/Dashboard/ChatSelector";
import { User } from "../typings";
import { RootState } from "../app/store";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { addUsers } from "../app/features/userSlice";

export default function UserPage() {
  const { id, page } = useParams();
  const linkStyle =
    "text-white opacity-70 border-b border-white py-4 w-full";

    const dispatch = useDispatch();
  // const users = useSelector((state: RootState) => state.user?.allUsers) as User[];

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const response = await fetch("https://panorbit.in/api/users.json");
  //     const data = await response.json();
  //     dispatch(addUsers(data.users as User[]));
  //     console.log(data.users)
  //   };
  //   // if (users.length < 1)
  //    fetchUsers();
  // }, []);
  const alluser = useSelector(
    (state: RootState) => state.user?.allUsers
  ) as User[];
  const user = alluser.filter(user => user.id === parseInt(id!.toString()))[0]

  console.log(id, page, user, alluser)
  return (
    <div className="flex gap-x-5 h-screen overflow-hidden p-10 relative">
      <ChatSelector />
      <ChatBox/>
      <div className=" w-[19%] flex flex-col justify-center items-start px-10 bg-gradient-to-b from-indigo-500 to-indigo-700 rounded-3xl">
        <a href={`/user/${id}/profile`} className={linkStyle + (page == "profile" && " opacity-100")}>
          Profile
        </a>
        <a href={`/user/${id}/posts`} className={linkStyle}>
          Posts
        </a>
        <a href={`/user/${id}/gallery`} className={linkStyle}>
          Gallery
        </a>
        <a href={`/user/${id}/todo`} className="text-white opacity-70 py-3 w-full">
          ToDo
        </a>
      </div>
      <div className=" w-4/5 col-span-10 p-5 overflow-y-scroll">
        <div className="flex justify-between pb-5 border-b border-gray-300">
          <h1 className="text-xl font-medium text-text-primary">Profile</h1>
          <div className="flex items-center gap-3">
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
        <div className="grid grid-cols-5 gap-5 pt-5 w-full h-full ">
          <div className="col-span-2 border-r border-gray-300 flex flex-col items-center">
            <div className=" w-52 h-52 rounded-full bg-gray-300">
              <img
                src={user?.profilepicture}
                alt={"Profile Picture of " + user?.name}
                className="w-full h-full rounded-full"
              />
            </div>
            <h2 className="text-text-primary text-xl font-medium pt-5">
              {user?.name}
            </h2>
            <div className="grid grid-cols-3 gap-3 items-start text-text-primary border-b border-gray-300 py-2">
              <p className="text-right col-span-1">Username :</p>
              <p className="font-bold col-span-2 text-lg">{user?.username}</p>
              <p className="text-right col-span-1">e-mail :</p>
              <p className="font-bold col-span-2 text-lg">{user?.email}</p>
              <p className="text-right col-span-1">Phone :</p>
              <p className="font-bold col-span-2 text-lg">{user?.phone}</p>
              <p className="text-right col-span-1">Website :</p>
              <p className="font-bold col-span-2 text-lg">{user?.website}</p>
            </div>
            <h3 className="text-text-primary text-xl pt-5">Company</h3>
            <div className="grid grid-cols-3 gap-3 items-start text-text-primary py-2">
              <p className="text-right col-span-1">Name :</p>
              <p className="font-bold col-span-2 text-lg">{user?.company.name}</p>
              <p className="text-right col-span-1">catchPhrase :</p>
              <p className="font-bold col-span-2 text-lg">
                {user?.company.catchPhrase}
              </p>
              <p className="text-right col-span-1">bs :</p>
              <p className="font-bold col-span-2 text-lg">{user?.company.bs}</p>
            </div>
          </div>
          <div className="col-span-3">
            <h3 className="text-text-primary text-xl">Address</h3>
            <div className="p-5">
              <div className="grid grid-cols-3 gap-3 w-1/2 items-start text-text-primary py-2">
                <p className="text-right col-span-1">Street :</p>
                <p className="font-bold col-span-2 text-lg">{user?.address.street}</p>
                <p className="text-right col-span-1">Suite :</p>
                <p className="font-bold col-span-2 text-lg">
                  {user?.address.street}
                </p>
                <p className="text-right col-span-1">City :</p>
                <p className="font-bold col-span-2 text-lg">{user?.address.city}</p>
                <p className="text-right col-span-1">Zipcode :</p>
                <p className="font-bold col-span-2 text-lg">{user?.address.zipcode}</p>
              </div>
              <div className="rounded-xl overflow-clip h-80 bg-red-500">
                <iframe
                 className="w-full h-full"
                  // frameborder="0"
                  src={`https://www.bing.com/maps/embed?h=400&w=500&cp=${user?.address.geo.lat}~${user?.address.geo.lng}&lvl=11.58&typ=s&sty=r&src=SHELL&FORM=MBEDV8`}
                  scrolling="no"
                ></iframe>
              </div>
              <div className="flex justify-end gap-x-2">
                <div className="flex items-center">
                  <p className="text-text-primary text-xs">Lat :</p>
                  <p className="font-medium text-sm">{user?.address.geo.lat}</p>
                </div>
                <div className="flex items-center">
                  <p className="text-text-primary text-xs">Long :</p>
                  <p className="font-medium text-sm">{user?.address.geo.lng}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}