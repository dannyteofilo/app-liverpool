import {configureStore} from '@reduxjs/toolkit';
import { setupListeners } from "@reduxjs/toolkit/query/react";
import authSlice from './features/auth'
import {authApi} from './api/auth'
import loadingSlice from './features/loading'
export const store = configureStore({
    reducer:{
        [authApi.reducerPath]: authApi.reducer,
        auth: authSlice,
        loading: loadingSlice,
    },
    middleware: (getDefaultMiddleware:any) =>
    getDefaultMiddleware().concat(authApi.middleware),
})

export type RootState=ReturnType<typeof store.getState>
export type AppDispatcher=typeof store.dispatch

setupListeners(store.dispatch);