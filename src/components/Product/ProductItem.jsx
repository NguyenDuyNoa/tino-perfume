import React from "react";
import StarIcon from "../Icon/StarIcon";
import { Link } from "react-router-dom";

const ProductItem = ({ item }) => {
  return (
    <Link to={`/products/${item.productId}`}>
      <div className="max-w-2xl mx-auto hover:shadow-2xl">
        <div className="bg-white shadow-md rounded-lg max-w-sm min-h-[500px]">
          <div className="flex justify-center">
            <img
              className="w-[250px] h-[250px] rounded-t-lg p-8"
              src={item.img}
              alt="not found"
            />
          </div>
          <div className="px-5 pb-5">
            <h3 className="uppercase font-bold text-2xl">{item.brand}</h3>
            <h3 className="text-gray-900 font-semibold text-xl tracking-tight min-h-[56px] ">
              {item.name}
            </h3>
            <div className="flex items-center mt-2.5 mb-5">
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
                5.0
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900">
                {item.price.toLocaleString()}₫
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
