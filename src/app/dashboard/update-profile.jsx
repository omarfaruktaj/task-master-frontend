import { FaArrowLeft, FaUserCircle } from "react-icons/fa";
import useAuth from "../../hooks/use-auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Loading from "../../components/loading";

export default function UpdateProfile() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const auth = useAuth();
  const navigate = useNavigate();
  const email = auth?.user?.email;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const loadUserData = async () => {
      try {
        const { data } = await axios.get(
          `https://task-master-vert-omega.vercel.app/api/users/${email}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setIsLoading(false);
        setUser(data?.data?.user || {});
      } catch (error) {
        setIsLoading(false);
        toast.error(error.message);
      }
    };

    loadUserData();
  }, [email, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const token = localStorage.getItem("token");
      const { data } = await axios.patch(
        `https://task-master-vert-omega.vercel.app/api/users/${email}`,
        { user },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsLoading(false);
      toast.success("Update successfully.");
      setUser(data?.data?.user || {});
      navigate(-1);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  const handleChange = async (e) => {
    const { name, value, files } = e.target;
    if (name === "profile_image") {
      try {
        setIsLoading(true);
        const formData = new FormData();
        formData.append("image", files[0]);
        const response = await axios.post(
          "https://api.imgbb.com/1/upload",
          formData,
          {
            headers: {
              "content-type": "multipart/form-data",
            },
            params: {
              key: "a70985051aa6eb0d54f79036b48ed0a3",
            },
          }
        );
        setIsLoading(false);
        setUser((prevUser) => ({
          ...prevUser,
          profile_image: response.data.data.display_url,
        }));
      } catch (error) {
        console.error("Error uploading image:", error);
        setIsLoading(false);
      }
    } else {
      setUser((prevUser) => ({ ...prevUser, [name]: value }));
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div>
      <div className="m-8 h-screen">
        <button className="btn btn-ghost my-4" onClick={() => navigate(-1)}>
          <div className="flex items-center justify-center gap-2">
            <FaArrowLeft className="h-5 w-5" />
            <p className="text-xl"> Back</p>
          </div>
        </button>
        <div className="max-w-md rounded overflow-hidden shadow-lg p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl pb-2 text-gray-200 font-bold">
              Update Profile
            </h2>
          </div>
          <div className="h-0.5 w-full bg-base-200 my-2"></div>
          <div className="mt-4">
            <form
              onSubmit={handleSubmit}
              className="p-4 rounded shadow-md max-w-lg"
            >
              <div className="form-control mb-4">
                {user.profile_image ? (
                  <img
                    className="w-24 h-24 rounded-full mx-auto"
                    src={user.profile_image}
                    alt={user.name || "User profile image"}
                  />
                ) : (
                  <FaUserCircle className="h-10 w-10 mx-auto" />
                )}
                <label className="label" htmlFor="profile_image">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="file"
                  id="profile_image"
                  name="profile_image"
                  onChange={handleChange}
                  className="input file-input w-full"
                />
              </div>
              <div className="form-control mb-4">
                <label className="label" htmlFor="name">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label className="label" htmlFor="email">
                  <span className="label-text">Email</span>
                </label>
                <input
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  className="textarea textarea-bordered w-full"
                  required
                  disabled
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary w-full">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
