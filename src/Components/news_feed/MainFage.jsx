import React, { useRef, useState } from "react";
import "./MainFage.css";
import Assets from "./assets/Logo 1.png";
import Crown from "./assets/crown 1.png";
import Ellipse from "./assets/Ellipse 16.png";
import Photo from "./assets/1 1.png";
import Video from "./assets/2 1.png";
import Event from "./assets/3 1.png";
import Article from "./assets/4 1.png";
import Arrow from "./assets/Angle-down.png";
import Avatar from "./assets/Avatar.png";
import Post from "./Post";
import { UserAuth } from "../../Context/Context";
import { getAuth, updateProfile } from "firebase/auth";

export default function FileUpload() {
  const [text, setText] = useState("");
  const [posts, setPosts] = useState([]);

  const { user } = UserAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    setPosts([
      ...posts,
      {
        content: text,
        postId: posts.length + 1,
      },
    ]);
    console.log(posts);
    setText("");
  };

  const handleDelete = (postId) => {
    setPosts(posts.filter((post) => post.postId !== postId));
  };

  const fileInputRef = useRef(null);

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected File:", file);
      // const auth = getAuth();
      // updateProfile(auth.currentUser, {
      //   photoURL: file,
      // });
    }
  };

  return (
    <div className="impDiv">
      <header>
        <img className="logoImage" src={Assets} alt="Logo 1" />
        <div className="headerLinks">
          <ul>
            <li className="pseudoElement">Home</li>
            <li>My Network</li>
            <li>Jobs</li>
            <li>Messaging</li>
            <li>Notifications</li>
          </ul>
          <div>
            <button className="buttonImg" onClick={handleFileUpload}></button>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
        </div>
      </header>

      <main>
        <div>
          <div className="userInformation">
            <div className="users">
              <div className="userPhotoName">
                <div className="userPhoto"></div>
                <h4 className="userName">{user.displayName}</h4>
              </div>
              <div className="line"></div>
              <div className="userInformation-paragraphs">
                <p>Who’s viewed your profile</p>
                <p>Impressions of your post</p>
              </div>
              <div className="line secondGrayLine"></div>
              <div className="userInformation-paragraphs">
                <p>My items</p>
                <p>Invitations</p>
                <p>Groups</p>
                <p>Events</p>
                <p>Followed Hashtags</p>
              </div>
            </div>
          </div>
          <div>
            <div className="crownDiv">
              <div className="access">
                <h4 className="text-access">
                  Access exclusive tools & insights
                </h4>
                <div className="photoAndText">
                  <img className="crownImg" src={Crown} alt="Crown 1" />
                  <p>Try Premium for free</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="postPart">
          <form onSubmit={handleSubmit} className="postSomething">
            <img className="profilePhoto" src={Ellipse} alt="Ellipse 16" />

            <input
              className="postInput"
              type="text"
              placeholder="Post something..."
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
          </form>
          <div className="iconsLinks">
            <div className="icons">
              <img src={Photo} alt="1 1" />
              <h5>Photo</h5>
            </div>
            <div className="icons">
              <img src={Video} alt="2 1" />
              <h5>Video</h5>
            </div>
            <div className="icons">
              <img src={Event} alt="3 1" />
              <h5>Event</h5>
            </div>
            <div className="icons">
              <img src={Article} alt="4 1" />
              <h5>Write article</h5>
            </div>
          </div>
          <div className="sortBy">
            <div className="secLine"></div>
            <h5 className="sort">Sort by:</h5>
            <div className="top">
              <h4 className="sort Top">Top</h4>
              <img className="arrow" src={Arrow} alt="Angle-down" />
            </div>
          </div>
          {posts.map((post) => {
            return (
              <Post
                key={post.postId}
                post={post}
                posts={posts}
                handleDelete={handleDelete}
                userName={user.displayName}
              />
            );
          })}
        </div>
        <div className="addToFeedPart">
          <div className="feed">
            <h4>Add to your feed</h4>
            <div className="feedLists">
              <div className="lists">
                <img src={Avatar} alt="Avatar.png" />
                <div className="secLists">
                  <p className="feedUsers">ANZ OILFIELD SERVICES </p>
                  <p className="prg">Company, Oil & Energy</p>
                  <div className="follow">Follow</div>
                </div>
              </div>
              <div className="lists">
                <img src={Avatar} alt="Avatar.png" />
                <div className="secLists">
                  <p className="feedUsers">ANZ OILFIELD SERVICES </p>
                  <p className="prg">Company, Oil & Energy</p>
                  <div className="follow">Follow</div>
                </div>
              </div>
              <div className="lists">
                <img src={Avatar} alt="Avatar.png" />
                <div className="secLists">
                  <p className="feedUsers">ANZ OILFIELD SERVICES </p>
                  <p className="prg">Company, Oil & Energy</p>
                  <div className="follow">Follow</div>
                </div>
              </div>
              <div className="lists">
                <img src={Avatar} alt="Avatar.png" />
                <div className="secLists">
                  <p className="feedUsers">ANZ OILFIELD SERVICES </p>
                  <p className="prg">Company, Oil & Energy</p>
                  <div className="follow">Follow</div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <p className="recomendation">View all recommendations</p>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
