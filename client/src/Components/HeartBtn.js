import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default props => {
  const { isLiked, handleClick} = props;
    if (!isLiked)
    return (
      <span style={{ fontSize: 23}} onClick={handleClick}>
        <FaRegHeart />{" "}
      </span>
    );
    else
    return (
      <span style={{ fontSize: 23, color: "red" }} onClick={handleClick}>
        <FaHeart />{" "}
      </span>
    );
  
};
