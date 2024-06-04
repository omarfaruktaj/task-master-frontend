import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/use-auth";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";
const MySwal = withReactContent(Swal);

export default function Navbar() {
  const [user, setUser] = useState(null);

  const auth = useAuth();

  const navigate = useNavigate();

  const email = auth.user?.email;

  useEffect(() => {
    if (email && !auth.loading) {
      const token = localStorage.getItem("token");

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
    }
  }, [auth.loading, email, navigate, user]);

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

  const routes = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/blogs",
      label: "Blogs",
    },
    {
      path: "/aboutus",
      label: "About Us",
    },
    {
      path: "/pricing",
      label: "Pricing",
    },
    {
      path: "dashboard",
      label: "Dashboard",
      isHidden: !auth.user,
    },
  ];

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {routes.map(
              ({ path, label, isHidden }) =>
                !isHidden && (
                  <li key={path}>
                    <NavLink
                      className={({ isActive, isPending }) =>
                        isActive ? "bg-gray-800" : isPending ? "" : ""
                      }
                      to={path}
                    >
                      {label}
                    </NavLink>
                  </li>
                )
            )}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Task Master
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {routes.map(
            ({ path, label, isHidden }) =>
              !isHidden && (
                <li key={path}>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isActive ? "bg-gray-800" : isPending ? "" : ""
                    }
                    to={path}
                  >
                    {label}
                  </NavLink>
                </li>
              )
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {auth?.user ? (
          <div className="flex items-center justify-center gap-4">
            <div
              className="cursor-pointer"
              onClick={() => navigate("/dashboard/profile")}
            >
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
            <button onClick={handleLogout} className="btn">
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
