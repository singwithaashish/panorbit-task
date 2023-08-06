interface UserCardProps {
  name: string;
  image: string;
  id: number;
}

export default function UserCard({ name, image, id }: UserCardProps) {
  return (
    <a href={`/user/${id}/profile`} className="flex gap-x-3 items-center py-3 border-b cursor-pointer hover:bg-gray-50 duration-100">
      <div className="w-8 h-8 rounded-full bg-gray-300">
        <img
          src={image}
          alt={"Profile Picture of " + name}
          className="w-full h-full rounded-full"
        />
      </div>
      <h1 className="text-text-primary ">{name}</h1>
    </a>
  );
}
