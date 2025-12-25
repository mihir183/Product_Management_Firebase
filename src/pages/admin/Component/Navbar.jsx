import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.jpeg";
import { signOut } from "firebase/auth";
import { auth } from "../../../../firebase";
import AutoLogout from "../../AutoLogout";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  function logout() {
    signOut(auth)
      .then((res) => {
        localStorage.removeItem("user");
        navigate("/");
      })
      .catch((err) => console.log(err));
  }
  console.log(user);

  setTimeout(() => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  }, 60 * 60 * 10000);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <>
      <AutoLogout />
      <nav>
        <div className="container-fluid border border-bottom shadow position-siticky top-0 z-3 bg-light bg-opacity-25 backdrop-blur">
          <div className="row">
            <div className="col">
              <img src={logo} alt="" width={60} height={70} />
            </div>
            <div className="col align-content-center">
              <ul className="d-flex list-unstyled gap-3 justify-content-end align-items-center h-100">
                <li className="d-flex gap-3 align-items-center">
                  <h3 className="text-responsive m-0 text-capitalize">
                    welcome, {user.displayName}
                  </h3>
                  <button className="btn btn-danger" onClick={logout}>
                    logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
