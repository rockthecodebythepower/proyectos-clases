import React from 'react'
import { useParams } from "react-router-dom";
import "./EditProduct.css"

const EditProduct = ({ isDarkProp, productsProp, setProductsProp }) => {

    const params = useParams();

    console.log(params.id);

    console.log("SOY EDITPRODUCT Y ME RE-RENDERIZO");

  return (
    <div>EditProduct</div>
  )
}

export default EditProduct