import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default props => {
  const { comment } = props;
  const [ isLiked, setIsLiked ]  = useState(false);
  return (
    <li className="comment">
      <span>
        {" "}
        <h2>{comment.username}</h2> <p>{comment.commentText}</p>
      </span>
      {!isLiked ? (
        <span style={{ fontSize: 12,color:"#aaaaaa" }} onClick={() => setIsLiked(!isLiked)}>
          <FaRegHeart />
        </span>
      ) : (
        <span
          style={{ fontSize: 12, color: "red" }}
          onClick={() => setIsLiked(!isLiked)}
        >
          
          <FaHeart />{" "}
        </span>
      )}

    </li>
  );
  // if (!isLiked)
  //   return (
  //     <span style={{ fontSize: 12 }} onClick={handleClick}>
  //       <FaRegHeart />{" "}
  //     </span>
  //   );
  // else
  //   return (
  //     <span style={{ fontSize: 12, color: "red" }} onClick={handleClick}>
  //       <FaHeart />{" "}
  //     </span>
  //   );
};
