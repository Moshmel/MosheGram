import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazyload";
import HeartBtn from "./HeartBtn";
import Moment from "react-moment";
import { filterStyles, getFilterStyle } from "../services/utils/filters";
import Comment from "./Comment";
import SmLoader from './SmLoader';


const FeedPost = props => {
  const { handleAddComment, currentUserInfo, handleLikeClick,isConnected,post } = props;
  const {
    likes,
    currFilter,
    fileUrl,
    postText,
    timeStamp,
    userImg,
    username,
    _id
  } = post;
  const [postComments, setPostComments] = useState(props.post.comments);
  const [postLikes, setPostLikes] = useState(props.post.likes);
  const [isLiked, setIsLiked] = useState(false);
  const [commentText, setCommentText] = useState("");

  //check on mount if the user liked this post

  useEffect(() => {
    const idx = postLikes.findIndex(el => el.userId === currentUserInfo.userId);
    if (idx > -1) {
      setIsLiked(true);
    }
  }, []);

  const handleSubmit = e => {

    //update comment localy
    e.preventDefault();
    if(isConnected)
    {

      const tempComments = [...postComments, { ...currentUserInfo, commentText }];
      setPostComments(tempComments);
      //update on server
      handleAddComment(_id, commentText);
      setCommentText("");
    }
  };

  const handleLikePress = () => {
    if(isConnected){
      
      const postId = _id;
      let tempLikes = postLikes;
      //check if userid is in the postlikes and toggle it
      const idx = likes.findIndex(el => el.userId === currentUserInfo.userId);
      if (idx > -1) {
        tempLikes.splice(idx, 1);
        setPostLikes(tempLikes);
        setIsLiked(false);
      } else {
        tempLikes.push({ ...currentUserInfo });
        setPostLikes(tempLikes);
        setIsLiked(true);
      }
      //trigger parent function
      handleLikeClick({ postId, postLikes });
    }
    };
    return (
      <section className="feed-post">
      <div className="post-header">
        <div className="post-author">
          <div className="img-container">
            <img src={userImg} alt="..." />
          </div>
          <h2>{username}</h2>
        </div>

        <h3>
          {" "}
          <Moment fromNow>{timeStamp}</Moment>
        </h3>
      </div>
      <LazyLoad placeholder={<SmLoader/>}>
        <div className="img-container">
          <img
            src={fileUrl}
            style={getFilterStyle(filterStyles[currFilter])}
            alt="..."
            />
        </div>
      </LazyLoad>
      <div className="bottom-section">
        <div onClick={handleLikePress}>
          <HeartBtn isLiked={isLiked} />
        </div>
        <div><h4>{postLikes.length} likes</h4></div>

        <ul className="comment-section">
          <li>
            <span>
              <h2>{username} </h2>
              <p>{postText}</p>
            </span>
          </li>
          {postComments.length > 0 && (
            <div>
              {postComments.map((comment, i) => (
                <Comment key={i} comment={comment} />
              ))}
            </div>
          )}
          <li></li>
          <li></li>
        </ul>
      </div>
      <form className="add-comment" onSubmit={handleSubmit}>
        <input
          className=""
          type="text"
          placeholder="Add a comment..."
          value={commentText}
          onChange={e => setCommentText(e.target.value)}
        />
        <button
          type="submit"
          className={
            commentText
              ? "add-comment-btn comment-btn-active"
              : "add-comment-btn "
          }
        >
          Post
        </button>
      </form>
    </section>
  );
};

function areEqual(prevProps, nextProps) {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
}
export default React.memo(FeedPost, areEqual);
