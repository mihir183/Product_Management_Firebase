import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Routing from "./layout";
import Register from "./pages/Register";
import { ToastContainer, Bounce } from "react-toastify";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {Routing.map((ele) => (
            <Route path={ele.path} element={<ele.element />} />
          ))}
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<Register />} />
        </Routes>
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
