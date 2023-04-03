import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "~/store/gameSlice";
import GameStatus from "./GameStatus";
import { TileType } from "~/types";

const store = configureStore({
    reducer: {
        game: gameReducer,
    },
});

test("rendering game status", () => {
    render(
        <Provider store={store}>
            <GameStatus />
        </Provider>,
    );
    expect(screen.getByText(/Wins:/i)).toBeInTheDocument();
    expect(screen.getByText(/Losses:/i)).toBeInTheDocument();
    expect(screen.getByText(/Restart/i)).toBeInTheDocument();
});

test("triggers restart when restart button clicked", () => {
    const { getByText } = render(
        <Provider store={store}>
            <GameStatus />
        </Provider>,
    );

    const restartButton = getByText(/Restart/i);
    fireEvent.click(restartButton);

    expect(getByText(`${TileType.SMILEY} 0`)).toBeInTheDocument();
    expect(getByText(`${TileType.BOMB} 0`)).toBeInTheDocument();
});
