import { configureStore } from '@reduxjs/toolkit';
import contactFilterSlice from './contactFilterSlice';
import contactSlice from './contactSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const LS_KEY = 'Contacts';

const persistConfig = {
  key: LS_KEY,
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactSlice);

export const store = configureStore({
  reducer: {
    contact: persistedReducer,
    filter: contactFilterSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
