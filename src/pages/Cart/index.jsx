import React from "react";
import PageLayout from "../../components/Layout/PageLayout";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  const totalItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <PageLayout>
      <p className="my-5 lg:w-4/5 mx-auto cursor-pointer">
        <Link to="/">Trang chủ |</Link> <b>Giỏ hàng của tôi</b>
      </p>
      <div className="container mx-auto mt-10">
        <div className="flex justify-center my-10">
          <div className="w-[90%] bg-white px-10 py-10 border border-gray-500">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Giỏ hàng của tôi</h1>
              <h2 className="font-semibold text-2xl">{totalItems} sản phẩm</h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Sản phẩm
              </h3>
              <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                Số lượng
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                Giá
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                Tổng
              </h3>
            </div>
            {cart.length > 0 &&
              cart.map((item, index) => (
                <div
                  className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                  key={index}
                >
                  <div className="flex w-2/5">
                    <div className="w-20">
                      <img className="h-24" src={item.img} alt="" />
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow">
                      <span className="font-bold text-sm">{item.name}</span>
                      <span className="text-red-500 text-xs">{item.brand}</span>
                      <span
                        onClick={() => dispatch(cartActions.removeCart(item))}
                        className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer"
                      >
                        Xóa
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center w-1/5">
                      <svg
                      onClick={() => {
                        item.quantity <= 1 ?dispatch(cartActions.removeCart(item)) :dispatch(cartActions.decrement(item))
                      }}
                        className="fill-current text-gray-600 w-3"
                        viewBox="0 0 448 512"
                      >
                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                    <input
                      className="mx-2 border text-center w-8"
                      type="text"
                      value={item.quantity}
                    />
                      <svg
                            onClick={() => dispatch(cartActions.increment(item))}
                        className="fill-current text-gray-600 w-3"
                        viewBox="0 0 448 512"
                      >
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                  </div>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    {item.price.toLocaleString()}đ
                  </span>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    {(item.price * item.quantity).toLocaleString()}đ
                  </span>
                </div>
              ))}
            <div className="flex justify-end justify-centerư border-b pb-8 mr-[88px]">
              <h1 className="w-1/5 font-bold text-xl mr-5">Tổng tiền:</h1>
              <h2 className="font-semibold text-sm mt-2">
                {totalPrice.toLocaleString()}đ
              </h2>
            </div>
            <Link
              to="/"
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Tiếp tục mua sắm
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Cart;
