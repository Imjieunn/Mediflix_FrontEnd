import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faCogs,
  faTable,
  faList,
  faUser,
  faCog,
  faSignOut,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

import "../assets/styles/TestSidebar.css";

function TestSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleTrigger = () => setIsOpen(!isOpen);

  return (
    <div className="App">
      <div className="page">

        <div className={`sidebar ${isOpen ? "sidebar--open" : "test"}`}>
          <div className="trigger" onClick={handleTrigger}>
          <div className="test">
            <div>helllo</div>
            <div>heello</div>
            <div>eee</div>
          </div>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </div>

          <div className="sidebar-position">
            <FontAwesomeIcon icon={faUser} />
            <span>
                hello
            </span>
            
          </div>
          <div className="sidebar-position">
            <FontAwesomeIcon icon={faCogs} />
            <span>Menu item 2</span>
          </div>
          <div className="sidebar-position">
            <FontAwesomeIcon icon={faTable} />
            <span>Menu item 3</span>
          </div>

          <div className="sidebar-position">
            <FontAwesomeIcon icon={faList} />
            <span>Position 4</span>
          </div>
            <div className="below">
            <FontAwesomeIcon icon={faCog} />
            <span>설정</span>
          </div>
          <div className="below">
            <FontAwesomeIcon icon={faSignOut} />
            <span>로그아웃</span>
          </div>
          
        </div>
      </div>
    </div>
    
  );
}

export default TestSidebar;
