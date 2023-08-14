import genreReducer from "./genreSlice";
import gameReducer from "./gameSlice";
import sidebarReducer from "./sidebarSlice";
import storeReducer from "./storeSlice";
import creatorReducer from "./creatorSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        genre: genreReducer,
        game: gameReducer,
        sidebar: sidebarReducer,
        store: storeReducer,
        creator: creatorReducer
    }
});

export default store;
