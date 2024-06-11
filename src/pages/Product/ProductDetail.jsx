/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import Chips from "../../components/Chips";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { filterProductById } from "../../redux/slices/productSlice";
import Loader from "../../components/Loader/Loader";
import { cartActions } from "../../redux/slices/cartSlice";
import Notification from "../../components/Alert";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { listProducts, isLoading } = useSelector((state) => state.product);
  const { isSuccess , cartMessage} = useSelector((state) => state.cart);

  const userInfor = JSON.parse(localStorage.getItem("userInfor"));

  useEffect(() => {
    dispatch(filterProductById(productId));
  }, [productId,dispatch])

  const handleAddtoCart = (item) => {
    if(!userInfor) {
      alert('Chưa đăng nhập, khum cho mua nha!!');
    }else {
      dispatch(cartActions.addToCart({...item,quantity : quantity}));
    }
  };

  const handleDestroyErr = () => {
    dispatch(cartActions.destroyerror());
  }

  const increment = () => {
    const newQuantity =quantity + 1
    setQuantity(newQuantity);
  }

  const decrement = () => {
    let newQuantity = quantity - 1;
    if(newQuantity === 0) {
      setQuantity(1);
    }else {
      setQuantity(newQuantity);
    }
  }

  return (
    <div>
      {isLoading && <Loader />}
      {listProducts.length > 0 &&
        listProducts.map((item, index) => (
          <section
            className="text-gray-700 overflow-hidden bg-white"
            key={index}
          >
            <div className="container px-5 py-10 mx-auto">
              <p className="mb-5 lg:w-4/5 mx-auto cursor-pointer">
                <Link to="/">Trang chủ |</Link> <b>{item.name}</b>
              </p>
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img
                  alt="not-found"
                  className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                  src={item.img}
                />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 lg:mt-0">
                  <h2 className="text-sm text-gray-500 tracking-widest">
                    Tino Perfume
                  </h2>
                  <h1 className="text-gray-900 text-3xl font-medium mb-1">
                    {item.name}
                  </h1>
                  <div>
                    <Chips name={item.gender} />
                  </div>
                  <div className="mt-5">
                    <p className="leading-relaxed">
                      <b>Thương hiệu:</b> {item.gender}
                    </p>
                    <p className="leading-relaxed">
                      <b>Size:</b> {item.size}
                    </p>
                    <p className="leading-relaxed">
                      <b>Hương Đầu:</b> {item.topNotes}
                    </p>
                    <p className="leading-relaxed">
                      <b>Hương Giữa:</b> {item.middleNotes}
                    </p>
                    <p className="leading-relaxed">
                      <b>Hương Cuối:</b> {item.baseNotes}
                    </p>
                  </div>
                  <p className="leading-relaxed mt-5 max-h-[300px]">
                    {item.desc}
                  </p>

                  <div className="flex justify-between mt-5">
                    <div className="h-10 w-32">
                      <label className="w-full text-gray-700 text-sm font-semibold">
                        Số lượng
                      </label>
                      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                        <button onClick={decrement} className=" bg-white border border-gray-300 text-gray-600 hover:text-white hover:bg-[#3b82f6] h-full w-20 rounded cursor-pointer outline-none">
                          <span className="text-2xl font-thin">-</span>
                        </button>
                        <input
                          disabled
                          className="text-center w-full bg-gray-white font-semibold text-md flex items-center text-gray-700"
                          value={quantity}
                        />
                        <button onClick={increment} className=" bg-white border border-gray-300 text-gray-600 hover:text-white hover:bg-[#3b82f6] h-full w-20 rounded cursor-pointer outline-none">
                          <span className="text-2xl font-thin">+</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-5">
                    <p className="font-medium text-2xl text-gray-900 mt-5">
                      {item.price.toLocaleString()}đ
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleAddtoCart(item)}
                        className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded"
                      >
                        Thêm vào giỏ hàng
                      </button>
                      <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                        Mua ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      {isSuccess && (
        <Notification
          show={isSuccess}
          message={cartMessage}
          type={"success"}
          handleDestroyErr={handleDestroyErr}
        />
      )}
    </div>
  );
};

export default ProductDetail;
