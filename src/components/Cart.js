import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  calculateTotal,
  handleCart,
  clear,
} from "../redux/cartSlice";

function Cart() {
  const list = useSelector((state) => state.cart.cartItems);
  const { cartTotal } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const checkOutClicked = () => {
    alert('Thank you for your purchase!');
    dispatch((clear()))
    dispatch(calculateTotal())
  };

  const handleRemoveItem = (product) => {
    dispatch(removeItem(product));
    dispatch(calculateTotal());
  };

  const handleIncrease = (product) => {
    dispatch(increaseQuantity(product));
    dispatch(calculateTotal());
  };

  const handleDecrease = (product) => {
    dispatch(decreaseQuantity(product));
    dispatch(calculateTotal());
  };

  useEffect(() => {
    dispatch(calculateTotal());
  }, []);

  return (
    <motion.div
      className={
        "flex flex-col bg-white z-20 fixed top-0 right-0 w-2/3 max-w-[400px] h-screen p-3 overflow-y-scroll text-black mobile:w-[90%]"
      }
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
    >
      <div className="flex justify-between items-center p-2">
        <h2 className="font-bold text-xl">Cart</h2>
        <AiOutlineClose
          className="text-xl cursor-pointer"
          onClick={() => dispatch(handleCart({ type: "close" }))}
        />
      </div>

      <div className="p-3">
        {list.length === 0
          ? "No products"
          : list.map((product) => {
              return (
                <div
                  key={product.id}
                  className="grid grid-cols-cart-grid shadow-card-shadow mb-3"
                >
                  <div className="mr-3 flex items-center">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="h-full max-w-20 mobile:min-w-5"
                    />
                  </div>

                  <div className="flex flex-col gap-y-2 p-2">
                    <div className="flex items-center justify-between mr-2 gap-x-1">
                      <h3 className="font-bold">{product.name}</h3>
                      <AiOutlineClose
                        className="cursor-pointer text-xl"
                        onClick={() => handleRemoveItem(product)}
                      />
                    </div>
                    <p>{product.size}</p>

                    <div className="flex items-center justify-between mt-2 mr-2 gap-x-1">
                      <div className="flex justify-between items-center border-2 border-black max-w-[8rem] overflow-hidden rounded-lg sm-mobile:max-w-[6rem]">
                        <div
                          className="flex items-center justify-center p-2 cursor-pointer bg-gray-200 hover:bg-gray-300 sm-mobile:px-1"
                          onClick={() => handleDecrease(product)}
                        >
                          <AiOutlineMinus />
                        </div>
                        <input
                          type="number"
                          min="1"
                          value={product.quantity}
                          className="max-w-[60px] text-center outline-none p-1 sm-mobile:max-w-[40px]"
                          readOnly={true}
                        />
                        <div
                          className="flex items-center justify-center p-2 cursor-pointer bg-gray-200 hover:bg-gray-300 sm-mobile:px-1"
                          onClick={() => handleIncrease(product)}
                        >
                          <AiOutlinePlus />
                        </div>
                      </div>
                      <p className="font-bold">
                        $
                        {parseFloat(product.price * product.quantity).toFixed(
                          2
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

        {list.length > 0 && (
          <div>
            <div className="flex justify-between">
              <h3 className="font-bold">Total:</h3>
              <span>${cartTotal}</span>
            </div>
            <button
              className="w-full flex items-center justify-center bg-green-500 hover:bg-green-600 py-1 mt-2"
              onClick={checkOutClicked}
            >
              CHECKOUT
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Cart;
