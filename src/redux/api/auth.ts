import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const url='https://authserver-production-ed7f.up.railway.app'

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
