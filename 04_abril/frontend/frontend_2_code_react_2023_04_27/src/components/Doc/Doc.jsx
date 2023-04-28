import React from "react";
import { doc } from "../../data/doc";
import "./Doc.css"
import Element from "../Element/Element";

const Doc = () => {
  return (
    <div className="docs">
      {doc.map((element) => {
        return (
          <Element element={element}/>
        );
      })}
    </div>
  );
};

export default Doc;
