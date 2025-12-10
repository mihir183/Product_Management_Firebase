import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const AutoLogout = () => {
  const navigate = useNavigate();
  const started = useRef(false);

  async function logout() {
    await signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const interval = setInterval(() => {
      logout();
    },60*60*10000); // 1 Hr

    return () => clearInterval(interval);
  }, []);

  return null; // Component must return something
};

export default AutoLogout;
