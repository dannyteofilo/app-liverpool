import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const url='https://rickandmortyapi.com'

export const characterApi = createApi({
    reducerPath: "characters",
    baseQuery: fetchBaseQuery({ baseUrl: `${url}/api` }),
    endpoints: (builder) => ({
        getCharacters: builder.query({
            query: (data) => ({
                url:`/character/${data}`,         
            }),
        }),    
    }),
});

export const { useGetCharactersQuery } = characterApi
