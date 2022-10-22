import * as React from 'react';
import '../components/assets/Sidebar.scss';
import { HiMenu } from "react-icons/hi";
import { AiOutlineHome, AiOutlineMessage, AiOutlineLogout } from "react-icons/ai";
import { FcInvite } from "react-icons/fc";
import { FiSettings } from "react-icons/fi";
import { useState } from 'react';

export default function SideBar() {

  const [addClass, setAddClass] = useState(false);

  const handleClick = (e) => {
    setAddClass(current => !current);
  };

  return (
    <>
      <nav className={addClass ? 'open' : ''} onClick={handleClick}>
        <div className="logo">
          <i className="menu-icon"><HiMenu /></i>
          <h1 className="logo-name">Bixmoc</h1>
        </div>
        <div className="sidebar">
          <div className="logo">
            <i className="menu-icon"><HiMenu /></i>
            <h1 className="logo-name">Bixmoc</h1>
          </div>
          <div className="sidebar-content">
            <ul className="lists">
              <li className="list">
                <a href="#" className="nav-link">
                  <i className="icon"><AiOutlineHome /></i>
                  <span className="link">Dashboard</span>
                </a>
              </li>
              <li className="list">
                <a href="#" className="nav-link">
                  <i className="icon"><FcInvite /></i>
                  <span className="link">Invite</span>
                </a>
              </li>
              <li className="list">
                <a href="#" className="nav-link">
                  <i className="icon"><AiOutlineMessage /></i>
                  <span className="link">Messages</span>
                </a>
              </li>
              <li className="list">
                <a href="#" className="nav-link">
                  <i className="icon"><FiSettings /></i>
                  <span className="link">Settings</span>
                </a>
              </li>
              <li className="list">
                <a href="#" className="nav-link">
                  <i className="icon"><AiOutlineLogout /></i>
                  <span className="link">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="overlay-box"></section>
    </>
  );
}
