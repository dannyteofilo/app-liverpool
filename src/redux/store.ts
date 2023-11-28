import {configureStore} from '@reduxjs/toolkit';
import authReducer from './features/auth'

export const store = configureStore({
    reducer:{
        auth:authReducer
    }
})

export type RootState=ReturnType<typeof store.getState>
export type AppDispatcher=typeof store.dispatch