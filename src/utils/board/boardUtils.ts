import { TileType, type Tile } from "~/types";

const boardSize = 6;
const smileysCount = 12;
const bombsCount = 12;
const resetsCount = 12;

const generateShuffledTileTypes = (): TileType[] => {
    const tileTypes: TileType[] = [];

    for (let i = 0; i < smileysCount; i++) {
        tileTypes.push(TileType.SMILEY);
    }

    for (let i = 0; i < bombsCount; i++) {
        tileTypes.push(TileType.BOMB);
    }

    for (let i = 0; i < resetsCount; i++) {
        tileTypes.push(TileType.RESET);
    }

    for (let i = tileTypes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tileTypes[i], tileTypes[j]] = [tileTypes[j] as TileType, tileTypes[i] as TileType];
    }

    return tileTypes;
};

export function createBoard(): Tile[][] {
    const shuffledTileTypes = generateShuffledTileTypes();

    const board: Tile[][] = [];

    for (let row = 0; row < boardSize; row++) {
        const currentRow: Tile[] = [];
        for (let col = 0; col < boardSize; col++) {
            currentRow.push({
                type: shuffledTileTypes[row * boardSize + col] as TileType,
                isRevealed: false,
            });
        }

        board.push(currentRow);
    }

    return board;
}