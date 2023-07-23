import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";
import { fetchAsyncGameDetails, fetchAsyncGames } from "../utils/gameUtils";

const initialState = {
    games: [],
    gamesStatus: STATUS.IDLE,
    gamesSingle: [],
    gamesSingleStatus: STATUS.IDLE,
    gamesDetails: [],
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchAsyncGames.pending, (state, action) => {
            state.gamesStatus = STATUS.LOADING;
        })

        builder.addCase(fetchAsyncGames.fulfilled, (state, action) => {
            state.games = action.payload;
            state.gamesStatus = STATUS.SUCCEEDED;
        })

        builder.addCase(fetchAsyncGames.rejected, (state, action) => {
            state.gamesStatus = STATUS.FAILED;
        })

        builder.addCase(fetchAsyncGameDetails.pending, (state, action) => {
            state.gamesSingleStatus = STATUS.LOADING;
        })

        builder.addCase(fetchAsyncGameDetails.fulfilled, (state, action) => {
            state.gamesSingle = action.payload;
            state.gamesSingleStatus = STATUS.SUCCEEDED;
        })

        builder.addCase(fetchAsyncGameDetails.rejected, (state, action ) => {
            state.gamesSingleStatus = STATUS.FAILED;
        })
    },

    reducers: {
        
    }
});

export const selectAllGames = (state) => state.game.games.results;
export const selectAllGamesStatus = (state) => state.game.gamesStatus;
export const selectGamesNextPage = (state) => state.game.games.next;
export const selectGamesPrevPage = (state) => state.game.games.previous;
export const selectSingleGame = (state) => state.game.gamesSingle;
export const selectSingleGameStatus = (state) => state.game.gamesSingleStatus; 
export const selectGamesDetails = (state) => state.game.gamesDetails;

export default gameSlice.reducer;