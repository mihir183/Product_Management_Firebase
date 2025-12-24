import React, { useEffect, useState } from "react";
import Navbar from "./Component/Navbar";
import Menu from "./Component/Menu";
import Footer from "./Component/Footer";
import { auth } from "../../../firebase";
import { onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";
import Swal from "sweetalert2";

const ChangePass = () => {
  const [email, setEmail] = useState("");

  async function reset() {
    if (email) {

      sendPasswordResetEmail(auth, email)
        .then((res) => {
          Swal.fire("Mail Send Successfully......!");
        })
        .catch((err) => console.log(err));
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email);
      }
    });
  }, []);

  return (
    <>
      <Navbar />
      <Menu />
      <Footer />
      <div className="col-10 col-md-6 mx-auto mt-5">
        <form action="">
          <input type="text" className="form-control" value={email} readOnly />
          <button
            type="button"
            className="btn btn-primary my-3 w-100 text-capitalize"
            onClick={reset}
          >
            send link
          </button>
        </form>
      </div>
    </>
  );
};

export default ChangePass;
