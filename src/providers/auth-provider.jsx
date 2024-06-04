import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const createUser = async (name, email, password) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(auth.currentUser, {
      displayName: name,
    });

    const user = userCredential.user;
    setLoading(true);
    const data = await axios.post(
      "https://task-master-vert-omega.vercel.app/api/users",
      {
        name: user.displayName,
        email: user.email,
      }
    );

    const token = data?.data?.data?.token;

    localStorage.setItem("token", token);
    setLoading(false);
  };

  const login = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;
    setLoading(true);
    const data = await axios.post(
      "https://task-master-vert-omega.vercel.app/api/users/login",
      {
        email: user.email,
      }
    );

    const token = data?.data?.data?.token;

    localStorage.setItem("token", token);
    setLoading(false);
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    localStorage.removeItem("token");
  };

  const googleLogin = async () => {
    const userCredential = await signInWithPopup(auth, googleProvider);

    const user = userCredential.user;
    const data = await axios.post(
      "https://task-master-vert-omega.vercel.app/api/users/social",
      {
        name: user.displayName,
        email: user.email,
        profile_image: user.photoURL,
      }
    );

    const token = data?.data?.data?.token;

    if (token) {
      localStorage.setItem("token", token);
    }
  };

  const facebookLogin = async () => {
    const userCredential = await signInWithPopup(auth, facebookProvider);
    const user = userCredential.user;
    const data = await axios.post(
      "https://task-master-vert-omega.vercel.app/api/users/social",
      {
        name: user.displayName,
        email: user.email,
        profile_image: user.photoURL,
      }
    );

    const token = data?.data?.data?.token;

    if (token) {
      localStorage.setItem("token", token);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    login,
    logout,
    googleLogin,
    facebookLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
