import { LuUser } from "react-icons/lu";
import { currentUser } from "@clerk/nextjs/server";

const UserIcon = async () => {
  const user = await currentUser();
  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <img
        src={profileImage}
        alt="user icon"
        className="w-6 h-6 rounded-full object-cover"
      />
    );
  }

  return <LuUser className="w-6 h-6 bg-primary text-white rounded-full p-1" />;
};

export default UserIcon;
