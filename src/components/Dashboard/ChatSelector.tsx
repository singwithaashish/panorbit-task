import { useState } from "react";
import { User } from "../../typings";
import OnlineUsers from "../Users/OnlineUsers";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export default function ChatSelector() {
    const [toggleChat, setToggleChat] = useState(false);
  // const users = [
  //   {
  //     id: 1,
  //     name: "Leanne Graham",
  //     username: "Bret",
  //     email: "Sincere@april.biz",
  //     profilepicture:
  //       "https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg",
  //     address: {
  //       street: "Kulas Light",
  //       suite: "Apt. 556",
  //       city: "Gwenborough",
  //       zipcode: "92998-3874",
  //       geo: {
  //         lat: "-37.3159",
  //         lng: "81.1496",
  //       },
  //     },
  //     phone: "1-770-736-8031 x56442",
  //     website: "hildegard.org",
  //     company: {
  //       name: "Romaguera-Crona",
  //       catchPhrase: "Multi-layered client-server neural-net",
  //       bs: "harness real-time e-markets",
  //     },
  //   },
  // ] as User[];
  const users = useSelector((state: RootState) => state.user.allUsers) as User[]
  return (
    <div className={" w-60 rounded-t-lg h-96 bg-white absolute right-0 bottom-0 overflow-clip -translate-x-16 duration-300" + (toggleChat ? "  translate-y-[21rem]" : " translate-y-0")}>
      <div className="flex justify-between items-center cursor-pointer bg-blue-500 text-white p-3" onClick={() => setToggleChat(!toggleChat)}>
        <div className="flex items-center gap-2">
          <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            className=" font-bold"
            height="1em"
            width="1em"
          >
            <path d="M2 1a1 1 0 00-1 1v8a1 1 0 001 1h9.586a2 2 0 011.414.586l2 2V2a1 1 0 00-1-1H2zm12-1a2 2 0 012 2v12.793a.5.5 0 01-.854.353l-2.853-2.853a1 1 0 00-.707-.293H2a2 2 0 01-2-2V2a2 2 0 012-2h12z" />
          </svg>
          <h1 className=" text-lg">Chats</h1>
        </div>
        <svg
          viewBox="0 0 580 1000"
          fill="currentColor"
          height="1em"
          width="1em"
          className={
            "transform duration-300" + (toggleChat ? " rotate-180" : "")
          }
        >
          <path d="M564 428L330 652c-12 12-25.333 18-40 18-14.667 0-28-6-40-18L16 428C5.333 417.333 0 403.667 0 387s5.333-30.333 16-41c25.333-25.333 51.333-25.333 78 0l196 188 196-188c26.667-25.333 52.667-25.333 78 0 10.667 10.667 16 24.333 16 41s-5.333 30.333-16 41" />
        </svg>
      </div>
      <div className="flex h-[85%] flex-col gap-y-2 px-4 py-2 overflow-y-scroll">
        {
          users.map(user => <OnlineUsers user={user} key={user.id} />)
        }
      </div>
    </div>
  );
}
