import React from "react";
import {useNavigate} from 'react-router-dom';
import styled from "styled-components";
import SharedNavBarLanding from "../SharedNavBarLanding";
import { useState } from "react";

//REPLACE WITH REAL CODE LATER vvvv






/* ----------------- Styled Components ----------------- */
const CreateContainer = styled.div`
  width: 1544px;
  height: 2330px;
  position: relative;
  background: #FFF6EE;
  overflow: hidden;
`;
const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;       // centers horizontally
  justify-content: center;   // centers vertically
  min-height: 180vh;         // full viewport height
  gap: 20px;                 // space between elements
`;  

//title
const PageTitle = styled.span`
  display: block;
  text-align: center;   
  color: #72645B;
  font-size: 100.28px;
  font-family: Rubik;
  font-weight: 900;
  text-decoration: underline;
  text-transform: lowercase;
  line-height: 150.42px;
`;

/* ----------------- Main Component ----------------- */
export default function CreateRec() {
  const navigate = useNavigate();

  return ( 
    <CreateContainer>
      <SharedNavBarLanding />
      <CenterContainer> 
        <PageTitle>create recommendation</PageTitle>
        {/* Additional content for creating a recommendation goes here */}
      </CenterContainer>
    </CreateContainer>
  );
}
