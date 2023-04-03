import { createBoard } from "./boardUtils";
import { TileType } from "~/types";

describe("createBoard definition", () => {
    const board = createBoard();

    it("should create a 6x6 board", () => {
        expect(board.length).toBe(6);
        board.forEach((row) => {
            expect(row.length).toBe(6);
        });
    });

    it("should have 12 smileys, 12 bombs, and 12 resets", () => {
        let smileys = 0;
        let bombs = 0;
        let resets = 0;

        board.forEach((row) => {
            row.forEach((tile) => {
                if (tile.type === TileType.SMILEY) smileys++;
                if (tile.type === TileType.BOMB) bombs++;
                if (tile.type === TileType.RESET) resets++;
            });
        });

        expect(smileys).toBe(12);
        expect(bombs).toBe(12);
        expect(resets).toBe(12);
    });

    it("should have all tiles initially hidden", () => {
        board.forEach((row) => {
            row.forEach((tile) => {
                expect(tile.isRevealed).toBe(false);
            });
        });
    });
});
