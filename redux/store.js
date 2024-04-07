import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { playlistsReducer } from "./slices/playlistSlice";
import { favoritesTracksReducer } from "favoriteTrackSlice";
import { playerReduser } from "./slices/playerSlice";

const persistConfig = {
  key: "roo",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  playlists: playlistsReducer,
  favoriteTracks: favoritesTracksReducer,
  player: playerReduser,
});

const reducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export default { store, persistor };
