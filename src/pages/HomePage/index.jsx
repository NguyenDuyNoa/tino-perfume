import React from "react";
import HomeProduct from "../../components/Product/HomeProduct";
import Carousel from "../../components/Slider";
import Loader from "../../components/Loader/Loader";
import { useSelector } from "react-redux";
import PageLayout from "../../components/Layout/PageLayout";

function HomePage() {
  const { isLoading } = useSelector((state) => state.product);

  return (
    <div className="relative">
      <PageLayout>
        {isLoading && <Loader />}
        <Carousel />
        <HomeProduct />
        <div className="mb-10"/>
      </PageLayout>
    </div>
  );
}

export default HomePage;
