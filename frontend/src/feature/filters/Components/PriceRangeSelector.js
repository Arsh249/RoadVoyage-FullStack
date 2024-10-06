import { Slider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedPriceRange } from "../redux/slice";
import { priceRangeSelector } from "../redux/selectors";

export const PriceRangeSelector = () => {
  const { range, selectedRange } = useSelector(priceRangeSelector);

  const dispatch = useDispatch();

  const onChangeRange = (value) => {
    dispatch(updateSelectedPriceRange(value));
  };

  return (
    <div className="section">
      <span className="title">Price Range</span>
      <div style={styles.fraic}>
        <span>{selectedRange[0]}</span>
        <span>{selectedRange[1]}</span>
      </div>
      <Slider
        range
        min={range[0]}
        max={range[1]}
        defaultValue={[selectedRange[0], selectedRange[1]]}
        onChangeComplete={onChangeRange}
      />
      <div style={styles.fraic}>
        <span>{range[0]}</span>
        <span>{range[1]}</span>
      </div>
    </div>
  );
};

const styles = {
  fraic: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#000",
  },
};
