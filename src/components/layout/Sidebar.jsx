import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  const routes = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/dashboard",
      label: "Dashborad",
    },
    {
      path: "tasks",
      label: "Tasks",
    },
    {
      path: "profile",
      label: "Profile",
    },
  ];

  return (
    <div className="w-64  shadow-md border-r border-r-gray-700 h-full flex flex-col">
      <Link to={"/"} className="p-4 text-xl font-bold">
        Task Master
      </Link>
      <nav className="flex-1 px-4 py-2">
        {routes.map((route) => (
          <NavLink
            key={route.path}
            to={route.path}
            className={({ isActive, isPending }) =>
              isActive
                ? "bg-base-200 block my-1 py-2.5 px-4 rounded transition duration-200 hover:bg-base-200"
                : isPending
                ? ""
                : "block py-2.5 px-4 my-1 rounded transition duration-200 hover:bg-base-200"
            }
            end
          >
            {route.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
