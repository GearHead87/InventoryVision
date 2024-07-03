import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface IProduct {
	id: number;
	title: string;
	description: string;
	category: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	tags: string[];
	brand: string;
	sku: string;
	weight: number;
	dimensions: {
		width: number;
		height: number;
		depth: number;
	};
	warrantyInformation: string;
	shippingInformation: string;
	availabilityStatus: string;
	reviews: {
		rating: number;
		comment: string;
		date: string;
		reviewerName: string;
		reviewerEmail: string;
	}[];
	returnPolicy: string;
	minimumOrderQuantity: number;
	meta: {
		createdAt: string;
		updatedAt: string;
		barcode: string;
		qrCode: string;
	};
	images: string[];
	thumbnail: string;
}

export interface IUpdateProductValues {
	title?: string;
	description?: string;
	category?: string;
	price?: number;
	discountPercentage?: number;
	rating?: number;
	stock?: number;
	tags?: string[];
	brand?: string;
	sku?: string;
	weight?: number;
	dimensions?: {
		width?: number;
		height?: number;
		depth?: number;
	};
	reviews?: {
		rating: number;
		comment: string;
		date: string;
		reviewerName: string;
		reviewerEmail: string;
	}[];
	warrantyInformation?: string;
	shippingInformation?: string;
	availabilityStatus?: string;
	returnPolicy?: string;
	minimumOrderQuantity?: number;
	images?: string[];
	thumbnail?: string;
}

export const baseApi = createApi({
	reducerPath: 'baseApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
	tagTypes: ['product'],
	endpoints: (builder) => ({
		getAllProducts: builder.query<IProduct[], void>({
			query: () => ({
				url: '/products',
				method: 'GET',
			}),
		}),
		getProductDetails: builder.query<IProduct, number>({
			query: (id) => ({
				url: `/products/${id}`,
				method: 'GET',
			}),
		}),
		updateProduct: builder.mutation<
			IProduct,
			{ id: number; updatedValues: IUpdateProductValues }
		>({
			query: ({ id, updatedValues }) => ({
				url: `/products/${id}`,
				method: 'PATCH',
				body: updatedValues,
			}),
		}),
	}),
});

export const {
	useGetAllProductsQuery,
	useGetProductDetailsQuery,
	useGetCategoriesNameQuery,
	useUpdateProductMutation,
} = baseApi;
