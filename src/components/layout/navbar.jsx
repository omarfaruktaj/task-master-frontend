import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/use-auth";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";
const MySwal = withReactContent(Swal);

export default function Navbar() {
  const auth = useAuth();

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

  const routes = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "dashboard",
      label: "Dashboard",
      isHidden: !auth.user,
    },
  ];
  console.log(!auth.user);

  const profilePicture = auth.user?.photoURL;

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
            {profilePicture ? (
              <img
                className="w-24 h-24 rounded-full "
                src={profilePicture}
                alt={"User profile image"}
              />
            ) : (
              <FaUserCircle className="h-8 w-8 " />
            )}
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
