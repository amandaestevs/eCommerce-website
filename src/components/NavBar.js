import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { handleCart } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

function NavBar({ page }) {
  const [isMobileNav, setIsMobileNav] = useState(true);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const dispatch = useDispatch();
  
  const getWidth = () => {
    if (window.innerWidth <= "600") {
      setIsMobileNav(true);
    } else {
      setIsMobileNav(false);
    }
  };

  window.addEventListener("resize", getWidth);

  useEffect(() => {
    getWidth();
  }, []);

  const handleMenuIconClick = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const bgColor = page === "home" ? "bg-transparent" : "bg-darker-blue";
  return (
    <nav
      className={`w-full h-[8vh] sticky z-20 top-0 left-0 flex justify-center py-2 text-white ${bgColor}`}
    >
      <div className="w-11/12 flex justify-between items-center">
        <div>
          <span className="text-2xl">
            <Link to={"/"} className="logo">
              FakeStore
            </Link>
          </span>
        </div>

        {isMobileNav ? (
          <div>
            {isMobileNavOpen ? (
              <AiOutlineClose
                onClick={handleMenuIconClick}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <div className="flex items-center gap-x-3">
                <div>
                  <AiOutlineShoppingCart
                    className="text-2xl cursor-pointer relative"
                    onClick={() => dispatch(handleCart({ type: "open" }))}
                  />
                </div>
                <BiMenu
                  onClick={handleMenuIconClick}
                  className="text-2xl cursor-pointer"
                />
              </div>
            )}
          </div>
        ) : (
          <div>
            <ul className="flex justify-between items-center gap-x-4">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/shop"}>Shop</Link>
              </li>
              <div>
                <AiOutlineShoppingCart
                  className="text-xl cursor-pointer"
                  onClick={() => dispatch(handleCart({ type: "open" }))}
                />
              </div>
            </ul>
          </div>
        )}

        {isMobileNavOpen && (
          <motion.div
            className="w-full h-[20vh] flex justify-center absolute right-0 top-[8vh] bg-light-blue z-100"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
          >
            <ul className="flex flex-col items-center w-11/12 py-5">
              <li className="mt-3 mb-3 text-black">
                <Link to={"/"} onClick={() => isMobileNavOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="mb-3 text-black">
                <Link to={"/shop"} onClick={() => isMobileNavOpen(false)}>
                  Shop
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
