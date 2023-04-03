import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "~/store/gameSlice";
import Board from "./Board";

const store = configureStore({
    reducer: {
        game: gameReducer,
    },
});

test("rendering initial board with 36 tiles", () => {
    const { container } = render(
        <Provider store={store}>
            <Board />
        </Provider>,
    );

    const tiles = container.getElementsByClassName("react-card-flip");
    expect(tiles.length).toBe(36);
});
