import toast from "react-hot-toast";
import useAuth from "../../hooks/use-auth";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
const MySwal = withReactContent(Swal);

export default function Header() {
  const [user, setUser] = useState(null);

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

        setUser(data.data?.data?.user);
      } catch (error) {
        // toast.error(error.message);
      }
    };
    loadUserData();
  }, [email, navigate, user]);

  const handleLogout = async () => {
    const result = await MySwal.fire({
      title: "Are you sure?",
      text: "Do you want to logout out?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, logout!",
      cancelButtonText: "No, cancel!",
    });
    if (result.isConfirmed) {
      await auth.logout();
      toast.success("Successfull logout.");
    }
  };

  const profilePicture = user?.profile_image;

  return (
    <header className="border-b border-b-gray-700 shadow p-4">
      <div className="flex justify-end items-center">
        <div className="flex items-center gap-4">
          <div className="cursor-pointer" onClick={() => navigate("profile")}>
            {profilePicture ? (
              <img
                className="w-14 h-14 rounded-full mx-auto"
                src={profilePicture}
                alt={"User profile image"}
              />
            ) : (
              <FaUserCircle className="h-8 w-8 mx-auto" />
            )}
          </div>
          <button onClick={handleLogout} className="btn  ">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
