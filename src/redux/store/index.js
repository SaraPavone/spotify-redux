import { configureStore, combineReducers } from "@reduxjs/toolkit";
import songReducer from "../reducers/song.js";
import favoritesReducer from "../reducers/Favorites.js";

const mainReducer = combineReducers({
    songs: songReducer,
    favorites: favoritesReducer
});

const store = configureStore({
    reducer: mainReducer
});
export default store