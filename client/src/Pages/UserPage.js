import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkIfLoggedOn,
  updateUserImg
} from "../store/actions/actionCreators";
import userService from "../services/user-service";
import Loading from "../Components/Loading";
import { filterStyles, getFilterStyle } from "../services/utils/filters";

const UserPage = props => {
  const dispatch = useDispatch();
  const { userId } = props.match.params;
  const currUserId = useSelector(state => state.user._id);
  const [userData, setUserData] = useState("");
  const myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "explority",
      uploadPreset: "instaclone",
      multiple: false,
      maxFileSize: 3500000
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        setUserData({ ...userData, userImg: result.info.secure_url });
        dispatch(
          updateUserImg({ userId: currUserId, userImg: result.info.secure_url })
        );
      }
    }
  );

  useEffect(() => {
    dispatch(checkIfLoggedOn());
    const fetchUserData = async () => {
      try {
        const res = await userService.fetchUserData({ userId });
        setUserData(res.data);
      } catch (e) {
        console.log(e, "faild to load fata from server");
      }
    };
    fetchUserData();
  }, []);
  const handleImgClick = () => {
    if (currUserId === userData._id) {
      myWidget.open();
    }
  };
  if (!userData) return <Loading />;
  else
    return (
      <section className="user-page fade-in">
        <div className="user-page-container">
          <div className="user-section">
            <div className="user-img" onClick={handleImgClick}>
              <img src={userData.userImg} alt="..." />
            </div>
            <div className="user-details">
              <h2>{userData.username}</h2>
              <ul>
                <li>
                  {userData.posts.length} <p>post</p>
                </li>
                <li>
                  {userData.follow.length} <p>followers</p>{" "}
                </li>
                <li>
                  {userData.followers.length} <p>following</p>
                </li>
              </ul>
              <h3>{userData.email}</h3>
            </div>
          </div>

          <div className="wrapper">
            <div className="user-posts-container">
              {userData.posts.map((post, i) => {
                return (
                  <div className="img-container" key={i}>
                    <img
                      src={post.fileUrl}
                      style={getFilterStyle(filterStyles[post.currFilter])}
                      alt="..."
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
};
export default UserPage;
