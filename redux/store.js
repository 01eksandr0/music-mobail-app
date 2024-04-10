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

import { playerReduser } from "./slices/playerSlice";
import { favoritesTracksReducer } from "./slices/favoriteTracksSlice";
import { modalCreateReducer } from "./slices/modalCreateSlice";
import { modalMoreInfoReducer } from "./slices/modalMoreInfoSlice";
import { modalAddInPlaylistReducer } from "./slices/modalAddInPlaylistSlice";

const persistConfig = {
  key: "12www12j",
  storage: AsyncStorage,
  whitelist: ["playlists"],
};

const rootReducer = combineReducers({
  playlists: playlistsReducer,
  favoriteTracks: favoritesTracksReducer,
  player: playerReduser,
  moreInfo: modalMoreInfoReducer,
  modalCreate: modalCreateReducer,
  modalAddPlaylist: modalAddInPlaylistReducer,
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
