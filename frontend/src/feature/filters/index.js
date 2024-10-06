import { useSelector } from "react-redux";
import { Accordion } from "./Components/Accordion";
import { SearchItems } from "./Components/SearchItems";
import { filterKeys } from "./redux/slice";
import { PriceRangeSelector } from "./Components/PriceRangeSelector";
import { BusTypeSelector } from "./Components/BusTypeSelector";
import { DepartureTimeSelector } from "./Components/DepartureTimeSelector";
import {
  boardingAndDroppingPointsSelector,
  uniqueBusPartnersSelector,
} from "./redux/selectors";
import "./Styles/filters.scss";

const Filters = () => {
  const { boardingPoints, droppingPoints } = useSelector(
    boardingAndDroppingPointsSelector
  );
  const buspartners = useSelector(uniqueBusPartnersSelector);

  return (
    <div className="filters-container">
      <BusTypeSelector />
      <PriceRangeSelector />
      <DepartureTimeSelector />
      <Accordion className="section" title="Bus Partner">
        <SearchItems
          placeholder="Search Bus partner"
          list={[...buspartners].map((i) => ({ stopId: i, name: i }))}
          identifier={filterKeys.BUS_PARTNER}
        />
      </Accordion>
      <Accordion className="section" title="Boarding Points">
        <SearchItems
          placeholder="Search boarding points"
          list={boardingPoints}
          identifier={filterKeys.BOARDING_POINTS}
        />
      </Accordion>
      <Accordion className="section" title="Dropping Points">
        <SearchItems
          placeholder="Search dropping points"
          list={droppingPoints}
          identifier={filterKeys.DROPPING_POINTS}
        />
      </Accordion>
    </div>
  );
};

export default Filters;
