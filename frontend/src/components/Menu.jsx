import { motion } from "framer-motion";
import styled from "styled-components";
import React from "react";
import {useNavigate} from 'react-router-dom';
import { useState } from "react";

const MenuContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100vh;
  background: #FFF6EE;
  box-shadow: 6px 0 10px rgba(0, 0, 0, 0.15);
  padding: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
`;

const ToggleButton = styled(motion.button)`
  position: fixed;
  font-size: 28px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1100;
  color: #72645B;
`;

export default function SlideMenuWithToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false); // Close menu after navigation
  }
  return (
    <>
      {/* Toggle button slides from outside into menu */}
      <ToggleButton
        onClick={toggleMenu}
        initial={false}
        animate={{
          x: isOpen ? 240 : 0, // move to top-right inside menu when open
          y: isOpen ? 20 : 20, // stays at top
          rotate: isOpen ? 90 : 0, // optional rotation effect
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        style={{ 
          top: 0, 
          left: 20, 
          fontWeight: '900',
          fontSize: '30px',
        }}
      >
        {isOpen ? "✕" : "☰"}
      </ToggleButton>

      {/* Slide-out menu */}
      <MenuContainer
        initial={{ x: -260, opacity: 0 }}
        animate={{ x: isOpen ? 0 : -260, opacity: isOpen ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <h2 style={{ 
          marginTop: 60,
          color: '#72645B',
          fontSize: '35px',
          fontFamily: 'Rubik',
          fontWeight: '900',
          }}>Menu</h2>
        <div style={{ 
          marginTop: 0,
          fontSize: '20px',
          fontFamily: 'Rubik',
          fontWeight: '600',
          color: '#A79285', 
          
          }}>
          <p onClick={() => handleNavigation('/home')}
          style={{ cursor: "pointer" }}>Home</p>

          <p onClick={() => handleNavigation('/create')}
          style={{ cursor: "pointer" }}>Create</p>
          <p onClick={ () => handleNavigation('/reviews')}
          style={{ cursor: "pointer" }}>Reviews</p>
           <p onClick={ () => handleNavigation('/friends')}
          style={{ cursor: "pointer" }}>Friends</p>
          <p onClick={ () => handleNavigation('/')}
          style={{ cursor: "pointer" }}>Logout</p>
        </div>
      </MenuContainer>
    </>
  );
}