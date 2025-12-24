import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="text-center">
        <img
          src="https://i.pinimg.com/736x/73/b6/6d/73b66d9790c99f0bb027f5197e94870b.jpg"
          alt=""
          className="mx-auto"
        />
        <Link to="/">
          <button className="btn btn-primary rounded-5 text-capitalize">
            back home
          </button>
        </Link>
      </div>
    </>
  );
};

export default Error;
