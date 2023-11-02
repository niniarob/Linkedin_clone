import React, { useEffect, useRef, useState } from "react";
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
import { colRef, db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import AddFeed from "./AddFeed";
import {
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  Firestore,
  query,
  orderBy,
  serverTimestamp,
  collection,
  limit,
} from "firebase/firestore";

export default function FileUpload() {
  const [text, setText] = useState("");
  const [posts, setPosts] = useState([]);

  const { user, logout, auth } = UserAuth();
  const navigate = useNavigate();

  const q = query(colRef, orderBy("createdAt", "desc"));
  const feedQuery = query(collection(db, "Users"), limit(4));

  const [users, setUsers] = useState([]);

  useEffect(
    () =>
      onSnapshot(feedQuery, (snapshot) =>
        setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  useEffect(
    () =>
      onSnapshot(q, (snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(posts);

    const addPost = addDoc(colRef, {
      postText: text,
      createdAt: serverTimestamp(),
    });

    setText("");
  };

  const [uploadImage, setUploadImage] = useState(null);
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const toProfilePage = () => {
    navigate("/ProfilePage");
  };

  const handleLogOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  console.log(user.photoURL, "outside");
  console.log(uploadImage);

  const handleChange = (e) => {
    setUploadImage(e.target.files[0]);
  };
  const handleDelete = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
    const docRef = doc(db, "posts", postId);
    deleteDoc(docRef);
    console.log(user);
  };

  const [isActive, setIsActive] = useState(false);
  const handleShow = () => {
    setIsActive(!isActive);
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
          <div className="profile-button">
            <button className="buttonImg" onClick={handleShow}>
              {uploadImage ? (
                <img
                  src={URL.createObjectURL(uploadImage)}
                  className="profile-photo"
                />
              ) : (
                <img className="profile-photo" src={user.photoURL} />
              )}
            </button>
            <div className={isActive ? "show" : "hide"}>
              <button onClick={handleLogOut}>Log out</button>
              <button onClick={toProfilePage}>Profile page</button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div>
          <div className="userInformation">
            <div className="users">
              <div className="userPhotoName">
                <div className="userPhoto" onClick={handleClick}>
                  {uploadImage ? (
                    <img src={URL.createObjectURL(uploadImage)} />
                  ) : (
                    <img src={user.photoURL} />
                  )}
                  <input
                    type="file"
                    onChange={(e) => handleChange(e)}
                    ref={inputRef}
                    style={{ display: "none" }}
                  />
                </div>
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

          <div className="crownDiv">
            <h4 className="text-access">Access exclusive tools & insights</h4>
            <div className="photoAndText">
              <img className="crownImg" src={Crown} alt="Crown 1" />
              <p>Try Premium for free</p>
            </div>
          </div>
        </div>
        <div className="postPart">
          <form onSubmit={handleSubmit} className="postSomething">
            {uploadImage ? (
              <img
                src={URL.createObjectURL(uploadImage)}
                className="profile-photo"
              />
            ) : (
              <img className="profile-photo" src={user.photoURL} />
            )}

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
                key={post.id}
                post={post}
                posts={posts}
                handleDelete={handleDelete}
                userName={user.displayName}
                uploadImage={uploadImage}
                defaultImage={user.photoURL}
              />
            );
          })}
        </div>
        <div className="addToFeedPart">
          <div className="feed">
            <h4>Add to your feed</h4>
            <div className="feedLists">
              {users.map((feed) => {
                return <AddFeed img={Avatar} name={feed.userName} />;
              })}
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
