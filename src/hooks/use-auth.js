import { useContext } from "react";
import { AuthContext } from "../providers/auth-provider";

export default function useAuth() {
  const auth = useContext(AuthContext);

  return auth;
}
