import toast from "react-hot-toast";
import useAuth from "../../hooks/use-auth";
import { FaUserCircle } from "react-icons/fa";

export default function Header() {
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
    toast.success("Successfully logout.");
  };
  const profilePicture = auth.user?.photoURL;

  return (
    <header className="border-b border-b-gray-700 shadow p-4">
      <div className="flex justify-end items-center">
        <div className="flex items-center gap-4">
          {profilePicture ? (
            <img
              className="w-24 h-24 rounded-full mx-auto"
              src={profilePicture}
              alt={"User profile image"}
            />
          ) : (
            <FaUserCircle className="h-8 w-8 mx-auto" />
          )}
          <button onClick={handleLogout} className="btn  ">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
