import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import getImages from "../getImages";
import NavBar from "../components/NavBar";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addProduct, calculateTotal } from "../redux/cartSlice";
import Footer from "../components/Footer";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [sizes, setSizes] = useState([]);
  const [image, setImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const getProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/products/${id}`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProduct().then((data) => {
      setProduct(data);
      setSizes(data.sizes);
      setSelectedSize(data.sizes[0]);
    });
  }, []);

  useEffect(() => {
    const image = getImages(product.img);
    setImage(image);
  }, [product.img]);

  useEffect(() => {
    if (quantity <= 0) {
      setQuantity(1);
    }
  }, [quantity]);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    const productObject = {
      name: product.name,
      id: selectedSize._id,
      price: selectedSize.price,
      size: selectedSize.size,
      quantity: quantity,
      img: image,
    };
    dispatch(addProduct(productObject));
    dispatch(calculateTotal());
  };

  const sizeBoxStyle =
    "rounded-[50%] w-[50px] h-[50px] p-2 border-2 border-black flex items-center justify-center cursor-pointer hover:border-rose hover:text-rose";
  const selectedSizeBox =
    "rounded-[50%] w-[50px] h-[50px] p-2 border-2 border-rose flex items-center justify-center cursor-pointer hover:border-rose hover:text-rose";
  return (
    <div className="w-full flex flex-col items-center">
      <NavBar />
      <div className="w-8/12 my-10 p-2 flex justify-center gap-2 mobile:flex-col mobile:items-center">
        <div className="max-w-[50%] max-h-screen min-h-full">
          <img src={image} alt={product} />
        </div>

        <div className="flex flex-col p-2 gap-y-5 mr-3 ml-6 mb-2 mobile:items-center">
          <h2 className="font-semibold text-xl">{product.name}</h2>
          <p className="font-bold text-lg">${selectedSize.price}</p>
          <div className="flex gap-x-2">
            {sizes.map((size) => {
              return (
                <div
                  key={size._id}
                  className={`${
                    selectedSize === size ? selectedSizeBox : sizeBoxStyle
                  }`}
                  onClick={() => handleSizeChange(size)}
                >
                  <span>{size.size}</span>
                </div>
              );
            })}
          </div>
          <div className="w-full mobile:flex mobile:justify-center">
            <div className="flex justify-between items-center border-2 border-black max-w-[10rem] overflow-hidden">
              <div
                className="flex items-center justify-center p-2 cursor-pointer bg-gray-200 hover:bg-gray-300"
                onClick={() => setQuantity((current) => current - 1)}
              >
                <AiOutlineMinus />
              </div>
              <input
                type="number"
                min="1"
                value={quantity}
                className="max-w-[80px] text-center outline-none p-1"
                readOnly={true}
              />
              <div
                className="flex items-center justify-center p-2 cursor-pointer bg-gray-200 hover:bg-gray-300"
                onClick={() => setQuantity((current) => current + 1)}
              >
                <AiOutlinePlus />
              </div>
            </div>
          </div>
          <button
            className="p-1 border-2 border-rose max-w-xs w-40 hover:bg-rose cursor-pointer"
            onClick={handleAddToCart}
          >
            ADD TO CART
          </button>
          <Link to={"/shop"}>
            <div className="flex gap-x-2 items-center cursor-pointer">
              <MdOutlineArrowBackIosNew className="text-xl"/>
              <p>Go Back</p>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductPage;
