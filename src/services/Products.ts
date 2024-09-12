import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from '../Interface/IProduct'


export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    endpoints: (builder) => ({
      getProducts: builder.query<IProduct[], void>({
        query: () => `products`,
      }),
      getProductByID: builder.query<IProduct, number>({
        query: (id) => `products/${id}`
      }),
      getProductCategories: builder.query<string[], void>({
        query: () => `products/categories`
      }),
      getCategoryItems: builder.query<IProduct[], string>({
        query: (category) => `products/category/${category}`
      })
    }),
  })


  export const { useGetProductsQuery, useGetProductByIDQuery, useGetProductCategoriesQuery, useGetCategoryItemsQuery } = productApi;