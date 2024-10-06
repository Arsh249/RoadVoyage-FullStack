import { useDispatch } from "react-redux";
import Deck, { DeckTypes } from "./Deck";
import { toggleSeatSelection } from "../redux/slice";

const SeatLayout = ({ seatLayout, tourId, selectedPrice }) => {
  const dispatch = useDispatch();
  const onSelectSeat = (seat) => {
    dispatch(toggleSeatSelection({ tourId, seat }));
  };
  return (
    <div className="layout">
      {seatLayout.upperDeck && (
        <Deck
          deckName={DeckTypes.UPPER}
          layout={seatLayout.upperDeck}
          onSelectSeat={onSelectSeat}
          selectedPrice={selectedPrice}
        />
      )}
      <Deck
        deckName={DeckTypes.LOWER}
        layout={seatLayout.lowerDeck}
        onSelectSeat={onSelectSeat}
        selectedPrice={selectedPrice}
      />
    </div>
  );
};

export default SeatLayout;
