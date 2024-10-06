import { Checkbox, Empty, Input } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStop } from "../redux/slice";
import "../Styles/search-item.scss";

export const SearchItems = ({ list, placeholder, identifier }) => {
  const [searchValue, setSearchValue] = useState("");
  const selectedStops = useSelector((state) => state.filters[identifier]);
  const dispatch = useDispatch();

  const filteredItems = list.filter((item) =>
    item.name.toLowerCase().includes(searchValue)
  );

  const onCheckInput = (stopId, add) => {
    dispatch(updateStop({ add, stopId, identifier }));
  };

  return (
    <div className="search-box">
      <span className="selected-items">
        {Object.keys(selectedStops).length} items selected
      </span>
      <Input
        className="search-input"
        prefix={<span className="material-icons">search</span>}
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
      />
      <div className="items">
        {filteredItems.length === 0 ? (
          <Empty description="no data found" />
        ) : (
          filteredItems.map((item) => {
            return (
              <div key={item.stopId} className="search-item">
                <Checkbox
                  checked={selectedStops[item.stopId]}
                  id={item.stopId}
                  onChange={(e) => onCheckInput(item.stopId, e.target.checked)}
                />
                <label htmlFor={item.stopId}>{item.name}</label>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
