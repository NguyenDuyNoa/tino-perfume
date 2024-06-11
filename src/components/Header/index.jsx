import React, { useEffect, useState } from "react";
import SearchField from "../SearchField";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import SearchItem from "../SearchField/SearchItem";
import { searchProductByName } from "../../redux/slices/productSlice";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const Header = ({ userInfor }) => {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [searchText, setChangeSearchText] = useState("");
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const { searchList } = useSelector((state) => state.product);

  const token = localStorage.getItem("token");

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  const totalItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfor");
    window.location.reload();
  };

  const onChangeSearchText = (e) => {
    setChangeSearchText(e.target.value);
  };

  useEffect(() => {
    dispatch(searchProductByName(searchText));
  }, [searchText, dispatch]);

  return (
    <div>
      <div className="w-full xl:h-[70px] h-[50px] bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex justify-between xl:px-20 px-5 items-center">
        <p className="xl:text-xl font-semibold text-base">
          Chào mừng bạn đến với Tino Perfume!
        </p>
        <div className=" font-semibold">
          {token ? (
            <div className="flex gap-10">
              <p>
                Xin chào ,
                <span className="font-bold">
                  {userInfor?.fullName}
                </span>
              </p>
              <div className="cursor-pointer" onClick={handleLogout}>
                Đăng xuất
              </div>
            </div>
          ) : (
            <div className="xl:flex gap-10 hidden">
              <Link to={"/login"}>Đăng nhập</Link>
              <Link to={"/register"}>Đăng ký</Link>
            </div>
          )}
        </div>
      </div>
      <div className="w-full xl:h-[200px] flex items-center justify-between px-5 xl:px-20 bg-white	">
        <img className=" w-20 h-20  xl:w-40 xl:h-40" src="./img/logo.png" alt="" />
        <div className="relative">
          <SearchField
            width="150px"
            value={searchText}
            onChange={onChangeSearchText}
          />
          <div className=" w-full max-h-[288px] bg-white border border-gray-300 absolute top-15 z-50 overflow-hidden">
            <section>
              <div className="mx-auto max-w-screen-xl z-100">
                <div>
                  {searchList.length > 0 &&
                    searchList.map((item, index) => (
                      <SearchItem item={item} key={index} />
                    ))}
                </div>
                {searchList.length === 0 && searchText !== "" && (
                  <div className="flex items-center gap-x-4 cursor-pointer ">
                    <p className="text-center p-4 sm:px-6 lg:px-8 ">
                      Không tìm thấy sản phẩm
                    </p>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="relative w-10 inline-block">
            <div onClick={() => setIsOpenCart(!isOpenCart)}>
              <ShoppingCartOutlinedIcon fontSize="large" />
              <div className=" absolute -top-2 right-0 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full w-5 h-5 text-center leading-5 text-xs">
                {totalItems || 0}
              </div>
            </div>
            <div
              className={`absolute z-30 min-w-[300px] mt-2.5 right-0 bg-white shadow-lg ${isOpenCart ? "visible" : "invisible"
                } cursor-pointer`}
            >
              <div>
                <h3 className=" text-lg py-4 px-5 border-b border-[#f1f1f1] border-solid font-medium">
                  Giỏ hàng của tôi
                </h3>
                <ul className="px-5 overflow-y-scroll max-h-[250px] touch-pinch-zoom	">
                  <div className="max-h-[250px] relative h-full max-w-full">
                    <div className="relative mr-5 w-auto h-auto">
                      {cart.length > 0 &&
                        cart.map((item, index) => (
                          <li
                            className="list-none py-5 border-b border-[#f1f1f1] border-solid	box-border"
                            key={index}
                          >
                            <img
                              className="float-left w-20 max-w-full h-auto align-middle	"
                              src={item.img}
                              alt=""
                            />
                            <div className="overflow-hidden pl-2.5">
                              <h5 className="text-base font-medium">
                                {item.name}
                              </h5>
                              <div className="text-sm text-[#888888] ">
                                <span className="uppercase">{item.size}</span>
                              </div>
                              <span className="text-base">
                                {item.price.toLocaleString()}đ
                              </span>
                              <span className="text-base text-[#888888] ">
                                (x{item.quantity})
                              </span>
                              <button
                                onClick={() =>
                                  dispatch(cartActions.removeCart(item))
                                }
                              >
                                <DeleteIcon
                                  sx={{
                                    fontSize: "24px",
                                    fill: "#ccc",
                                    display: "inline-block",
                                    float: "right",
                                    top: 0,
                                    cursor: "pointer",
                                  }}
                                />
                              </button>
                            </div>
                          </li>
                        ))}
                    </div>
                  </div>
                </ul>
                <div className="py-4 px-5 overflow-hidden">
                  <span className="text-sm font-semibold">Tổng tiền :</span>
                  <span className="text-xl font-semibold">
                    {totalPrice.toLocaleString() || 0}đ
                  </span>
                </div>
                <div className=" font-semibold text-xs flex justify-around mb-5">
                  <Link
                    to="/cart"
                    className="uppercase w-[120px] border border-gray-300 border-solid py-2 px-5 rounded-full"
                  >
                    Giỏ hàng
                  </Link>
                  <button className="uppercase w-[120px] border border-gray-300 border-solid py-2 px-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                    Thanh toán
                  </button>
                </div>
              </div>
            </div>
          </div>
          {token ? (
            <img
              className="w-10 h-10 rounded-full"
              src={
                userInfor?.avatar ||
                "https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"
              }
              alt="not-found"
            />
          ) : (
            <PersonIcon fontSize="large" style={{ fill: "#06b6d4" }} />
          )}
          {
            userInfor?.isAdmin && (
              <Link to='/admin/user-management'>
                <AdminPanelSettingsIcon/>
              </Link>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
