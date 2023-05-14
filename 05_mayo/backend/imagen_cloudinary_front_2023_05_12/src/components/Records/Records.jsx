import { useEffect, useState } from "react";
import "./Records.css";

const Records = ({getAllRecords, records}) => {
  

  useEffect(() => {
    getAllRecords()
  }, []);

  return (
    <div>
      {records.map((record) => {
        return (
          <div key={record._id}>
            <h2>{record.nombre}</h2>
            <img src={record.record} />
          </div>
        );
      })}
    </div>
  );
};

export default Records;
