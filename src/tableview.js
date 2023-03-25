import React from "react";
import { useState } from "react";
import "./styles/tableview.css";
import Productfilter from "./productfil";
import TableImage from "./table";

function Tableview({ message }) {
  const [table, setTable] = useState(true);

  return (
    <div>
      <div className="table_view">
        <div
          className="icon"
          onClick={() => {
            setTable(!table);
          }}
        >
          <img src="../assets/icons.png" className="w-10" alt="icon" />
        </div>
      </div>
      {table ? (
        <Productfilter message={message} />
      ) : (
        <TableImage message={message} />
      )}
    </div>
  );
}

export default Tableview;
