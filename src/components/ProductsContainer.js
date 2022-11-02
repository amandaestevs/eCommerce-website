import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

function ProductsContainer() {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(0);
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('All');

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/products");
      const data = res.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData().then((data) => {
      setProducts(data);
      const brandsArray = data.map((item) => item.brand);
      const uniqueBrands = [...new Set(brandsArray)];
      setBrands(uniqueBrands);
    });
  }, []);

  const filterByCategory = (productList) => {
    let result;

    if (selected === 0) return (result = productList);
    if (selected === 1) {
      const newList = productList.filter(
        (product) => product.category === "feminine"
      );
      return (result = newList);
    }
    if (selected === 2) {
      const newList = productList.filter(
        (product) => product.category === "masculine"
      );
      return (result = newList);
    }
    return result;
  };

  const filterByBrand = (productList) => {
     if(selectedBrand === 'All') return productList
     const filteredList = productList.filter(item => item.brand === selectedBrand);
     return filteredList
  }

  const filterProducts = (productList) => {
     const filteredByCategory = filterByCategory(productList);
     const filteredResults = filterByBrand(filteredByCategory);

     return filteredResults
  }

  const selectedBoxStyle = "rounded-lg px-2 py-1 border-2 cursor-pointer hover:bg-gray-300 border-blue";
  const boxStyle =
    "rounded-lg px-2 py-1 border-2 border-gray-700 cursor-pointer hover:bg-gray-300";
  const selectInputStyle = "rounded-lg px-2 py-1 border-2 border-gray-700 cursor-pointer";
  
  return (
    <div className="w-full mt-6 mb-5 flex flex-col items-center">
      <div className="flex flex-wrap justify-center gap-3 mb-8 mt-2 mobile:px-1">
        <div
          className={`${selected === 0 ? selectedBoxStyle : boxStyle}`}
          onClick={() => setSelected(0)}
        >
          All
        </div>
        <div
          className={`${selected === 1 ? selectedBoxStyle : boxStyle}`}
          onClick={() => setSelected(1)}
        >
          Women's Perfume
        </div>
        <div
          className={`${selected === 2 ? selectedBoxStyle : boxStyle}`}
          onClick={() => setSelected(2)}
        >
          Men's Perfume
        </div>
        <select className={`${selectInputStyle}`} defaultValue={'All'} onChange={(e) => setSelectedBrand(e.target.value)}>
          <option value="All">All Brands</option>
          {brands.map((brand, i) => {
            return <option key={i} value={brand}>{brand}</option>;
          })}
        </select>
      </div>

      <div className="w-4/5 flex flex-wrap justify-center gap-3 mobile:w-full mobile:gap-x-0 mobile:px-1">
        {filterProducts(products).map((product) => {
          return <ProductCard product={product} key={product._id} />;
        })}
      </div>
    </div>
  );
}

export default ProductsContainer;
