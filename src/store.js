import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { product } from './Services/Product';

export const store = configureStore({
  reducer: {
    [product.reducerPath]: product.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(product.middleware),
});

setupListeners(store.dispatch);