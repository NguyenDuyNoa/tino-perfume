import React, { useEffect } from "react";
import CategoryItem from "./CategoryItem";
import PageLayout from "../../components/Layout/PageLayout";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";

const Category = ({ name, type}) => {
  const { isLoading } = useSelector((state) => state.product);
  // useEffect(() => {

  // })

  return (
    <div>
      <PageLayout>
        {isLoading && <Loader/>}
        <CategoryItem name={name} type={type} />
      </PageLayout>
    </div>
  );
};

export default Category;
