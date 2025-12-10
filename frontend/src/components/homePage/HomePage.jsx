import React from "react";
import {useNavigate} from 'react-router-dom';
import styled from "styled-components";
import { useState } from "react";
import { useUser } from "../../utils/UserContext";
import SlideMenu from "../Menu";
/* ----------------- Styled Components ----------------- */

const HomePageContainer = styled.div`
  width: 1544px;
  height: 2330px;
  position: relative;
  background: #FFF6EE;
  overflow: hidden;
`;



// ----- TOP BAR -----
const TopBar = styled.div`
top: 200px;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1480px;
`;

const Icon = styled.div`
  cursor: pointer;
  font-size: 24px;
`;

// ----- MAIN BODY -----
const Body = styled.div`
  margin-top: 20px;
  height: calc(100vh - 260px);
  flex: 1;
  display: flex;
  overflow: hidden;
  border-top: 4px solid #72645B;
`;

const LeftPanel = styled.div`
  top: 260px;
  width: 350px;
  border-right: 4px solid #72645B;
  overflow-y: auto;
  font-family: Rubik;
  padding: 10px;
`;

const RightPanel = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  font-family: Rubik;
  color: #685b52ff;
`;

const Item = styled.div`
  padding: 20px;
  margin-bottom: 6px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  font-family: Rubik;
  color: #FFF6EE;
  background: #72645B;

  &:hover {
    background: #675a52ff;
  }
`;

export default function HomeScreen() {

  //state for menu
  // Mock data (replace with real user recommendations)
  const recommendations = [
    { id: 1, title: "Item A", description: "Details about item A..." },
    { id: 2, title: "Item B", description: "Details about item B..." },
    { id: 3, title: "Item C", description: "Details about item C..." },
  ];

  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
  const { user, logout } = useUser(); 
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HomePageContainer>
       {/* ----------- TOP BAR ----------- */}
      <TopBar>
        {/* --- Hamburger is handled inside SlideMenuWithToggle now --- */}
        <SlideMenu isOpen={menuOpen} toggleMenu={() => setMenuOpen(!menuOpen)} />

        {/* --- Profile Icon stays top-right --- */}
        <Icon>👤</Icon>
      </TopBar>

      

      {/* ----------- LEFT/RIGHT PANELS ----------- */}
      <Body>
        {/* LEFT LIST */}
        <LeftPanel>
          {recommendations.map(rec => (
            <Item key={rec.id} onClick={() => setSelected(rec)}>
              {rec.title}
            </Item>
          ))}
        </LeftPanel>

        {/* RIGHT DISPLAY */}
        <RightPanel>
          {selected ? (
            <>
              <h2>{selected.title}</h2>
              <p>{selected.description}</p>
            </>
          ) : (
            <p>Select a recommendation to view details.</p>
          )}
        </RightPanel>
      </Body>
    </HomePageContainer>
  );
}


/* ---------- main component ---------- */

