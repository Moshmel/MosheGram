import React from "react";
import LazyLoad from "react-lazyload";
import FeedPost from "./FeedPost";
import SmLoader from './SmLoader'
export default (props) => {
  const { isConnected,feedPosts, user, handleAddComment, handleLikeClick } = props;
  const { userImg, username} = user;
  const userId = user._id;
  const currentUserInfo = { userId, username, userImg };

  return (
    <section className="">
      
      {feedPosts.map((post, i) => {
        //check if the post liked by the user
        return (
          <LazyLoad
            key={i}
            placeholder={<SmLoader/>}
            height={100}
            offset={[100, 100]}
          >
            <FeedPost
              key={i}
              post={post}
              handleLikeClick={handleLikeClick}
              currentUserInfo={currentUserInfo}
              handleAddComment={handleAddComment}
              isConnected={isConnected}
            />
          </LazyLoad>
        );
      })}
    </section>
  );
};
