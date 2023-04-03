export interface GameState {
    board: Tile[][];
    consecutiveSmileys: number;
    consecutiveBombs: number;
    wins: number;
    losses: number;
}

export interface Tile {
    type: TileType;
    isRevealed: boolean;
}

export enum TileType {
    SMILEY = "😃",
    BOMB = "💥",
    RESET = "🌀",
}

export interface SurroundingTileCounts {
    smileys: number;
    bombs: number;
}
