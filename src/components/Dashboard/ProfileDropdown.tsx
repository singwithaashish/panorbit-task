import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { User } from "../../typings";
import { useEffect } from "react";
import { addUsers } from "../../app/features/userSlice";
import { useParams } from "react-router-dom";

export default function ProfileDropdown({
  dropdownOpen,
}: {
  setDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dropdownOpen: boolean;
}) {
  const { id } = useParams();
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
    fetchUsers();
  }, []);

  const user = users.filter((user) => user.id === parseInt(id!.toString()))[0];

//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleOutsideClick = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node) &&
//         dropdownOpen
//       ) {
//         setDropdownOpen(false);
//       }
//     };

//     document.addEventListener("click", handleOutsideClick);

//     return () => {
//       document.removeEventListener("click", handleOutsideClick);
//     };
//   }, [dropdownOpen]);

  //   const user = users.filter((user) => user.id === parseInt(id!.toString()))[0];
  return (
    <div
    //   ref={dropdownRef}
      className={
        " w-72 rounded-3xl h-96 absolute bg-white px-5 shadow-2xl translate-y-24 -translate-x-20 right-0 top-0 overflow-clip flex flex-col items-center justify-center duration-300" +
        (dropdownOpen ? " translate-x-0" : " translate-x-full")
      }
    >
      <div className=" w-24 h-24 rounded-full bg-gray-300">
        <img
          src={user?.profilepicture}
          alt={"Profile Picture of " + user?.name}
          className="w-full h-full rounded-full"
        />
      </div>
      <h2 className="text-text-primary text font-medium pt-5">{user?.name}</h2>
      <h3 className="text-text-primary opacity-70 text-sm mb-3">
        {user?.email}
      </h3>
      <a
        href={`/user/${users[0]?.id}/profile`}
        className="flex gap-x-3 w-full justify-center items-center py-2 border-t cursor-pointer hover:bg-gray-50 duration-100"
      >
        <div className="w-8 h-8 rounded-full bg-gray-300">
          <img
            src={users[0]?.profilepicture}
            alt={"Profile Picture of " + users[0]?.name}
            className="w-full h-full rounded-full"
          />
        </div>
        <h1 className="text-text-primary text-sm ">{users[0]?.name}</h1>
      </a>
      <a
        href={`/user/${users[1]?.id}/profile`}
        className="flex gap-x-3 w-full justify-center items-center py-2 border-t cursor-pointer hover:bg-gray-50 duration-100"
      >
        <div className="w-8 h-8 rounded-full bg-gray-300">
          <img
            src={users[1]?.profilepicture}
            alt={"Profile Picture of " + users[1]?.name}
            className="w-full h-full rounded-full"
          />
        </div>
        <h1 className="text-text-primary text-sm ">{users[1]?.name}</h1>
      </a>
      <a
        className="bg-red-500 rounded-3xl px-5 py-2 text-white font-medium mt-5"
        href="/"
      >
        Sign out
      </a>
    </div>
  );
}
