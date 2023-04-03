import { type SurroundingTileCounts, TileType, type Tile } from "~/types";

const getSurroundingTilePositions = (row: number, col: number): Array<[number, number]> => [
    [row - 1, col - 1],
    [row - 1, col],
    [row - 1, col + 1],
    [row, col - 1],
    [row, col + 1],
    [row + 1, col - 1],
    [row + 1, col],
    [row + 1, col + 1],
];

export const countSurroundingTiles = (board: Tile[][], row: number, col: number): SurroundingTileCounts => {
    const counts: SurroundingTileCounts = { smileys: 0, bombs: 0 };
    const positions = getSurroundingTilePositions(row, col);

    positions.forEach(([r, c]) => {
        if (r >= 0 && r < board.length && c >= 0 && c < board[r].length) {
            const tile: Tile = board[r][c];
            if (tile.type === TileType.SMILEY) {
                counts.smileys += 1;
            } else if (tile.type === TileType.BOMB) {
                counts.bombs += 1;
            }
        }
    });

    return counts;
};