import { useDispatch } from "react-redux";
import { User } from "../../typings";
import { setChatUser, setIsChatOpen } from "../../app/features/userSlice";

interface OnlineUserProps {
  user: User;
}

// when this is clicked, it should activate chatbox and put select current user as the selected user
export default function OnlineUsers({ user }: OnlineUserProps) {
  const dispatch = useDispatch();
  const chatWithThisUser = () => {
    dispatch(setChatUser(user))
    dispatch(setIsChatOpen(true))
  }
  return (
    <div className="flex justify-between items-center cursor-pointer" onClick={chatWithThisUser}>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gray-300">
          <img
            src={user.profilepicture}
            alt={"Profile Picture of " + user.name}
            className="w-full h-full rounded-full"
          />
        </div>
        <h1 className="text-text-primary text-sm ">{user.name}</h1>
      </div>
      <div className="rounded-full w-2 h-2 bg-green-500"></div>
    </div>
  );
}
