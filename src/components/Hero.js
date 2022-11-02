import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full h-screen absolute top-0 left-0 bg-hero-img bg-cover bg-center flex justify-center items-center">
      <div className="absolute top-0 left-0 w-full h-full bg-transparent-gray"></div>
      <div className="flex flex-col items-center justify-center text-white mobile:mx-1">
        <h1 className="mb-3 z-10 font-black text-5xl mobile:text-4xl">UNIQUE SCENT</h1>
        <p className="mb-4 z-10 font-semibold text-lg text-center">
          A different fragrance for every mood and occasion
        </p>
        <Link to={"/shop"} className="z-10 hover:shadow-btn-shadow">
          <button className="font-semi-bold text-black bg-very-light-pink px-5 py-1">
            SHOP NOW
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
