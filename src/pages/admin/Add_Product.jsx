import { useForm } from "react-hook-form";
import "../../assets/css/common.css";
import Navbar from "./Component/Navbar";
import Menu from "./Component/Menu";
import {auth, db} from "../../../firebase";
import { push, ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";

const Add_Product = () => {
  const { register, handleSubmit, reset } = useForm();

  const navigate = useNavigate()

  async function addProduct(data){
    try {
      const userId = auth.currentUser.uid
      const newData = {userId,...data}
      await set(push(ref(db,'products')),newData)
      navigate("/ahome", { state: { message: "Product added successfully!" } });
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Navbar />
      <Menu/>
      <div className="background py-5 px-3">
        <div className="col-lg-6 mx-auto bg-light p-5 rounded-3">
          <h2 className="text-capitalize">add product</h2>
          <form action="" onSubmit={handleSubmit(addProduct)}>
            <label htmlFor="name" className="form-label text-capitalize">
              name
            </label>
            <input
              type="text"
              {...register("name")}
              id="name"
              className="form-control mb-2"
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
              required
            />
            <button className="btn btn-primary text-capitalize">
              add product
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Add_Product;
