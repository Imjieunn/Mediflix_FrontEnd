import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faUsers,
  faTimes,
  faCog,
  faSignOut,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

import "../assets/styles/TestSidebar.css";
import TodoList from "./TodoList";
import styled from 'styled-components';
import MyProfile from "./MyProfile";
import ManagerBox from "./ManagerBox";

const BottomBlock = styled.div`
  font-size: 25px;
  margin-top: 250px;
  margin-right:
  padding: 50px;
  algign-items: center;
`
const ClosedIcons = styled.div`
  margin-top: 183px;
`

const ThreeIcons = styled.div`
  font-size: 40px;
  margin-top: 30px;
  margin-bottom: 20px;
  display: fixed;
  align-items: center;
`;
function TestSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleTrigger = () => setIsOpen(!isOpen);

  return (
    <div className="App">
      <div className="page">

        <div className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
        <div className="trigger" onClick={handleTrigger}>
            {isOpen ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <>
                <ClosedIcons>
                <FontAwesomeIcon icon={faBars} />
                <ThreeIcons>
                <FontAwesomeIcon icon={faUser} />
                <FontAwesomeIcon icon={faUsers} />
                <FontAwesomeIcon icon={faBook} />
                </ThreeIcons>
                </ClosedIcons>
              </>
            )}
          </div>

          <div className="sidebar-position">
            <span>
              <b>나의 프로필</b>
            <MyProfile/>
            </span>
            
            
          </div>
          
          <div className="sidebar-position">
            <span>   
              <ManagerBox/>
            </span>
          </div>

          <div className="sidebar-position">
            <span>
              <TodoList/>         
            </span>
          </div>
          <BottomBlock>
            <FontAwesomeIcon icon={faCog} />
            <FontAwesomeIcon icon={faSignOut} />
          </BottomBlock>
        </div>
      </div>
    </div>
    
  );
}

export default TestSidebar;
