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
                {/* for some reason, our lat and lng not working here so a solution would be to use google map with api key */}
                <iframe
                  width="600"
                  height="400"
                  src="https://www.bing.com/maps/embed?h=400&w=600&cp=12.98363583874702~77.55233992416848&lvl=15.09&typ=s&sty=r&src=SHELL&FORM=MBEDV8"
                  scrolling="no"
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
