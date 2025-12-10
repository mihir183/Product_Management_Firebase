import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.jpeg";
import { signOut } from "firebase/auth";
import { auth } from "../../../../firebase";
import AutoLogout from "../../AutoLogout";

const Navbar = () => {
  const navigate = useNavigate();
    function logout() {
      signOut(auth)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  return (
    <>
    <AutoLogout/>
      <nav>
        <div className="container-fluid border border-bottom shadow position-siticky top-0 z-3">
          <div className="row">
            <div className="col">
              <img src={logo} alt="" width={60} height={70} />
            </div>
            <div className="col align-content-center">
              <ul className="d-flex list-unstyled gap-3 justify-content-end align-items-center h-100">
                <li>
                   <button className="btn btn-danger" onClick={logout}>logout</button>
                  
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
