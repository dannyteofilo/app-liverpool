import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const url='http://localhost:8080'

export const authApi = createApi({
    reducerPath: "authRequest",
    baseQuery: fetchBaseQuery({ baseUrl: `${url}/api` }),
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (data) => ({
                url: '/users',
                method: 'POST',
                body: data,
            }),
        }),
        signIn: builder.mutation({
            query: (data) => ({
                url: '/auth/login',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useSignUpMutation, useSignInMutation } = authApi
