import gameReducer, { flipTile, restartGame } from "./gameSlice";
import { type GameState, TileType as TileEnum } from "~/types";

const initialState: GameState = {
    board: [[{ type: TileEnum.SMILEY, isRevealed: false }]],
    consecutiveSmileys: 0,
    consecutiveBombs: 0,
    wins: 0,
    losses: 0,
};

it("should handle flipTile action", () => {
    const rowIndex = 0;
    const colIndex = 0;
    const nextState = gameReducer(initialState, flipTile({ row: rowIndex, col: colIndex }));

    expect(nextState.board[rowIndex][colIndex].isRevealed).toBeTruthy();
    expect(nextState.consecutiveSmileys).toBe(1);
    expect(nextState.consecutiveBombs).toBe(0);
});

it("should handle restartGame action", () => {
    const stateAfterFlip = gameReducer(initialState, flipTile({ row: 0, col: 0 }));
    const nextState = gameReducer(stateAfterFlip, restartGame());

    nextState.board.forEach((row) =>
        row.forEach((tile) => {
            expect(tile.isRevealed).toBeFalsy();
        }),
    );
    expect(nextState.consecutiveSmileys).toBe(0);
    expect(nextState.consecutiveBombs).toBe(0);
});
