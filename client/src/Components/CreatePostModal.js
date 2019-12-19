import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../store/actions/actionCreators";

import { filterStyles, getFilterStyle } from "../services/utils/filters";
import ImgFilterPreview from "./ImgfilterPreview";

export default props => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const currFilter = useSelector(state => state.currFilter);
  const handleClose = props.handleClick;
  const [fileUrl, setFileUrl] = useState("");
  const [postText, setPostText] = useState("");

  useEffect(() => {
    if (!fileUrl) {
      /*cloudinary widget for uploading posts  */
      const myWidget = window.cloudinary.createUploadWidget(
        {
          cloudName: "explority",
          uploadPreset: "instaclone",
          multiple: false,
          maxFileSize: 3500000
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            setFileUrl(result.info.secure_url);
          }
        }
      );
    
      myWidget.open();
      /*end of widget */
    }
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const userId = user._id;
    const { userImg, username } = user;
    dispatch(
      addPost({ postText, currFilter, fileUrl, userId, userImg, username })
    );
    handleClose();
  };
  return (
    <section className="create-post-modal ">
      {fileUrl && (
        <section className="wrapper">
          <div className="modal-backdrop" onClick={handleClose}></div>

          <form className="create-post-container" onSubmit={handleSubmit}>
            <div className="upper-section">
              <div className="main-img-container">

              <img
                
                src={fileUrl}
                style={getFilterStyle(filterStyles[currFilter])}
                alt="..."
                />
                </div>
              <div className="text-section">
                <h1>Moshegram</h1>
                <textarea
                  placeholder="Add some thoughts..."
                  onChange={e => setPostText(e.target.value)}
                />
              </div>
            </div>
            <ImgFilterPreview img={fileUrl} />
            <div className="post-btn-container">
              <button type="submit" className="post-btn">
                post
              </button>
            </div>
          </form>
        </section>
      )}
    </section>
  );
};
