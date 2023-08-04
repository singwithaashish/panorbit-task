import React from "react";

export default function UserCard() {
  return (
    <div className="flex gap-x-3 items-center py-3 border-b">
      <div className="w-8 h-8 rounded-full bg-gray-300">
        <img
          src="https://picsum.photos/200"
          alt="profile"
          className="w-full h-full rounded-full"
        />
      </div>
      <h1 className="text-text-primary ">John Doe</h1>
    </div>
  );
}
