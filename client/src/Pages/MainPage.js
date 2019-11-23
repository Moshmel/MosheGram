import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FeedPostContainer from "../Components/FeedPostContainer";
import UserPreviewMainPage from "../Components/UserPreviewMainPage";
import Suggestions from "../Components/Suggestions";
import Loading from "../Components/Loading";
import {
  fetchFeedPosts,
  addCommentToPost,
  onLikePress
} from "../store/actions/actionCreators";
const MainPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const feedPosts = useSelector(state => state.feedPosts);
  const isConnected = useSelector(state => state.isConnected);

  const userId = user._id;
  const { userImg, username } = user;

  useEffect(() => {
    dispatch(fetchFeedPosts());
  }, []);

  const handleAddComment = (postId, commentText) => {
    dispatch(
      addCommentToPost({ postId, commentText, userId, userImg, username })
    );
  };

  const handleLikeClick = data => {
    const { postId, postLikes } = data;
    let userLikes = user.likes;
    const idx = userLikes.findIndex(el => el.postId === postId);
    if (idx === -1) {
      userLikes.unshift({ type: "post", postId });
    } else {
      userLikes.splice(idx, 1);
    }
    const postIdx = feedPosts.findIndex(el => el._id === postId);
    dispatch(onLikePress({ userLikes, postLikes, postId, postIdx, userId }));
  };

  return (
    <section className="main-page fade-in ">
      <div className="wrapper-main-page">
        <div className="posts-container">
          {feedPosts.length > 0 ? (
            <FeedPostContainer
              isConnected={isConnected}
              feedPosts={feedPosts}
              user={user}
              handleLikeClick={handleLikeClick}
              handleAddComment={handleAddComment}
            />
          ) : (
            <Loading />
          )}
        </div>
        {isConnected && feedPosts.length > 0 && (
          <div className="user-preview-main-wrapper">
            <div className="user-preview-main-container">
              <div>
                <UserPreviewMainPage
                  username={user.username}
                  userImg={userImg}
                  email={user.email}
                />
                <Suggestions />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MainPage;
