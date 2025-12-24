import { useForm } from "react-hook-form";
import "../../assets/css/common.css";
import Navbar from "./Component/Navbar";
import Menu from "./Component/Menu";
import { auth, db } from "../../../firebase";
import { get, push, ref, set, update } from "firebase/database";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./Component/Footer";

const Add_Product = () => {
  const { register, handleSubmit, reset } = useForm();

  const navigate = useNavigate();

  const { id } = useParams();

  async function addProduct(data) {
    if(id==null){
      try {
        const userId = auth.currentUser.uid;
        const newData = { userId, ...data };
        await set(push(ref(db, "products")), newData);
        navigate("/showProduct", { state: { message: "Product added successfully!" } });
      } catch (error) {
        console.log(error);
      }
    }else{
      try{
        await update(ref(db,`products/${id}`),data)
        .then(res=>{
          navigate("/showProduct")
        })
      }catch(err){
        console.log(err)
      }
    }
  }
  async function singleData() {
    const data = await get(ref(db, `products/${id}`));
    reset(data.val())
  }

  useEffect(() => {
    singleData();
  }, [id]);
  return (
    <>
      <Navbar />
      <Menu />
      <Footer/>
      <div className="background py-5 px-3">
        <div className="col-lg-6 mx-auto bg-light p-5 rounded-3">
          {id == null ? (
            <h2 className="text-capitalize">add product</h2>
          ) : (
            <h2 className="text-capitalize">update product</h2>
          )}
          <form action="" onSubmit={handleSubmit(addProduct)}>
            <label htmlFor="url" className="form-label text-capitalize">
              url
            </label>
            <input
              type="url"
              {...register("url")}
              id="url"
              className="form-control mb-2"
              placeholder="Enter Product URL"
            />
            <label htmlFor="name" className="form-label text-capitalize">
              name
            </label>
            <input
              type="text"
              {...register("name")}
              id="name"
              className="form-control mb-2"
              placeholder="Enter Product Name"
              required
            />
            <label htmlFor="price" className="form-label text-capitalize">
              price
            </label>
            <input
              type="number"
              {...register("price")}
              id="price"
              className="form-control mb-2"
              placeholder="Enter Product Price (₹)"
              required
            />
            <label htmlFor="stock" className="form-label text-capitalize">
              total stock
            </label>
            <input
              type="number"
              {...register("stock")}
              id="stock"
              className="form-control mb-2"
              placeholder="Enter Available Stock"
              required
            />
            {id == null ? (
              <button className="btn btn-primary text-capitalize mt-2">
                add product
              </button>
            ) : (
              <button className="btn btn-warning text-capitalize mt-2">
                edit product
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Add_Product;
