import { useNavigate } from "react-router-dom";

export default function Sidebar(
    {id, page}: {id: number, page: string}
) {
    const linkStyle =
    "text-white border-b cursor-pointer border-white py-4 w-full relative";
    const navigate = useNavigate();
  return (
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
  )
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
