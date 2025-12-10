import React, { useEffect } from "react";
import logo from "../../assets/images/logo.jpeg";
import Navbar from "./Component/Navbar";
import Menu from "./Component/Menu";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const AIndex = () => {
  const { state } = useLocation();

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
    }
  }, [state]);

  return (
    <>
      <div>
        <Navbar />
        <div className="container mt-5 p-0">
          <div className="row gap-2 m-0 p-3">
            <div className="col bg-info p-5 text-center border border-1 rounded-2">
              <h3 className="text-capitalize">product</h3>
              <h3>
                <MdOutlineProductionQuantityLimits />
              </h3>
            </div>
          </div>
        </div>
      </div>
      <Menu />
    </>
  );
};

export default AIndex;
