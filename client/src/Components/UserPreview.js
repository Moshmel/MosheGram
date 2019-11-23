import React from "react";

export default props => {
  const { handleClick, username, img } = props;

  return (
    <div
      onClick={handleClick}
      style={{ display: "flex", alignItems: "center" }}
    >
      <div
        className="user-img-container"
        style={{ width: 31, height: 31, borderRadius: "50%", marginRight: 16 }}
      >
        <img src={img} alt="..."/>
      </div>
      <h2>{username}</h2>
    </div>
  );
};
