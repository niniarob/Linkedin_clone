
import React from "react";

const AddFeed = ({ img, name }) => {
  return (
    <div className="lists">
      <img
        className="feedPhoto"
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        alt="Avatar.png"
      />
      <div className="secLists">
        <p className="feedUsers">{name} </p>
        <p className="prg">Company, Oil & Energy</p>
        <div className="follow">Follow</div>
      </div>
    </div>
  );
};

export default AddFeed;

