import type React from "react";
import { useSelector, useDispatch } from "react-redux";
import { type RootState } from "~/store";
import { restartGame } from "~/store/gameSlice";
import { TileType } from "~/types";

const GameStatus: React.FC = () => {
    const { wins, losses, consecutiveSmileys, consecutiveBombs } = useSelector((state: RootState) => state.game);
    const dispatch = useDispatch();

    const handleRestart = () => {
        dispatch(restartGame());
    };

    return (
        <div className='mt-4 flex justify-between text-slate-200'>
            <div className='flex flex-col'>
                <p className='text-sm'>Wins: {wins}</p>
                <p className='text-sm'>Losses: {losses}</p>
            </div>

            <button
                onClick={handleRestart}
                className='inline-flex w-20 justify-center rounded-md border border-transparent bg-[#0033cc] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#0040ff] focus:outline-none'
            >
                Restart
            </button>

            <div className='flex flex-col'>
                <p className='text-sm'>{TileType.SMILEY} {consecutiveSmileys}</p>
                <p className='text-sm'>{TileType.BOMB} {consecutiveBombs}</p>
            </div>
        </div>
    );
};

export default GameStatus;
