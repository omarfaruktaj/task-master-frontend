import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/use-auth";
import toast from "react-hot-toast";
import SocialLogin from "../../components/social-login";

export default function Register() {
  const auth = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const target = e.target;
      const name = target.name.value;

      const email = target.email.value;
      const password = target.password.value;

      await auth.createUser(name, email, password);

      toast.success("Successfully registered.");
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    if (auth.user) {
      navigate(from, { replace: true });
    }
  }, [auth.user, from, navigate]);

  return (
    <div className="max-w-md bg-base-200  w-full rounded-2xl shadow-md p-6 space-y-8">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold ">Register</h2>
      </div>
      <form className="mt-8  space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col w-full space-y-6">
          <div>
            <label className="text-gray-600" htmlFor="email">
              Name:{" "}
            </label>

            <input
              type="name"
              name="name"
              required
              placeholder="Enter you name"
              className="input input-bordered bg-inherit w-full max-w-md"
            />
          </div>
          <div>
            <label className="text-gray-600" htmlFor="email">
              Email:{" "}
            </label>

            <input
              type="email"
              name="email"
              required
              placeholder="Enter you email"
              className="input input-bordered bg-inherit w-full max-w-md"
            />
          </div>
          <div>
            <label className="text-gray-600" htmlFor="password">
              Password:{" "}
            </label>

            <input
              type="password"
              name="password"
              required
              placeholder="Enter you password"
              className="input input-bordered bg-inherit w-full max-w-md"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </form>
      <div className="h-0.5 w-full bg-black"></div>

      <SocialLogin />

      <div className="">
        Already have an accoutn?
        <Link to="/login" className="text-primary">
          {" "}
          Login
        </Link>
      </div>
    </div>
  );
}
