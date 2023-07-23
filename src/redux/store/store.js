import genreReducer from "./genreSlice";
import filterReducer from "./filterSlice";
import gameReducer from "./gameSlice";
import searchReducer from "./searchSlice";
import sidebarReducer from "./sidebarSlice";
import storeReducer from "./storeSlice";
import creatorReducer from "./creatorSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        genre: genreReducer,
        filter: filterReducer,
        game: gameReducer,
        search: searchReducer,
        sidebar: sidebarReducer,
        store: storeReducer,
        creator: creatorReducer
    }
});

export default store;
