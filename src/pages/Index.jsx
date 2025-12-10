import googleLogo from "../assets/images/google.png";
import { useForm } from "react-hook-form";
import {GoogleAuthProvider,signInWithPopup,signInWithEmailAndPassword,} from "firebase/auth";
import {auth} from "../../firebase";
import "../assets/css/common.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AutoLogout from "./AutoLogout";

const Index = () => {
  const { register, handleSubmit, reset } = useForm();

  const navigate = useNavigate();
  function google() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        navigate("/ahome");
      })
      .catch((err) => console.log(err));
  }

  function login(data) {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        navigate("/ahome");
        reset();
      })
      .catch((err) => {
        toast.error("Email OR Password is Invalid")
      });
  }
  return (
    <>
      <div className="background pt-5">
        <div className="loginForm col-10 col-sm-5 col-md-4 col-lg-3 mx-auto shadow py-5 px-3 rounded-4 bg-light">
          <h2 className="text-capitalize">login</h2>
          <form action="" onSubmit={handleSubmit(login)}>
            <label htmlFor="email" className="form-label text-capitalize">
              email
            </label>
            <input
              type="text"
              {...register("email")}
              id="email"
              className="form-control mb-2"
              placeholder="Enter email"
              required
              autoFocus
            />
            <label htmlFor="pass" className="form-label text-capitalize">
              password
            </label>
            <input
              type="password"
              {...register("password")}
              id="pass"
              className="form-control mb-2"
              placeholder="Enter Username"
              required
            />

            <p className="text-end text-capitalize">
              don't have account <Link to="/register">singup</Link>
            </p>

            <button className="btn btn-primary text-capitalize mb-2 w-100">
              submit
            </button>

            <button
              type="button"
              className="btn btn-outline-dark w-100 text-capitalize"
              onClick={google}
            >
              <img
                src={googleLogo}
                alt=""
                width={20}
                className="mx-2 bg-transparent"
              />
              sign with google
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Index;
