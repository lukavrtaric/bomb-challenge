import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { TileType, type GameState } from "~/types";
import { countSurroundingTiles, createBoard } from "~/utils";

export const initialState: GameState = {
    board: createBoard(),
    consecutiveSmileys: 0,
    consecutiveBombs: 0,
    wins: 0,
    losses: 0,
};

const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        flipTile: (state, action: PayloadAction<{ row: number; col: number }>) => {
            const { row, col } = action.payload;
            const tile = state.board[row][col];
            tile.isRevealed = true;

            switch (tile.type) {
                case TileType.SMILEY:
                    state.consecutiveSmileys += 1;

                    if (state.consecutiveSmileys === 3) {
                        state.wins += 1;
                        toast.success("You are Winner!");
                        gameSlice.caseReducers.restartGame(state);
                    }
                    break;

                case TileType.BOMB:
                    state.consecutiveBombs += 1;

                    if (state.consecutiveBombs === 2) {
                        state.losses += 1;
                        toast.error("You are Loser!");
                        gameSlice.caseReducers.restartGame(state);
                    }
                    break;

                case TileType.RESET: {
                    state.consecutiveSmileys = 0;
                    state.consecutiveBombs = 0;

                    const surroundingTiles = countSurroundingTiles(state.board, row, col);
                    toast(`${TileType.SMILEY} = ${surroundingTiles.smileys} ${TileType.BOMB} = ${surroundingTiles.bombs}`);
                    break;
                }

                default:
                    break;
            }
        },
        restartGame: (state) => {
            state.board = createBoard();
            state.consecutiveSmileys = 0;
            state.consecutiveBombs = 0;
        },
    },
});

export const { flipTile, restartGame } = gameSlice.actions;

export default gameSlice.reducer;
