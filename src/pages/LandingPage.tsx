import UserCard from "../components/Users/UserCard";

export default function LandingPage() {
  return (
    <div className="w-screen h-screen overflow-y-scroll bg-green-300 flex items-center justify-center">
      <div className="w-[40vw] h-[65vh] rounded-3xl bg-white overflow-clip">
        <div className="bg-gray-100 flex justify-center items-center h-[20%]">
          <h1 className="text-xl font-medium text-text-primary text-center">
            Select an account
          </h1>
        </div>
        <div className="overflow-y-scroll px-10 h-[80%]">
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </div>
    </div>
  );
}
