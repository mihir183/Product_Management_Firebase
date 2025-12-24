import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="position-fixed bottom-0 w-full bg-gray-900 py-3 md:py-5 text-white capitalize text-center z-3">
        <p className="m-0">
          developed by{" "}
          <Link
            to="https://github.com/mihir183"
            target="_blank"
            className="font-medium
            bg-gradient-to-r from-blue-500 to-purple-600
            bg-clip-text text-transparent
            hover:from-purple-700 hover:to-yellow-500
            transition-all duration-400"
          >
            @mihir183
          </Link>
        </p>
      </div>
    </>
  );
};

export default Footer;
