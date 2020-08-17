import { useEffect } from "react";
import { useGlobalContext } from "../globalStore/context";

export const useAuth = () => {
  const { state, action } = useGlobalContext();
  const { onAuth, onLogout } = action;

  useEffect(() => {
    if (state.auth) {
      const tokenExpireDate = localStorage.getItem("expiresIn");
      const expireTime = new Date(tokenExpireDate!).getTime();
      const currentTime = new Date().getTime();
      if (currentTime >= expireTime) {
        onLogout();
      } else {
        const difTime = expireTime - currentTime;
        setTimeout(() => {
          onLogout();
        }, difTime);
      }
    } else {
      const localToken = localStorage.getItem("token");
      if (localToken) {
        onAuth(localToken);
      }
    }
  }, [state.token, state.auth, onAuth, onLogout]);
};
