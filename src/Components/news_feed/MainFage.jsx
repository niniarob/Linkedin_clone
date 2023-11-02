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
import Post from "./Post";
import { UserAuth } from "../../Context/Context";
// import { getAuth, updateProfile } from "firebase/auth";
import { colRef, db } from "../../firebase";
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
} from "firebase/firestore";

export default function FileUpload() {
  const [text, setText] = useState("");
  const [posts, setPosts] = useState([]);

  const { user, auth } = UserAuth();

  const q = query(colRef, orderBy("createdAt", "desc"));

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

  const handleDelete = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
    const docRef = doc(db, "posts", postId);
    deleteDoc(docRef);
  };

  const handleShow = () => {};

  // const fileInputRef = useRef(null);

  // const handleFileUpload = () => {
  //   fileInputRef.current.click();
  // };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     console.log("Selected File:", file);

  //   }
  // };

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
            <button className="buttonImg" onClick={() => handleShow()}></button>
            <div className="show">
              <button>Log out</button>
              <button>Profile page</button>
            </div>
          </div>

          {/* <div>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div> */}
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
                key={post.id}
                post={post}
                posts={posts}
                handleDelete={handleDelete}
                userName={user.displayName}
              />
            );
          })}
        </div>
       <AddFeed />
      </main>
      <footer>
      <div className="footerSection">
            <div className="first">
                <div className="right">
                    <p className="foo">General</p>
                    <p>Sing Up</p>
                    <p>Help Center</p>
                    <p>About</p>
                    <p>Press</p>
                    <p>Blog</p>
                    <p>Careers</p>
                    <p>Developers</p>
                </div>
                <div className="right">
                    <p className="foo">Browse LinkedIn</p>
                    <p>Learning</p>
                    <p>Jobs</p>
                    <p>Salary</p>
                    <p>Mobile</p>
                    <p>Services</p>
                    <p>Products</p>
                </div>
                <div className="right">
                    <p className="foo">Business Solutions</p>
                    <p>Talent</p>
                    <p>Marketing</p>
                    <p>Sales</p>
                    <p>Learning</p>
                </div>
                <div className="right">
                    <p className="foo">Directories</p>
                    <p>Members</p>
                    <p>Jobs</p>
                    <p>Companies</p>
                    <p>Featured</p>
                    <p>Learning</p>
                    <p>Postts</p>
                    <p>Articles</p>
                </div>
                <div className="right boot">
                    <p >Services</p>
                    <p>Products</p>
                    <p>Advice</p>
                    <p>People Search</p>
                    <p>School</p>
                    <p>News</p>
                    <p>News Letters</p>
                </div>
            </div>
            <div className="second">
            <p>About</p>
        <p>Accessibility</p>
        <p>User Agreement</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
        <p>Copyright Policy</p>
        <p>Brand Policy</p>
        <p>Guest Controls</p>
        <p> Guidelines</p>
        <p>Language</p>
            </div>
            <div className="third">
            LinkedIn, 2023
            </div>
        </div>
      </footer>
    </div>
  );
}
