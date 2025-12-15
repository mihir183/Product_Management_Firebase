import React, { useEffect, useId, useState } from "react";
import Navbar from "./Component/Navbar";
import Menu from "./Component/Menu";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaBoxOpen } from "react-icons/fa";
import { get, ref } from "firebase/database";
import { auth, db } from "../../../firebase";
import Footer from "./Component/Footer";

const AIndex = () => {
  const [count, setCount] = useState(0);
  const [stock, setStock] = useState(0);

  let arr = [];
  let c = 0;

  async function getTotProd() {
    const data = await get(ref(db, "products"));
    const fetchProd = data.val();

    for (var key in fetchProd) {
      arr.push({ id: key, ...fetchProd[key] });
    }
    const userId = auth.currentUser.uid;

    const tot = arr.filter((ele) => {
      return ele.userId === userId;
    });

    tot.map((ele) => {
      c += parseInt(ele.stock);
    });

    setCount(tot.length);
    setStock(c);
  }

  useEffect(() => {
    getTotProd();
  }, []);

  return (
    <>
      <Navbar />

      {/* Page container */}
      <div className="max-w-7xl mx-auto mt-5 px-4">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Card */}
          <div
            className="bg-sky-500 p-6 md:p-10 rounded-xl border shadow
                          flex flex-col items-center justify-center text-center
                          hover:scale-105 transition duration-300"
          >
            <h3 className="flex text-xl font-semibold text-white gap-2 items-center uppercase">
              products
              <MdOutlineProductionQuantityLimits
                size={25}
                className="text-white"
              />
            </h3>
            <p className="text-white p-0 m-0">{count}</p>
          </div>

          <div
            className="bg-purple-500 p-6 md:p-10 rounded-xl border shadow
                          flex flex-col items-center justify-center text-center
                          hover:scale-105 transition duration-300"
          >
            <h3 className="flex text-xl font-semibold text-white gap-2 items-center uppercase">
              total stock
              <FaBoxOpen
                size={25}
                className="text-white"
              />
            </h3>
            <p className="text-white p-0 m-0">{stock}</p>
          </div>
        </div>
      </div>

      <Menu />
      <Footer />
    </>
  );
};

export default AIndex;
