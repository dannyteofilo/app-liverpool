import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import authSlice from './features/auth';
import { authApi } from './api/auth';
import loadingSlice from './features/loading';
import { characterApi } from './api/characters';

import persistConfig from './storage'; 

const persistedAuthSlice = persistReducer(persistConfig, authSlice);

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [characterApi.reducerPath]: characterApi.reducer,
    auth: persistedAuthSlice,
    loading: loadingSlice,
  },
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });

    return middleware.concat(authApi.middleware, characterApi.middleware);
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatcher = typeof store.dispatch;

setupListeners(store.dispatch);
