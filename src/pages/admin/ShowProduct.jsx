import React, { useEffect, useState } from "react";
import Navbar from "./Component/Navbar";
import { get, ref } from "firebase/database";
import { auth, db } from "../../../firebase";
import { Navigate, useNavigate } from "react-router-dom";

const ShowProduct = () => {

  const navigate = useNavigate()

  const [product, setProduct] = useState([]);
  var arr = [];

  async function showProduct() {
    const data = await get(ref(db, "products"));
    const obj = data.val();
    for (var key in obj) {
      arr.push({id: key,...obj[key]});
    }

    const userId = auth.currentUser.uid
    const filterData = arr.filter(ele=>ele.userId==userId)
    setProduct(filterData);
  }

  useEffect(() => {
    showProduct();
  }, []);
  return (
    <>
      <Navbar />

      <div className="container mt-5 text-capitalize text-end">
      <button className="btn btn-primary text-capitalize my-3" onClick={()=>{navigate('/addProduct')}}>add products</button>
        <table className="table text-center">
          <thead>
            <tr>
              <th>no</th>
              <th>name</th>
              <th>price</th>
              <th>stock</th>
            </tr>
          </thead>
          <tbody>
            {product.length === 0 ? (
              <tr>
                <td colSpan={5}>no data</td>
              </tr>
            ) : (
              product.map((ele,index) => (
                <tr>
                  <td>{index+1}</td>
                  <td>{ele.name}</td>
                  <td>${ele.price}</td>
                  <td>{ele.stock}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ShowProduct;
