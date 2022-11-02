import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getImages from "../getImages";

function ProductCard({ product }) {
  const [image, setImage] = useState();
  useEffect(() => {
    const image = getImages(product.img);
    setImage(image);
  }, [product.img]);

  return (
    <div className={`flex flex-col w-[200px] rounded-md shadow-card-shadow mobile:mx-1 mobile:w-[180px] sm-mobile:w-[150px]`}>
      <Link to={`/product/${product._id}`} className="w-full cursor-pointer">
        <div className="w-full h-52 rounded-t-md overflow-hidden">
          <img
            src={image}
            alt="Perfume"
            className="w-full h-full"
          />
        </div>
      </Link>
      <Link 
        to={`/product/${product._id}`}
        className="w-full h-full cursor-pointer"
      >
        <div className="flex flex-col justify-end px-2 py-1 h-full">
          <h3 className="mb-4 h-1/2 font-semibold">{product.name}</h3>
            <p className="flex items-center h-1/2 font-bold">${product.sizes[0].price}</p>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
