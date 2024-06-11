/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  findAllProducts: () => {
    return axios.get(`https://deploy-tino-perfume.vercel.app/products`);
  },
  filterProductById: (id) => {
    return axios.get(`https://deploy-tino-perfume.vercel.app/products?productId=${id}`);
  },
  filterProductByGender: (gender) => {
    return axios.get(`https://deploy-tino-perfume.vercel.app/products?gender=${gender}`);
  },
  filterProductByGenderAndSort: (gender,type,sort) => {
    return axios.get(`https://deploy-tino-perfume.vercel.app/products?gender=${gender}&_sort=${type}&_order=${sort}`);
  },
  fetchProductsPage: (gender,startItem, pageSize) => {
    return axios.get(`https://deploy-tino-perfume.vercel.app/products?gender=${gender}&_start=${startItem}&_limit=${pageSize}`);
  },
  searchProductByName: (name) => {
    return axios.get(`https://deploy-tino-perfume.vercel.app/products?name_like=${name}`);
  },
};