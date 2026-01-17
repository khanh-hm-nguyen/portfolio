import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import themeReducer from './themeSlice';
import languageReducer from './languageSlice';

// Combine Reducers
const rootReducer = combineReducers({
  theme: themeReducer,
  language: languageReducer,
});

// Persist Config
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['theme', 'language'], 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure Store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;