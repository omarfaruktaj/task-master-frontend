import { FaUserCircle, FaUserEdit } from "react-icons/fa";
import useAuth from "../../hooks/use-auth";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState();
  const [isLoading, setIsLoding] = useState(true);
  const auth = useAuth();

  const navigate = useNavigate();

  const email = auth?.user?.email;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    const loadUserData = async () => {
      try {
        const data = await axios.get(
          `https://task-master-vert-omega.vercel.app/api/users/${email}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setIsLoding(false);
        setUser(data.data?.data?.user);
      } catch (error) {
        setIsLoding(false);
        toast.error(error.message);
      }
    };
    loadUserData();
  }, [email, navigate, user]);

  console.log(user);

  if (isLoading) return <p>Loadding...</p>;

  return (
    <div className=" m-8 h-screen ">
      <div className="max-w-md rounded overflow-hidden shadow-lg  p-6">
        <div className="flex items-center justify-between">
          <h2 className=" text-3xl  pb-2 text-gray-200 font-bold">
            My Profile
          </h2>
          <div onClick={() => navigate("edit")} className="p-3 cursor-pointer">
            <FaUserEdit className="h-6 w-6" />
          </div>
        </div>
        <div className="h-0.5 w-full bg-base-200 my-2"></div>
        <div className="mt-4">
          {user?.profile_image ? (
            <img
              className="w-24 h-24 rounded-full mx-auto"
              src={user?.profile_image}
              alt={user?.name || "User profile image"}
            />
          ) : (
            <FaUserCircle className="h-10 w-10 mx-auto" />
          )}
          <div className="text-center mt-4">
            <h2 className="text-xl font-semibold">
              {user?.name ? user?.name : "Unname User"}
            </h2>
            <p className="text-gray-600">Email: {user?.email}</p>
            <p className="text-gray-600">
              <button
                onClick={() => navigate("change-password")}
                className="btn btn-link"
              >
                Change password
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
