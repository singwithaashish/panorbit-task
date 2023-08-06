import React, { useState } from "react";
import { Message, User } from "../../typings";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setIsChatOpen } from "../../app/features/userSlice";

export default function ChatBox() {
  const [toggleChat, setToggleChat] = useState<Boolean>(false);
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.chatUser) as User;
  const close = () => {
    dispatch(setIsChatOpen(false));
    };
  const initialMessages = [
    {
      id: 1,
      message: "Hello, " + user.name,
      timestamp: "2021-08-25T18:30:00.000Z",
      senderId: user.id,
      receiverId: 2,
    },
    {
      id: 2,
      message:
        "Hi, I work at " + user.company.name + " as a " + user.company.bs,
      timestamp: "2021-08-25T18:30:00.000Z",
      senderId: 2,
      receiverId: 1,
    },
    {
      id: 3,
      message: "How are you?",
      timestamp: "2021-08-25T18:30:00.000Z",
      senderId: user.id,
      receiverId: 2,
    },
    {
      id: 4,
      message: "I am fine",
      timestamp: "2021-08-25T18:30:00.000Z",
      senderId: 2,
      receiverId: 1,
    },
  ] as Message[];

  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [message, setMessage] = useState<string>("");

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        message: message,
        timestamp: new Date().toISOString(),
        senderId: user.id,
        receiverId: 2,
      },
    ]);
    setMessage("");
  };

  return (
    <div
      className={
        " w-60 rounded-t-lg h-80 bg-white absolute right-1/2 bottom-0 overflow-clip translate-x-80 duration-300" +
        (toggleChat ? "  translate-y-[17rem]" : " translate-y-0")
      }
    >
      <div className="flex justify-between items-center cursor-pointer bg-blue-500 text-white p-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-300">
            <img
              src={user.profilepicture}
              alt={"Profile Picture of " + user.name}
              className="w-full h-full rounded-full"
            />
          </div>
          <h1 className=" text-white ">{user.name}</h1>
        </div>
        <div className="flex items-center gap-x-2">
          <svg
            viewBox="0 0 580 1000"
            fill="currentColor"
            height="1em"
            width="1em"
            className={
              "transform duration-300 hover:scale-125" +
              (toggleChat ? " rotate-180" : "")
            }
            onClick={() => setToggleChat(!toggleChat)}
          >
            <path d="M564 428L330 652c-12 12-25.333 18-40 18-14.667 0-28-6-40-18L16 428C5.333 417.333 0 403.667 0 387s5.333-30.333 16-41c25.333-25.333 51.333-25.333 78 0l196 188 196-188c26.667-25.333 52.667-25.333 78 0 10.667 10.667 16 24.333 16 41s-5.333 30.333-16 41" />
          </svg>
          <svg
            viewBox="0 0 470 1000"
            fill="currentColor"
            height="1em"
            width="1em"
            className="transform duration-300 hover:scale-125"
            onClick={() => close()}
          >
            <path d="M452 656c12 12 18 26.333 18 43s-6 31-18 43c-12 10.667-26.333 16-43 16s-31-5.333-43-16L234 590 102 742c-12 10.667-26.333 16-43 16s-31-5.333-43-16C5.333 730 0 715.667 0 699s5.333-31 16-43l138-156L16 342C5.333 330 0 315.667 0 299s5.333-31 16-43c12-10.667 26.333-16 43-16s31 5.333 43 16l132 152 132-152c12-10.667 26.333-16 43-16s31 5.333 43 16c12 12 18 26.333 18 43s-6 31-18 43L314 500l138 156" />
          </svg>
        </div>
      </div>
      <div className=" h-full">
        <div className="flex h-[70%] flex-col gap-y-2 px-4 py-2 overflow-y-scroll">
          {messages.map((message) => (
            <div className="flex flex-col">
              <h1
                className={
                  "text-text-primary p-2 rounded-lg text-xs bg-gray-100 " +
                  (message.senderId === user.id
                    ? " ml-auto rounded-br-none"
                    : " mr-auto rounded-tl-none ")
                }
              >
                {message.message}
              </h1>
            </div>
          ))}
        </div>
        <form
          onSubmit={(e) => sendMessage(e)}
          className="flex h-[10%] border-t items-center gap-2"
        >
          <input
            type="text"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message"
            className="w-full focus:border-none border-none p-2 h-8"
          />
          <button type="submit" className=" text-blue-500 rounded-full p-2">
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M476.59 227.05l-.16-.07L49.35 49.84A23.56 23.56 0 0027.14 52 24.65 24.65 0 0016 72.59v113.29a24 24 0 0019.52 23.57l232.93 43.07a4 4 0 010 7.86L35.53 303.45A24 24 0 0016 327v113.31A23.57 23.57 0 0026.59 460a23.94 23.94 0 0013.22 4 24.55 24.55 0 009.52-1.93L476.4 285.94l.19-.09a32 32 0 000-58.8z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
