import { Link } from "react-router-dom";
import useAuth from "../../hooks/use-auth";

export default function Banner() {
  const auth = useAuth();

  return (
    <section className="bg-blue-500 text-white text-center py-20 rounded-md">
      <h1 className="text-4xl font-bold mb-4">Welcome to Task Master</h1>
      <p className="text-xl mb-6">Your Personal Task Management System</p>
      <p className="mb-6">
        Task Master helps you organize, prioritize, and manage your tasks
        efficiently.
      </p>

      {auth.user ? (
        <Link
          to="/dashboard"
          className="bg-white text-blue-500 py-2 px-4 rounded"
        >
          Go to Dashboard
        </Link>
      ) : (
        <Link to="/login" className="bg-white text-blue-500 py-2 px-4 rounded">
          Get Started
        </Link>
      )}
    </section>
  );
}
