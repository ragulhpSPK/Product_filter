import React from "react";
import "./styles/searchbox.css";

import Tableview from "./tableview";

function SearchBox() {
  const [message, setMessage] = React.useState([]);

  const handleChange = (event) => {
    console.log(event.target.value);
    setMessage(event.target.value);

    // console.log("value is:", event.target.value);
  };
  const value = message;

  return (
    <div>
      <div className="search_box">
        <input
          type="search"
          placeholder="Enter Your product Name"
          onChange={handleChange}
        />
      </div>
      <div>
        <Tableview message={value} />
      </div>
    </div>
  );
}

export default SearchBox;
