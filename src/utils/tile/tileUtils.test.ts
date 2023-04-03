import { countSurroundingTiles } from "~/utils";
import { TileType, type Tile } from "~/types";

describe("countSurroundingTiles definition", () => {
    const testBoard = [
        [{ type: TileType.SMILEY }, { type: TileType.BOMB }, { type: TileType.RESET }],
        [{ type: TileType.RESET }, { type: TileType.SMILEY }, { type: TileType.BOMB }],
        [{ type: TileType.BOMB }, { type: TileType.RESET }, { type: TileType.SMILEY }],
    ] as Tile[][];

    it("should count smileys and bombs correctly", () => {
        const { smileys, bombs } = countSurroundingTiles(testBoard, 1, 1);
        expect(smileys).toBe(2);
        expect(bombs).toBe(3);
    });

    it("should handle edges of the board correctly", () => {
        const { smileys, bombs } = countSurroundingTiles(testBoard, 0, 0);
        expect(smileys).toBe(1);
        expect(bombs).toBe(1);
    });

    it("should handle corners of the board correctly", () => {
        const { smileys, bombs } = countSurroundingTiles(testBoard, 2, 2);
        expect(smileys).toBe(1);
        expect(bombs).toBe(1);
    });
});
