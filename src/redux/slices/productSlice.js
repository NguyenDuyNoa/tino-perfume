import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const getProductLists = createAsyncThunk("getProductLists", async () => {
  let res = await api.product.findAllProducts();
  return res.data;
});

export const filterProductById = createAsyncThunk(
  "filterProductById",
  async (id) => {
    let res = await api.product.filterProductById(id);
    return res.data;
  }
);

export const filterProductByGender = createAsyncThunk(
  "filterProductByGender",
  async (gender) => {
    let res = await api.product.filterProductByGender(gender);
    return  res.data;
  }
);

export const filterProductByGenderAndSort = createAsyncThunk(
  "filterProductByGenderAndSort",
  async (payload) => {
    let res = await api.product.filterProductByGenderAndSort(
      payload.gender,
      payload.type,
      payload.sort
    );
    return res.data;
  }
);

export const searchProductByName = createAsyncThunk(
  "searchProductByName",
  async (name) => {
      let res = await api.product.searchProductByName(name)
      if (name === '') {
          return {products : []}
      }else {
          return {products : res.data}
      }
  }
)

export const fetchProductsPage = createAsyncThunk(
  "fetchProductsPage",
  async (payload) => {
    const { gender, page, pageSize } = payload;
    const startItem = (page - 1) * pageSize;
    try {
      let originalPage = await api.product.filterProductByGender(gender);
      const res = await api.product.fetchProductsPage(
        gender,
        startItem,
        pageSize
      );
      return { products: res.data, totalCount: originalPage.data.length };
    } catch (error) {
      throw error;
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    listProducts: [],
    searchList : [],
    product: {},
    isError: false,
    productMessage: "",
    totalCount: 0,
  },
  extraReducers: (builder) => {
    builder.addCase(getProductLists.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProductLists.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listProducts = [...action.payload];
    });
    builder.addCase(getProductLists.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.productMessage = "Lỗi";
    });
    builder.addCase(filterProductById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(filterProductById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listProducts = [...action.payload];
    });
    builder.addCase(filterProductById.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.productMessage = "Lỗi";
    });
    builder.addCase(filterProductByGender.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(filterProductByGender.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listProducts = [...action.payload];
    });
    builder.addCase(filterProductByGender.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.productMessage = "Lỗi";
    });
    builder.addCase(filterProductByGenderAndSort.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(filterProductByGenderAndSort.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listProducts = [...action.payload];
    });
    builder.addCase(filterProductByGenderAndSort.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.productMessage = "Lỗi";
    });
    builder.addCase(fetchProductsPage.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = "";
    });
    builder.addCase(fetchProductsPage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listProducts = [...action.payload.products];
      state.totalCount = action.payload.totalCount;
    });

    builder.addCase(fetchProductsPage.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.error.message;
    });
    builder.addCase(searchProductByName.pending, (state) => {
      state.isLoading = true;
  })
  builder.addCase(searchProductByName.fulfilled, (state, action) => {
      state.isLoading = false;
      state.searchList = [...action.payload.products];
  })
  builder.addCase(searchProductByName.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.productMessage = 'Lỗi';
  })
  },
});
export default productSlice.reducer;
