import Button from "./Button";
import { FaHome } from "react-icons/fa";
import { BiHash } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { BsFileTextFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { CgMoreO } from "react-icons/cg";

const Sidebar = ({ onShow }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        <ul>
          <li>
            <a href="">
              <FaHome className="icons" />
              <span className="hide-button-text">Main</span>
            </a>
          </li>
          <li>
            <a href="">
              <BiHash className="icons" />
              <span className="hide-button-text">Explore</span>
            </a>
          </li>
          <li>
            <a href="">
              <FaBell className="icons" />
              <span className="hide-button-text">Notifications</span>
            </a>
          </li>
          <li>
            <a href="">
              <FaEnvelope className="icons" />
              <span className="hide-button-text">Messages</span>
            </a>
          </li>
          <li>
            <a href="">
              <FaBookmark className="icons" />
              <span className="hide-button-text">Bookmarks</span>
            </a>
          </li>
          <li>
            <a href="">
              <BsFileTextFill className="icons" />
              <span className="hide-button-text">Lists</span>
            </a>
          </li>
          <li>
            <a href="">
              <FaUser className="icons" />
              <span className="hide-button-text">Profile</span>
            </a>
          </li>
          <li>
            <a href="">
              <CgMoreO className="icons" />
              <span className="hide-button-text">More</span>
            </a>
          </li>
        </ul>
        <Button text="Tweet" btnClass="add-tweet-button" event={onShow} />
        <Button text="+" btnClass="small-add-tweet-button" event={onShow} />
      </div>
    </div>
  );
};

export default Sidebar;
