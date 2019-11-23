import React from 'react'
export default(props)=>{
    const {username,userImg,email}=props;
    return(
    <div className="user-preview-main">
    <div className="user-img-main-container">
    <img src={userImg} alt="..."/>
    </div>
    <div className="user-right-section">
        <h4>{username}</h4>
        <h5>{email}</h5>
    </div>
    </div>)

}
