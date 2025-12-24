import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Routing from "./layout";
import Register from "./pages/Register";
import { ToastContainer, Bounce } from "react-toastify";
import PrivateRoute from "./PrivateRoute";
import "./index.css";
import { Suspense, useEffect } from "react";
import Error from "./pages/Error";
import Loading from "./pages/admin/Component/Loading";

const App = () => {
  useEffect(() => {}, []);
  return (
    <>
      <Router>
        <Suspense fallback={<Loading/>}>
          <Routes>
            <Route element={<PrivateRoute />}>
              {Routing.map((ele) => (
                <Route path={ele.path} element={<ele.element />} />
              ))}
            </Route>
            <Route path="/" element={<Index />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
};

export default App;
