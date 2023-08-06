import { User } from "../../typings";

export default function ProfileScreen({ user }: { user: User | undefined }) {
  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <section className="grid grid-cols-5 gap-5 pt-5 w-full h-full ">
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
            <p className="font-bold col-span-2 text-lg">
              {user?.address.street}
            </p>
            <p className="text-right col-span-1">Suite :</p>
            <p className="font-bold col-span-2 text-lg">
              {user?.address.street}
            </p>
            <p className="text-right col-span-1">City :</p>
            <p className="font-bold col-span-2 text-lg">{user?.address.city}</p>
            <p className="text-right col-span-1">Zipcode :</p>
            <p className="font-bold col-span-2 text-lg">
              {user?.address.zipcode}
            </p>
          </div>
          <div className="rounded-xl overflow-clip h-80">
            <div>
              <div>
                {/* for some reason, our lat and lng are always at ocean */}

                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d37929.41683100013!2d${user.address.geo.lng.toString()}!3d${user.address.geo.lat.toString()}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin`}
                  width="600"
                  height="450"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  aria-hidden="true"
                  tabIndex={0}
                  
                ></iframe>
              </div>
            </div>
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
    </section>
  );
}
