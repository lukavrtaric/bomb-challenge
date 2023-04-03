import type React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "~/store";
import Board from "~/components/board/Board";
import GameStatus from "~/components/game/GameStatus";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <div className='border-[16px] border-black bg-[#698ef9] p-4'>
                    <h1 className='mb-4 text-2xl text-center text-slate-200'>Boom Challenge</h1>
                    <Board />
                    <GameStatus />
                </div>
            </PersistGate>
        </Provider>
    );
};

export default App;
