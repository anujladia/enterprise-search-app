import { useEffect, useState } from "react";
import { auth } from "@lib/firebase";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    try {
      auth.onAuthStateChanged((user) => {
        setIsLoggedIn(user && user.uid ? true : false);
        setUser(user);
      })
    } catch (_) {}
  });

  return { user, isLoggedIn };
};

export default useAuth;
