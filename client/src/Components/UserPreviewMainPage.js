import React from 'react'
import { NavLink,withRouter } from "react-router-dom";
const UserPreviewMainPage=(props)=>{
    const {username,userImg,email,userId}=props;
    return(
        
        <div className="user-preview-main">
    <div className="user-img-main-container">
    <img src={userImg} alt="..."/>
    </div>
    <div className="user-right-section">
            <NavLink to={`/user/${userId}`}>
        <h4>{username}</h4>
        <h5>{email}</h5>
    </NavLink>
    </div>
    </div>)

}

export default withRouter(UserPreviewMainPage);
