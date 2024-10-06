import Seat from "./Seat";
import "../Styles/Deck.scss";
import { SteeringIcon } from "../../../components/icons2";

export const DeckTypes = {
  LOWER: "LOWER",
  UPPER: "UPPER",
};

const Deck = ({ deckName, layout, onSelectSeat, selectedPrice }) => {
  let rows = 0,
    cols = 0;
  layout.forEach((seat) => {
    rows = Math.max(seat.row, rows);
    cols = Math.max(seat.column, cols);
  });
  rows++;
  cols++;
  const grid = Array(rows).fill([]);

  for (let i = 0; i < grid.length; i++) {
    grid[i] = Array(cols).fill(null);
  }
  layout.forEach((seat) => {
    grid[seat.row][seat.column] = seat;
  });
  return (
    <div className="deck">
      <div className="deck-name">
        {deckName === DeckTypes.LOWER && <SteeringIcon />}
        <h3>{deckName}</h3>
      </div>
      <div className="seats">
        {grid.map((row, index) => (
          <div key={index} className="row">
            {row.map((seat, idx) =>
              seat ? (
                <Seat
                  key={idx}
                  seat={seat}
                  onSelectSeat={onSelectSeat}
                  selectedPrice={selectedPrice}
                />
              ) : (
                <div key={idx} className="empty-space"></div>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};



export default Deck;
