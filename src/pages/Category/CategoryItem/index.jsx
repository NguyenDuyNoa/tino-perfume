/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  filterProductByGenderAndSort,
  fetchProductsPage,
} from "../../../redux/slices/productSlice";
import ProductItem from "../../../components/Product/ProductItem";
import BasicPagination from "../../../components/Pagination";
import SingleSelect from "../../../components/Dropdown";
import { sortValue } from "../../../constant";

const CategoryItem = ({ name, type }) => {
  const [sort, setSort] = useState("");
  const { listProducts, totalCount } = useSelector((state) => state.product);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const pageSize = 12;
  const totalPages = Math.ceil(totalCount / pageSize);

  const fetchData = () => {
    dispatch(fetchProductsPage({gender :type, page: currentPage, pageSize: pageSize }));
  };

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
    fetchData();
  };

  useEffect(() => {
    setSort("");
    setCurrentPage(1);
  }, [type]);

  useEffect(() => {
    if (sort === "1") {
      dispatch(filterProductByGenderAndSort({ gender: type, type: "name", sort: "asc" }));
    } else if (sort === "2") {
      dispatch(filterProductByGenderAndSort({ gender: type, type: "name", sort: "desc" }));
    } else if (sort === "3") {
      dispatch(filterProductByGenderAndSort({ gender: type, type: "price", sort: "asc" }));
    } else if (sort === "4") {
      dispatch(filterProductByGenderAndSort({ gender: type, type: "price", sort: "desc" }));
    } else {
      fetchData();
    }
  }, [type, sort, currentPage, dispatch]);


  return (
    <div className="mb-20">
      <section className="text-gray-700 overflow-hidden bg-white">
        <div className="container px-5 py-10 mx-auto">
          <p className="mb-5 lg:w-4/5 mx-auto cursor-pointer">
            <Link to="/">Trang chủ |</Link> <b>{name}</b>
          </p>
          <div className="mb-5 lg:w-4/5 mx-auto border px-5 py-2 rounded-sm bg-gradient-to-r from-cyan-500 to-blue-500">
            <SingleSelect
              name="sort"
              options={sortValue}
              value={sort}
              placeholder="Sort"
              onChange={(e) => setSort(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <span className="text-3xl uppercase font-semibold border-b-4 border-cyan-500  mb-5">
              {name}
            </span>
          </div>
          <div className="grid mx-auto xl:grid-cols-4 xl:mx-20 md:grid-cols-3 grid-cols-1 gap-10 ">
            {listProducts.length > 0 &&
              listProducts.map((item, index) => {
                return <ProductItem item={item} key={index} />;
              })}
          </div>
        </div>
      </section>
      <div className="flex justify-center">
        <BasicPagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default CategoryItem;
