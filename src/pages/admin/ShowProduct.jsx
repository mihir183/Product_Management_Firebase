import React, { useEffect, useState } from "react";
import Navbar from "./Component/Navbar";
import Menu from "./Component/Menu";
import { get, ref, remove } from "firebase/database";
import { auth, db } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "./Component/Footer";
import Swal from "sweetalert2";

const ShowProduct = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState([]);
  const [url, setUrl] = useState("");
  var arr = [];

  async function showProduct() {
    const data = await get(ref(db, "products"));
    const obj = data.val();
    for (var key in obj) {
      arr.push({ id: key, ...obj[key] });
    }

    const userId = auth.currentUser.uid;
    const filterData = arr.filter((ele) => ele.userId == userId);
    setProduct(filterData);
    setSearch(filterData);
  }

  async function deleteProduct(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await remove(ref(db, `/products/${id}`));

          Swal.fire({
            title: "Deleted!",
            text: "Product has been deleted successfully.",
            icon: "success",
          });
          showProduct();
        } catch (err) {
          Swal.fire({
            title: "Error!",
            text: "Product can't be deleted.",
            icon: "error",
          });
        }
      }
    });
  }

  function searchPro(text) {
    const filterData = product.filter((ele) => {
      return (
        ele.name.toLowerCase().includes(text.toLowerCase()) ||
        ele.price?.toString().includes(text) ||
        ele.stock?.toString().includes(text)
      );
    });

    setSearch(filterData);
  }

  function showImg(id) {
    const imgUrl = product.find((ele) => ele.id === id);
    setUrl(imgUrl);
  }

  useEffect(() => {
    showProduct();
  }, []);
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto mt-10 px-4">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">My Products</h1>

          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg shadow-md transition text-[15px] md:text-[20px]"
            onClick={() => navigate("/addProduct")}
          >
            + Add Product
          </button>
        </div>

        <div className="my-3">
          <input
            type="search"
            name=""
            id=""
            className="form-control"
            placeholder="Search Product by Name/Price/Stock"
            onChange={(e) => {
              searchPro(e.target.value);
            }}
          />
        </div>

        {/* Card Table */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 overflow-x-auto md:overflow-x-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
              <tr>
                <th className="py-4 px-6 hidden md:block lg:block">No</th>
                <th className="py-4 px-6">Name</th>
                <th className="py-4 px-6">Price</th>
                <th className="py-4 px-6">Stock</th>
                <th className="py-4 px-6">action</th>
              </tr>
            </thead>

            <tbody>
              {search.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="py-10 text-center text-gray-500 text-lg"
                  >
                    No products found
                  </td>
                </tr>
              ) : (
                search.map((ele, index) => (
                  <tr
                    key={ele.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="py-4 px-6 hidden md:block lg:block">
                      {index + 1}
                    </td>
                    <td
                      className="py-4 px-6 font-medium text-gray-800 text-capitalize"
                      onClick={() => {
                        showImg(ele.id);
                      }}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      {ele.name}
                    </td>
                    <td className="py-4 px-6 text-green-600 font-semibold">
                      ${ele.price}
                    </td>
                    <td className="py-4 px-6">{ele.stock}</td>
                    <td>
                      <div className="btn-group">
                        <button
                          className="btn btn-info text-capitalize"
                          onClick={() => {
                            navigate(`/editProduct/${ele.id}`);
                          }}
                        >
                          edit
                        </button>
                        <button
                          className="btn btn-danger text-capitalize"
                          onClick={() => deleteProduct(ele.id)}
                        >
                          delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Menu />
      <Footer />
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1
                class="modal-title fs-5 text-capitalize"
                id="exampleModalLabel"
              >
                product image
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body flex justify-content-center">
              <img
                src={
                  url.url ||
                  "https://i.pinimg.com/736x/46/8f/84/468f8447a8c2ae4e6be30dfca58a48f5.jpg"
                }
                alt=""
                className=""
                width={350}
                height={350}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowProduct;
