import React from "react";
import "./HeaderLink.css";
import { Link } from "react-router-dom";

const HeaderLink = ({ textProp, pathProp, isDarkProp }) => {
  return (
    <Link
      to={pathProp}
      className={isDarkProp ? "header-link__dark" : "header-link__light"}
    >
      {textProp}
    </Link>
  );
};

export default HeaderLink;
