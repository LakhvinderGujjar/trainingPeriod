import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";



function Beverage () {
  const options = [
    { label: "lassi", value: "lassi" },
    { label: "tea", value: "tea" },
    { label: "coffe", value: "coffee" },
    { label: "virgin mojito", value: "virgin mojito" },
    { label: "cold coffee", value: "cold coffee" },
    { label: "banana shake", value: "banana shake" },
    { label: "papaya shake", value: "papaya shake" },
  ];

  const [selected, setSelected] = useState([]);

  return (
    <div className="grocery">
      <h1>drinks????</h1>
      {/* <pre>{JSON.stringify(selected)}</pre> */}
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy={"Select"}
        isCreatable={true}
      />
    </div>
  );
  }
export default Beverage;
