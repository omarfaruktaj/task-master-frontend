import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/use-auth";
import toast from "react-hot-toast";
import SocialLogin from "../../components/social-login";

export default function Login() {
  const auth = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const target = e.target;
      const email = target.email.value;
      const password = target.password.value;

      await auth?.login(email, password);

      toast.success("Successfull login");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };
  useEffect(() => {
    if (auth?.user) {
      navigate(from, { replace: true });
    }
  }, [auth?.user, from, navigate]);

  return (
    <div className="max-w-md w-full bg-base-200 rounded-2xl shadow-md p-6 space-y-8">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold ">Login</h2>
      </div>
      <form className="mt-8  space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col w-full space-y-6">
          <div>
            <label className="text-gray-600" htmlFor="email">
              Email:{" "}
            </label>

            <input
              type="email"
              name="email"
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
              placeholder="Enter you password"
              className="input input-bordered bg-inherit w-full max-w-md"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
      <div className="h-0.5 w-full bg-black"></div>

      <SocialLogin />

      <div className="">
        New here?
        <Link to="/register" className="text-primary">
          {" "}
          Register
        </Link>
      </div>
    </div>
  );
}
