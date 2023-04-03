import type React from "react";
import ReactCardFlip from "react-card-flip";
import { TileType, type Tile } from "~/types";

interface Props {
    tile: Tile;
    onClick: () => void;
    dataTestId?: string;
}

const TileCard: React.FC<Props> = ({ tile, onClick, dataTestId }) => {
    const handleClick = () => {
        if (!tile.isRevealed) {
            onClick();
        }
    };

    return (
        <ReactCardFlip isFlipped={tile.isRevealed} flipDirection='horizontal'>
            <button
                data-testid={`${dataTestId}-front`}
                className={`${!tile.isRevealed ? 'is-visible': ''} m-[2px] h-[100px] w-[100px] justify-center rounded-[5%] bg-[#fbeee0] align-middle text-[40px]`}
                onClick={handleClick}
            ></button>

            <button
                data-testid={`${dataTestId}-back`}
                className={`${tile.isRevealed ? 'is-visible': ''} m-[2px] h-[100px] w-[100px] justify-center rounded-[5%] bg-[#fbeee0] align-middle text-[40px]`}
                onClick={handleClick}
            >
                {tile.type === TileType.SMILEY && TileType.SMILEY}
                {tile.type === TileType.BOMB && TileType.BOMB}
                {tile.type === TileType.RESET && TileType.RESET}
            </button>
        </ReactCardFlip>
    );
};

export default TileCard;
