import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { playlistsReducer } from "./slices/playlistSlice";
import { favoritesTracksReducer } from "./slices/favoriteTrackSlice";
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
});

const persistor = persistStore(store);

export default { store, persistor };
