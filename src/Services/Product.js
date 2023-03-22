import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const product = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://run.mocky.io/v3' }),
    endpoints: (builder) => ({
      getProducts: builder.query({
        query: () => `7f02819f-8254-410a-b8af-ab98572bd26b`,
      }),
    }),
  })

export const { useGetProductsQuery } = product
