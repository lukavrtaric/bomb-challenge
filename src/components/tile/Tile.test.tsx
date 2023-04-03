import { render, fireEvent, screen } from "@testing-library/react";
import { type Tile, TileType as TileEnum } from "~/types";
import TileCard from "./Tile";

describe("tileCard", () => {
    const dataTestId = "tile-0-0";
    const dataTestIdFront = "tile-0-0-front";
    const dataTestIdBack = "tile-0-0-back";

    const tile: Tile = {
        type: TileEnum.SMILEY,
        isRevealed: false,
    };

    const handleTileClick = (tile: Tile) => {
        tile.isRevealed = true;
    };

    it("should render the front content initially", () => {
        render(<TileCard dataTestId={dataTestId} tile={tile} onClick={() => handleTileClick(tile)} />);
        const frontContentElement = screen.getByTestId(dataTestIdFront);
        expect(frontContentElement.classList.contains('is-visible')).toBe(true);
    });

    it("should not render the back content initially", () => {
        render(<TileCard dataTestId={dataTestId} tile={tile} onClick={() => handleTileClick(tile)} />);
        const backContentElement = screen.queryByTestId(dataTestIdBack);
        expect(backContentElement.classList.contains('is-visible')).toBe(false);
    });

    it("should flip the card when clicked", async () => {
        const { rerender } = render(<TileCard dataTestId={dataTestId} tile={tile} onClick={() => handleTileClick(tile)} />);
        const frontContentElement = screen.getByTestId(dataTestIdFront);
        const backContentElement = screen.getByTestId(dataTestIdBack);

        fireEvent.click(frontContentElement);

        rerender(<TileCard dataTestId={dataTestId} tile={tile} onClick={() => handleTileClick(tile)} />);
        
        expect(backContentElement).toHaveTextContent(TileEnum.SMILEY);
        expect(frontContentElement.classList.contains('is-visible')).toBe(false);
        expect(backContentElement.classList.contains('is-visible')).toBe(true);
    });
});
