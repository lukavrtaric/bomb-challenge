import type React from "react";
import { useSelector, useDispatch } from "react-redux";
import { type RootState } from "~/store";
import { flipTile } from "~/store/gameSlice";
import Tile from "~/components/tile/Tile";

const Board: React.FC = () => {
    const board = useSelector((state: RootState) => state.game.board);
    const dispatch = useDispatch();

    const handleTileClick = (row: number, col: number) => {
        dispatch(flipTile({ row, col }));
    };

    return (
        <div className='grid place-content-center'>
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className='flex'>
                    {row.map((tile, colIndex) => (
                        <Tile
                            key={colIndex}
                            dataTestId={`tile-${rowIndex}-${colIndex}`}
                            tile={tile}
                            onClick={() => handleTileClick(rowIndex, colIndex)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Board;
