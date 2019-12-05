import React, { useState } from "react";
export default props => {
  const { fileUrl, style } = props;
  const [openModal, setOpenModal] = useState(false);
  const handleImgClick = () => {
    setOpenModal(true);
  };
  const handleModalClick=(e)=>{
e.stopPropagation();
e.preventDefault();
setOpenModal(false);
  }
  return (
    <section className="post-img">
      <img src={fileUrl} style={style} alt="..." onClick={handleImgClick} />

      {openModal && (
        <div className="img-modal slide-in-fwd-center"onClick={handleModalClick}>
          <img src= {fileUrl} style={style} alt="..." onClick={handleModalClick}  />
        </div>
      )}
    </section>
  );
};
