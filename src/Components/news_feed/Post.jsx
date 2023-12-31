import React from "react";
import Times from "./assets/Times.png";
import Component from "./assets/Component 3.png";
import Coment from "./assets/Coment.png";

const Post = ({ post, handleDelete, userName, uploadImage, defaultImage }) => {
  return (
    <div className="postCard">
      <div className="userNameAndPhoto">
        {uploadImage ? (
          <img
            src={URL.createObjectURL(uploadImage)}
            className="profile-photo"
          />
        ) : (
          <img className="profile-photo" src={defaultImage} />
        )}
        <div className="userNameText">
          <h3 className="name">{userName}</h3>
          <p className="userPrg">CEO, Innovation, Technology</p>
        </div>
        <div className="closeArrow">
          <div className="arrowC">
            <img src={Component} alt="Component 3" />
            <img
              src={Times}
              alt="Times.png"
              onClick={() => handleDelete(post.id)}
            />
          </div>
          <div className="follow">Follow</div>
        </div>
      </div>
      <p className="statusPart">{post.postText}</p>
      <div className="imageSrc"></div>
      <div className="comment">80 Comments</div>
      <div className="line lin"></div>
      <div className="comments">
        <img src={Coment} alt="Coment.png" />
        <p className="cmn">Coment</p>
      </div>
    </div>
  );
};

export default Post;
