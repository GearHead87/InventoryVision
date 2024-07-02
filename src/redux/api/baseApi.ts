import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
	reducerPath: 'baseApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
	tagTypes: ['product'],
	endpoints: (builder) => ({
		getAllProducts: builder.query({
			query: () => {
				return { url: '/products', method: 'GET' };
			},
		}),
		getProductDetails: builder.query({
			query: (id) => {
				return { url: `/products/${id}`, method: 'GET' };
			},
		}),
		getCategoriesName: builder.query({
			query: () => {
				return { url: `/products/categories`, method: 'GET' };
			},
		}),
	}),
});

export const { useGetAllProductsQuery, useGetProductDetailsQuery, useGetCategoriesNameQuery } = baseApi;
