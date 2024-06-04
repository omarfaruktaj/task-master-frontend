import { useState } from "react";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";
import toast from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase/firebase.config";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    try {
      // Re-authenticate the user
      const user = auth.currentUser;
      const credential = EmailAuthProvider.credential(
        user.email,
        currentPassword
      );
      await reauthenticateWithCredential(user, credential);

      // Update the password
      await updatePassword(user, newPassword);
      toast.success("Password updated successfully.");
    } catch (error) {
      toast.error(`Failed to update password: ${error.message}`);
    }
  };

  return (
    <div className="p-4 ">
      <button className="btn btn-ghost my-4" onClick={() => navigate(-1)}>
        <div className="flex items-center justify-center gap-2">
          <FaArrowLeft className="h-5 w-5" />
          <p className="text-xl"> Back</p>
        </div>
      </button>
      <div className="w-full max-w-md p-8 space-y-6 bg-base-200 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Change Password</h2>
        <form onSubmit={handlePasswordChange} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="currentPassword" className="label-text">
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="newPassword" className="label-text">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="input input-bordered w-full"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
