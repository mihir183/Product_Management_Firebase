import { Link, useNavigate } from "react-router-dom";
import "../../../assets/css/offCanvas.css";
import logo from "../../../assets/images/logo.jpeg";

const Menu = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        className="menu btn btn-primary text-capitalize m-0"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        menu
      </button>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <img src={logo} alt="" width={60} height={70} />
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <hr />
        <div className="offcanvas-body">
          <ul className="m-0 list-unstyled">
            <li className="text-capitalize text-center border-bottom my-4">
              <Link to="/ahome" className="text-decoration-none text-dark">
                home
              </Link> 
            </li>
            <li className="text-capitalize text-center border-bottom my-4">
              <button
                className="text-decoration-none text-capitalize text-dark bg-transparent btn"
                onClick={() => navigate("/showProduct")}
                data-bs-dismiss="offcanvas"
              >
                products
              </button>
            </li>
            <li className="text-capitalize text-center border-bottom my-4">
              <a href="" className="text-decoration-none text-dark">
                stock
              </a>
            </li>
            <li className="text-capitalize text-center border-bottom my-4">
              <Link
                to="/addProduct"
                className="text-decoration-none text-dark"
                onClick={() => navigate("/addProduct")}
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                add product
              </Link>
            </li>
            <li className="text-capitalize text-center border-bottom my-4">
              <a href="" className="text-decoration-none text-dark">
                preview
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
