import "./Header.css";
import Logo from "./assets/Logo 1 (1).png";
import EllipseProfile from "./assets/Ellipse 14.svg";
import Search from "./assets/search.svg";
import { UserAuth } from "../../Context/Context";

export default function Header() {
  const { user } = UserAuth();
  return (
    <>
      <div className="impDiv">
        <header>
          <div className="logoImput">
            <img src={Logo} alt="./logo 1 (1).png" />
            <input
              className="searchInputInProfile"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="listsImg">
            <ul>
              <li>Home</li>
              <li>My Network</li>
              <li>Jobs</li>
              <li>Messaging</li>
              <li>Notifications</li>
            </ul>
            <img src={user.photoURL} alt="./Ellipse 14.svg" />
          </div>
        </header>
      </div>
    </>
  );
}
