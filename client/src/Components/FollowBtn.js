import React, { useState } from "react";
export default () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };


  return (
    <span>
      {isFollowing ? (
        <button className="following-btn" onClick={handleClick}>
          Following
        </button>
      ) : (
        <button className="follow-btn" onClick={handleClick}>
        Follow
      </button>
      )}
    </span>
  );
};
