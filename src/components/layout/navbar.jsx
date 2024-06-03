import { Link, NavLink } from "react-router-dom";


export default function Navbar() {
  
  const routes = [
    {
      path: "/",
      label: "Home",
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
              ({ path, label, isPrivate }) =>
                !isPrivate && (
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
            ({ path, label, isPrivate }) =>
              !isPrivate && (
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
        <button className="btn ">login</button>
      </div>
    </div>
  );
}
