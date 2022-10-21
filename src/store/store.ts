import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from 'redux-persist';
import { Reducer } from '../assets/const';
import { dataReducer } from './slices/data-slice';
import { appReducer } from './slices/app-slice';

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: [Reducer.Data]
};

export const RootReducer = combineReducers({
  [Reducer.App]: appReducer,
  [Reducer.Data]: dataReducer,
});

export const persistedReducer = persistReducer(persistConfig, RootReducer);

export type TypeRootState = ReturnType<typeof RootReducer>;


export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
