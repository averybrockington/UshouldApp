import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
/* ---------- NAV BAR ---------- */

const NavBar = styled.div`
  position: absolute;
  top: 40px;
  right: 160px;
  display: flex;
  gap: 35px;
  font-size: 20px;
`;

const NavItem = styled.span`
  color: #72645B;
  font-weight: 600;
  cursor: pointer;
  text-transform: lowercase;
  text-decoration: underline;


  &:hover {
    opacity: 0.7;
  }
`;
/* ---------- main component ---------- */
export default function SharedNavBarLanding() {
    
    const navigate = useNavigate();
    return (  /* NAV BAR */
      <NavBar>
        <NavItem onClick={() => navigate("/")}>home</NavItem>
        <NavItem
        onClick={() => {
        navigate("/"); // navigate to the page

        // wait a short moment for the page to render
        setTimeout(() => {
        const el = document.getElementById("about");
        if (el) el.scrollIntoView({ behavior: "smooth" });
            }, 50); // 50ms delay, adjust if needed
        }}
        >about</NavItem>


        <NavItem
        onClick={() => {
        navigate("/"); // navigate to the page

        // wait a short moment for the page to render
        setTimeout(() => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
            }, 50); // 50ms delay, adjust if needed
        }}
        >contact</NavItem>

         
        <NavItem as="a" href = "#sign-in">sign-in</NavItem>
    
      </NavBar>
    );
}